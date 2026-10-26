import { Graph, type NodeData, type IPointerEvent } from '@antv/g6';
import type { KnowledgeBase, NavigationEntry } from '../../../core/schemas/knowledge';
import { childrenOf, projectNavigation } from '../../../core/projections/navigation';
import styles from '../components/TreeCanvas.module.css';

const WIDTH = 204;
function height(entry: NavigationEntry) {
  return entry.knowledge ? 108 : 82;
}

/** This adapter owns G6 types and DOM nodes; knowledge records contain neither. */
export class TreeGraph {
  readonly graph: Graph;
  private initialized = false;
  private selected?: string;
  private expanded: readonly string[] = [];
  private size: [number, number];
  private readonly reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(
    private container: HTMLElement,
    private data: KnowledgeBase,
  ) {
    this.size = [container.clientWidth, container.clientHeight];
    this.graph = new Graph({
      container,
      width: container.clientWidth,
      height: container.clientHeight,
      padding: [36, 38, 58, 38],
      zoomRange: [0.55, 1.25],
      animation: this.reduced ? false : { duration: 240 },
      node: {
        type: 'html',
        style: {
          size: (node) => [WIDTH, height(node.data!.entry as NavigationEntry)],
          dx: -WIDTH / 2,
          dy: (node: NodeData) => -height(node.data!.entry as NavigationEntry) / 2,
          innerHTML: (node: NodeData) => this.card(node),
          ports: [
            { key: 'left', placement: 'left' },
            { key: 'right', placement: 'right' },
          ],
        },
      },
      edge: {
        type: 'cubic-horizontal',
        style: { stroke: '#c2d3d0', lineWidth: 1.4, sourcePort: 'right', targetPort: 'left' },
      },
      layout: {
        type: 'compact-box',
        direction: 'LR',
        getWidth: () => WIDTH,
        getHeight: (node: { id: string }) =>
          height(data.navigation.find((entry) => entry.id === node.id)!),
        getHGap: () => 25,
        getVGap: () => 12,
      },
      behaviors: [
        { type: 'drag-canvas', enable: (event: IPointerEvent) => event.targetType === 'canvas' },
        { type: 'zoom-canvas', sensitivity: 0.8 },
      ],
    });
  }

  private card(node: NodeData): HTMLElement {
    const entry = node.data!.entry as NavigationEntry;
    const knowledge = this.data.nodes.find((item) => item.id === entry.knowledge);
    const title = knowledge?.title ?? entry.title!;
    const children = childrenOf(this.data, entry.id);
    const open = children.length > 0 && node.style?.collapsed === false;
    const card = document.createElement('div');
    card.className = `${styles.treeNode} ${knowledge ? '' : styles.groupNode} ${open ? styles.openNode : ''} ${this.selected && entry.knowledge === this.selected ? styles.selectedNode : ''}`;
    card.dataset.navId = entry.id;
    if (entry.knowledge) card.dataset.knowledgeId = entry.knowledge;
    card.style.height = `${height(entry)}px`;
    const name = document.createElement('button');
    name.type = 'button';
    name.className = styles.nodeName!;
    name.dataset.action = knowledge ? 'read' : 'toggle';
    name.dataset.entry = entry.id;
    if (knowledge) {
      name.dataset.knowledge = knowledge.id;
      name.textContent = title;
      name.setAttribute(
        'aria-pressed',
        String(Boolean(this.selected && entry.knowledge === this.selected)),
      );
    } else {
      name.textContent = `${title} · ${open ? '收起' : '展开'}`;
      name.setAttribute('aria-expanded', String(open));
    }
    card.append(name);
    const description = document.createElement('p');
    description.className = styles.nodeDescription!;
    description.textContent = entry.description ?? knowledge?.purpose ?? '';
    card.append(description);
    if (knowledge && children.length && entry.parent) {
      const toggle = document.createElement('button');
      toggle.type = 'button';
      toggle.className = styles.disclosure!;
      toggle.dataset.action = 'toggle';
      toggle.dataset.entry = entry.id;
      toggle.textContent = `${open ? '收起' : '展开'} · ${children.length} 项`;
      toggle.setAttribute('aria-label', `${toggle.textContent}：${title}`);
      toggle.setAttribute('aria-expanded', String(open));
      card.append(toggle);
    } else if (knowledge) {
      const hint = document.createElement('span');
      hint.className = styles.nodeHint!;
      hint.textContent = entry.parent ? '点击名称读原理' : '共同起点 · 点击名称阅读';
      card.append(hint);
    }
    return card;
  }

