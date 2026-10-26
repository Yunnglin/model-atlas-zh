import { Graph, type NodeData, type IPointerEvent } from '@antv/g6';
import type { KnowledgeBase, KnowledgeNode } from '../../../core/schemas/knowledge';
import { projectModelMap } from '../../../core/projections/model-map';
import styles from '../components/MapCanvas.module.css';

const WIDTH = 204,
  HEIGHT = 84;
/** G6 owns layout and the camera. Knowledge data has no renderer coordinates or DOM types. */
export class ModelGraph {
  readonly graph: Graph;
  private readonly reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  constructor(
    private container: HTMLElement,
    data: KnowledgeBase,
  ) {
    const map = projectModelMap(data);
    this.graph = new Graph({
      container,
      width: Math.max(1, container.clientWidth),
      height: Math.max(1, container.clientHeight),
      padding: [16, 24, 80, 24],
      animation: false,
      zoomRange: [0.35, 1.4],
      data: {
        nodes: map.nodes.map((node) => ({ id: node.id, data: { knowledge: node } })),
        edges: map.edges.map((edge) => ({
          id: edge.id,
          source: edge.from,
          target: edge.to,
          data: { label: edge.label },
          style: { lineDash: edge.comparison ? [5, 5] : undefined },
        })),
      },
      node: {
        type: 'html',
        style: {
          size: [WIDTH, HEIGHT],
          dx: -WIDTH / 2,
          dy: -HEIGHT / 2,
          innerHTML: (node: NodeData) => this.card(node.data!.knowledge as KnowledgeNode),
          ports: [
            { key: 'left', placement: 'left' },
            { key: 'right', placement: 'right' },
          ],
        },
      },
      edge: {
        type: 'polyline',
        style: {
          stroke: '#b0c7bf',
          lineWidth: 1.4,
          sourcePort: 'right',
          targetPort: 'left',
          radius: 10,
        },
      },
      layout: {
        type: 'antv-dagre',
        rankdir: 'LR',
        nodesep: 6,
        ranksep: 30,
        nodeSize: [WIDTH, HEIGHT],
        controlPoints: true,
      },
      behaviors: [
        { type: 'drag-canvas', enable: (event: IPointerEvent) => event.targetType === 'canvas' },
        { type: 'zoom-canvas', sensitivity: 0.7 },
      ],
    });
  }
  private card(node: KnowledgeNode) {
    const card = document.createElement('div');
    card.className = `${styles.modelNode} ${node.id === 'transformer' ? styles.rootNode : ''}`;
    card.dataset.modelId = node.id;
    const year = document.createElement('span');
    year.className = styles.nodeHint!;
    year.textContent = node.year ? String(node.year) : '模型';
    const name = document.createElement('button');
    name.type = 'button';
    name.className = styles.nodeName!;
    name.dataset.knowledge = node.id;
    name.textContent = node.title;
    const description = document.createElement('p');
    description.className = styles.nodeDescription!;
    description.textContent = node.purpose;
    card.append(year, name, description);
    return card;
  }
  async render() {
    await this.graph.render();
    await this.frame();
    this.container.querySelectorAll('canvas').forEach((canvas) => {
      canvas.setAttribute('aria-hidden', 'true');
      canvas.tabIndex = -1;
    });
  }
  private async frame() {
    await this.fit(false);
    // Keep text readable on a phone; its overview can be panned or explicitly fitted.
    if (this.container.clientWidth < 760) {
      await this.graph.zoomTo(0.75, false);
      await this.graph.fitCenter(false);
      const root = this.graph.getViewportByCanvas(this.graph.getElementPosition('transformer'));
      await this.graph.translateBy([24 + (WIDTH * 0.75) / 2 - root[0]!, 0], false);
    }
  }
  async fit(animate = true) {
    await this.graph.fitView({ when: 'always' }, animate && !this.reduced);
    if (this.graph.getZoom() > 1) await this.graph.zoomTo(1, false);
    await this.graph.fitCenter(false);
  }
  async resize(width: number, height: number) {
    if (width <= 0 || height <= 0 || this.graph.destroyed) return;
    const size = this.graph.getSize();
    if (size[0] === width && size[1] === height) return;
    this.graph.resize(width, height);
    await this.frame();
  }
  zoom(factor: number) {
    return this.graph.zoomTo(
      Math.min(1.4, Math.max(0.35, this.graph.getZoom() * factor)),
      !this.reduced,
    );
  }
  destroy() {
    if (!this.graph.destroyed) this.graph.destroy();
  }
}
