import { Graph, type NodeData } from '@antv/g6';
import type { TimelineModel, Relation } from '../../../core/schemas/knowledge';
import {
  timelineLayout,
  NODE_WIDTH as WIDTH,
  NODE_HEIGHT as HEIGHT,
  COLUMN_STEP,
  ROW_STEP,
  AXIS_WIDTH,
  NODE_OFFSET,
} from './timeline-layout';
import styles from '../components/MapCanvas.module.css';

type Edge = { id: string; from: string; to: string; relation: Relation };

/** Columns represent organizations; vertical positions are sorted by year and month. */
export class ModelGraph {
  readonly graph: Graph;
  constructor(
    private container: HTMLElement,
    models: TimelineModel[],
    edges: Edge[],
    selected?: string,
  ) {
    const layout = timelineLayout(models);
    const width = Math.max(container.parentElement?.clientWidth ?? 0, layout.width);
    const nodes: NodeData[] = [];
    // G6 anchors edges to its declared HTML node bounds; measure the same card
    // that is rendered so its bounds match the visible, content-sized label.
    const widths = new Map(models.map((model) => [model.id, this.measureCard(model, selected)]));
    for (const period of layout.periods) {
      for (const [column, organization] of layout.organizations.entries()) {
        period.items
          .filter((model) => model.organization === organization)
          .forEach((model, index) => {
            const nodeWidth = widths.get(model.id)!;
            nodes.push({
              id: model.id,
              data: { model },
              style: {
                x: AXIS_WIDTH + NODE_OFFSET + nodeWidth / 2 + column * COLUMN_STEP,
                y: period.top + HEIGHT / 2 + index * ROW_STEP,
                size: [nodeWidth, HEIGHT],
                dx: -nodeWidth / 2,
                dy: -HEIGHT / 2,
              },
            });
          });
      }
    }
    container.style.width = `${width}px`;
    container.style.height = `${layout.height}px`;
    this.graph = new Graph({
      container,
      width,
      height: layout.height,
      devicePixelRatio: 1,
      animation: false,
      data: {
        nodes,
        edges: edges
          .filter((edge) => selected && (edge.from === selected || edge.to === selected))
          .map((edge) => ({
            id: edge.id,
            source: edge.from,
            target: edge.to,
            style: { lineDash: edge.relation.kind === 'compared-with' ? [5, 5] : undefined },
          })),
      },
      node: {
        type: 'html',
        style: {
          innerHTML: (node: NodeData) => this.card(node.data!.model as TimelineModel, selected),
        },
      },
      edge: {
        type: 'polyline',
        style: {
          stroke: '#588a7b',
          lineWidth: 2,
          radius: 8,
          endArrow: false,
          router: {
            type: 'shortest-path',
            enableObstacleAvoidance: true,
            gridSize: 10,
            offset: 4,
            maximumLoops: 10000,
          },
        },
      },
      behaviors: [],
    });
  }
  private measureCard(model: TimelineModel, selected?: string) {
    const card = this.card(model, selected);
    Object.assign(card.style, { position: 'absolute', visibility: 'hidden', left: '0', top: '0' });
    this.container.append(card);
    const width = Math.min(WIDTH, Math.ceil(card.getBoundingClientRect().width));
    card.remove();
    return width;
  }
  private card(model: TimelineModel, selected?: string) {
    const card = document.createElement('div');
    card.className = `${styles.modelNode} ${model.id === selected ? styles.selected : ''}`;
    card.dataset.modelId = model.id;
    card.dataset.family = model.family ?? 'other';
    const name = document.createElement('button');
    name.type = 'button';
    name.className = styles.nodeName!;
    name.dataset.knowledge = model.id;
    name.textContent = model.title;
    name.title = model.title;
    card.append(name);
    return card;
  }
  async render() {
    await this.graph.render();
    this.container.querySelectorAll('canvas').forEach((canvas) => {
      canvas.setAttribute('aria-hidden', 'true');
      canvas.tabIndex = -1;
    });
  }
  destroy() {
    if (!this.graph.destroyed) this.graph.destroy();
  }
}