  async apply(expanded: readonly string[], selected?: string): Promise<void> {
    if (this.graph.destroyed) return;
    const previousSelected = this.selected;
    this.selected = selected;
    const focused = this.container.contains(document.activeElement)
      ? (document.activeElement as HTMLButtonElement)
      : undefined;
    const focusEntry = focused?.dataset.entry;
    const focusAction = focused?.dataset.action;
    const anchorId =
      [...expanded].reverse().find((id) => !this.expanded.includes(id)) ??
      [...this.expanded].reverse().find((id) => !expanded.includes(id));
    let anchor: number[] | undefined;
    if (this.initialized && anchorId && this.graph.getElementVisibility(anchorId) === 'visible')
      anchor = [...this.graph.getViewportByCanvas(this.graph.getElementPosition(anchorId))];
    if (!this.initialized) {
      this.graph.setData({
        nodes: this.data.navigation.map((entry) => ({
          id: entry.id,
          children: childrenOf(this.data, entry.id).map((child) => child.id),
          data: { entry, selected: Boolean(selected && entry.knowledge === selected) },
          style: { collapsed: !expanded.includes(entry.id) },
        })),
        edges: this.data.navigation
          .filter((entry) => entry.parent)
          .map((entry) => ({
            id: `nav-edge-${entry.id}`,
            source: entry.parent!,
            target: entry.id,
          })),
      });
      await this.graph.render();
      this.initialized = true;
      await this.fit(false);
      const narrow = this.container.clientWidth < 960;
      const zoom = narrow
        ? 0.75
        : Math.min(1, Math.max(0.8, (this.container.clientWidth - 80) / 1220));
      await this.graph.zoomTo(zoom, false);
      await this.graph.fitCenter(false);
      const start = narrow
        ? expanded.at(-1)!
        : this.data.navigation.find((entry) => !entry.parent)!.id;
      const position = this.graph.getViewportByCanvas(this.graph.getElementPosition(start));
      await this.graph.translateBy(
        [(narrow ? 24 : 40) + (WIDTH * zoom) / 2 - position[0]!, 0],
        false,
      );
      this.container.querySelectorAll('canvas').forEach((canvas) => {
        canvas.setAttribute('aria-hidden', 'true');
        canvas.tabIndex = -1;
      });
    } else {
      // Close siblings first, then use G6's native aligned expansion. No custom placement engine.
      for (const id of [...this.expanded].reverse()) {
        if (!expanded.includes(id))
          await this.graph.collapseElement(id, { animation: false, align: false });
      }
      if (anchor && anchorId) {
        const after = this.graph.getViewportByCanvas(this.graph.getElementPosition(anchorId));
        await this.graph.translateBy([anchor[0]! - after[0]!, anchor[1]! - after[1]!], false);
      }
      for (const id of expanded) {
        if (!this.expanded.includes(id))
          await this.graph.expandElement(id, { animation: !this.reduced, align: true });
      }
      if (previousSelected !== selected) {
        const changes = projectNavigation(this.data, expanded).nodes.filter(
          (entry) =>
            entry.knowledge &&
            (entry.knowledge === previousSelected || entry.knowledge === selected),
        );
        if (changes.length) {
          this.graph.updateNodeData(
            changes.map((entry) => ({
              id: entry.id,
              data: { selected: entry.knowledge === selected },
            })),
          );
          await this.graph.draw();
        }
      }
    }
    if (this.container.clientWidth < 960 && anchorId && expanded.includes(anchorId)) {
      const position = this.graph.getViewportByCanvas(this.graph.getElementPosition(anchorId));
      await this.graph.translateBy(
        [24 + (WIDTH * this.graph.getZoom()) / 2 - position[0]!, 0],
        !this.reduced,
      );
    }
    await this.keepWithinHeight();
    this.expanded = [...expanded];
    this.selected = selected;
    if (focusEntry && focusAction)
      this.container
        .querySelector<HTMLButtonElement>(
          `button[data-entry="${focusEntry}"][data-action="${focusAction}"]`,
        )
        ?.focus({ preventScroll: true });
  }

  private async keepWithinHeight() {
    const frame = this.container.getBoundingClientRect();
    const boxes = [...this.container.querySelectorAll('[data-nav-id]')]
      .map((element) => element.getBoundingClientRect())
      .filter((box) => box.width > 0 && box.height > 0);
    if (!boxes.length) return;
    const top = Math.min(...boxes.map((box) => box.top - frame.top));
    const bottom = Math.max(...boxes.map((box) => box.bottom - frame.top));
    const available = Math.max(180, frame.height - 90);
    if (bottom - top > available) {
      await this.graph.zoomTo(
        Math.max(0.55, (this.graph.getZoom() * available) / (bottom - top)),
        false,
      );
      await this.graph.fitCenter(false);
      const root = this.data.navigation.find((entry) => !entry.parent)!.id;
      const position = this.graph.getViewportByCanvas(this.graph.getElementPosition(root));
      if (frame.width >= 960)
        await this.graph.translateBy(
          [40 + (WIDTH * this.graph.getZoom()) / 2 - position[0]!, 0],
          false,
        );
    } else {
      const shift =
        top < 30 ? 30 - top : bottom > frame.height - 60 ? frame.height - 60 - bottom : 0;
      if (shift) await this.graph.translateBy([0, shift], false);
    }
  }

  async fit(animate = true) {
    await this.graph.fitView({ when: 'always' }, animate && !this.reduced);
    if (this.graph.getZoom() > 1) await this.graph.zoomTo(1, false);
    await this.graph.fitCenter(false);
  }
  async resize(width: number, height: number) {
    if (this.size[0] === width && this.size[1] === height) return;
    this.size = [width, height];
    this.graph.resize(width, height);
    const narrow = width < 960;
    await this.graph.zoomTo(narrow ? 0.75 : Math.min(1, Math.max(0.8, (width - 80) / 1220)), false);
    await this.graph.fitCenter(false);
    const id = narrow
      ? this.expanded.at(-1)!
      : this.data.navigation.find((entry) => !entry.parent)!.id;
    const position = this.graph.getViewportByCanvas(this.graph.getElementPosition(id));
    await this.graph.translateBy(
      [(narrow ? 24 : 40) + (WIDTH * this.graph.getZoom()) / 2 - position[0]!, 0],
      false,
    );
    await this.keepWithinHeight();
  }
  zoom(factor: number) {
    return this.graph.zoomTo(
      Math.min(1.25, Math.max(0.55, this.graph.getZoom() * factor)),
      !this.reduced,
    );
  }
  destroy() {
    this.graph.destroy();
  }
}
