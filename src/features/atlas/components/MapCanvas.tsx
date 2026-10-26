import { useEffect, useRef, useState } from 'react';
import { ArrowsOutIcon, MinusIcon, PlusIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../../core/schemas/knowledge';
import type { ModelGraph } from '../layouts/model-graph';
import styles from './MapCanvas.module.css';

export function MapCanvas({
  data,
  onSelect,
}: {
  data: KnowledgeBase;
  onSelect: (id: string) => void;
}) {
  const container = useRef<HTMLDivElement>(null),
    controller = useRef<ModelGraph | undefined>(undefined);
  const latest = useRef(onSelect);
  latest.current = onSelect;
  const [busy, setBusy] = useState(true),
    [error, setError] = useState(false);
  useEffect(() => {
    const element = container.current!;
    let disposed = false,
      graph: ModelGraph | undefined;
    let queue = Promise.resolve();
    setBusy(true);
    setError(false);
    // A direct model link keeps the map hidden. Initialize only when its canvas has space.
    const observer = new ResizeObserver(([entry]) => {
      if (!entry || disposed) return;
      const { width, height } = entry.contentRect;
      if (width <= 0 || height <= 0) return;
      queue = queue
        .catch(() => {})
        .then(async () => {
          if (disposed) return;
          if (!graph) {
            const { ModelGraph } = await import('../layouts/model-graph');
            if (disposed) return;
            graph = new ModelGraph(element, data);
            controller.current = graph;
            await graph.render();
          } else await graph.resize(Math.round(width), Math.round(height));
          if (!disposed) {
            setBusy(false);
            setError(false);
          }
        })
        .catch(() => {
          if (!disposed) {
            setBusy(false);
            setError(true);
          }
        });
    });
    observer.observe(element);
    function click(event: MouseEvent) {
      const button = (event.target as Element).closest<HTMLButtonElement>('button[data-knowledge]');
      if (button && element.contains(button)) {
        event.stopPropagation();
        latest.current(button.dataset.knowledge!);
      }
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
  }, [data]);
  return (
    <div
      className={styles.canvas}
      data-testid="map-canvas"
      role="region"
      aria-label="模型关系地图"
      aria-busy={busy}
    >
      <div ref={container} className={styles.graph} />
      <p className={styles.status}>点击模型阅读 · 拖动看更多 · 可适配全图</p>
      <div className={styles.controls} aria-label="地图操作">
        <button
          disabled={busy || error}
          aria-label="放大地图"
          onClick={() => void controller.current?.zoom(1.15)}
        >
          <PlusIcon size={18} />
        </button>
        <button
          disabled={busy || error}
          aria-label="缩小地图"
          onClick={() => void controller.current?.zoom(1 / 1.15)}
        >
          <MinusIcon size={18} />
        </button>
        <button
          disabled={busy || error}
          className={styles.fit}
          onClick={() => void controller.current?.fit()}
        >
          <ArrowsOutIcon size={17} />
          适配全图
        </button>
      </div>
      {error ? (
        <div className={styles.notice} role="alert">
          <p>地图暂时没能打开，正文仍可通过搜索阅读。</p>
          <button onClick={() => location.reload()}>重试地图</button>
        </div>
      ) : (
        busy && (
          <p className={styles.notice} role="status">
            正在整理模型关系…
          </p>
        )
      )}
    </div>
  );
}
