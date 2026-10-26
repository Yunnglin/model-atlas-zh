import { useEffect, useRef, useState } from 'react';
import { ArrowsOutIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../../core/schemas/knowledge';
import { projectNavigation } from '../../../core/projections/navigation';
import type { TreeGraph } from '../layouts/tree-graph';
import styles from './TreeCanvas.module.css';

interface Props {
  data: KnowledgeBase;
  expanded: readonly string[];
  focus?: string;
  onSelect: (id: string) => void;
  onToggle: (id: string) => void;
}

export function MapCanvas({ data, expanded, focus, onSelect, onToggle }: Props) {
  const container = useRef<HTMLDivElement>(null);
  const controller = useRef<TreeGraph | undefined>(undefined);
  const latest = useRef({ expanded, focus, onSelect, onToggle });
  latest.current = { expanded, focus, onSelect, onToggle };
  const queue = useRef(Promise.resolve());
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(true);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const generation = useRef(0);

  useEffect(() => {
    const element = container.current!;
    let disposed = false;
    let graph: TreeGraph | undefined;
    let observer: ResizeObserver | undefined;
    setReady(false);
    setBusy(true);
    setError(false);
    void import('../layouts/tree-graph')
      .then(async ({ TreeGraph }) => {
        if (disposed) return;
        graph = new TreeGraph(element, data);
        controller.current = graph;
        await graph.apply(latest.current.expanded, latest.current.focus);
        if (disposed) return;
        observer = new ResizeObserver(([entry]) => {
          if (!entry || disposed) return;
          const { width, height } = entry.contentRect;
          queue.current = queue.current
            .catch(() => {})
            .then(async () => {
              if (!disposed && graph && !graph.graph.destroyed)
                await graph.resize(Math.round(width), Math.round(height));
            })
            .catch(() => {
              if (!disposed) setError(true);
            });
        });
        observer.observe(element);
        setReady(true);
        setBusy(false);
      })
      .catch(() => {
        if (!disposed) {
          setError(true);
          setBusy(false);
        }
      });
    function click(event: MouseEvent) {
      const button = (event.target as Element).closest<HTMLButtonElement>('button[data-action]');
      if (!button || !element.contains(button)) return;
      event.stopPropagation();
      if (button.dataset.action === 'toggle') latest.current.onToggle(button.dataset.entry!);
      else latest.current.onSelect(button.dataset.knowledge!);
    }
    function pointer(event: PointerEvent) {
      if ((event.target as Element).closest('button')) event.stopPropagation();
    }
    element.addEventListener('click', click, true);
    element.addEventListener('pointerdown', pointer, true);
    return () => {
      disposed = true;
      observer?.disconnect();
      element.removeEventListener('click', click, true);
      element.removeEventListener('pointerdown', pointer, true);
      graph?.destroy();
      controller.current = undefined;
    };
  }, [data, attempt]);

  useEffect(() => {
    if (!ready) return;
    const request = ++generation.current;
    setBusy(true);
    queue.current = queue.current
      .catch(() => {})
      .then(async () => {
        const graph = controller.current;
        if (request !== generation.current || !graph) return;
        await graph.apply(expanded, focus);
        if (controller.current !== graph) return;
        if (request === generation.current) {
          setBusy(false);
          setError(false);
        }
      })
      .catch(() => {
        if (request === generation.current) {
          setBusy(false);
          setError(true);
        }
      });
  }, [expanded, focus, ready]);

  const visible = projectNavigation(data, expanded).nodes.length;
  return (
    <div
      className={styles.canvas}
      data-testid="map-canvas"
      role="region"
      aria-label="树形知识导航"
      aria-busy={busy}
    >
      <div ref={container} className={styles.graph} />
      <p className={styles.status} aria-live="polite">
        {visible} 个导航节点 · 同级只展开一条分支
      </p>
      <div className={styles.controls} aria-label="地图操作">
        <button
          type="button"
          aria-label="放大地图"
          onClick={() => void controller.current?.zoom(1.15)}
        >
          <PlusIcon size={18} />
        </button>
        <button
          type="button"
          aria-label="缩小地图"
          onClick={() => void controller.current?.zoom(1 / 1.15)}
        >
          <MinusIcon size={18} />
        </button>
        <button type="button" className={styles.fit} onClick={() => void controller.current?.fit()}>
          <ArrowsOutIcon size={17} />
          适配全图
        </button>
      </div>
      {error ? (
        <div className={styles.notice} role="alert">
          <p>地图暂时没能打开，正文仍可通过搜索阅读。</p>
          <button onClick={() => setAttempt((value) => value + 1)}>重试地图</button>
        </div>
      ) : (
        busy && (
          <p className={styles.notice} role="status">
            正在整理分支…
          </p>
        )
      )}
    </div>
  );
}
