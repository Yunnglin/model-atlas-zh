import { useEffect, useRef, useState } from 'react';
import type { Relation, TimelineModel } from '../../../core/schemas/knowledge';
import {
  AXIS_WIDTH,
  COLUMN_STEP,
  NODE_OFFSET,
  TRACK_OFFSET,
  timelineLayout,
} from '../layouts/timeline-layout';
import styles from './MapCanvas.module.css';

export function MapCanvas({
  models,
  edges,
  selected,
  onSelect,
}: {
  models: TimelineModel[];
  edges: { id: string; from: string; to: string; relation: Relation }[];
  selected?: string;
  onSelect: (id: string) => void;
}) {
  const container = useRef<HTMLDivElement>(null);
  const latest = useRef(onSelect);
  latest.current = onSelect;
  const [busy, setBusy] = useState(true),
    [error, setError] = useState(false);
  useEffect(() => {
    const element = container.current!;
    let disposed = false,
      graph: import('../layouts/model-graph').ModelGraph | undefined;
    let queue = Promise.resolve(),
      lastWidth = 0;
    setBusy(true);
    setError(false);
    const observer = new ResizeObserver(([entry]) => {
      if (!entry || disposed) return;
      const width = Math.round(entry.contentRect.width);
      if (width <= 0 || width === lastWidth) return;
      lastWidth = width;
      queue = queue
        .catch(() => {})
        .then(async () => {
          if (disposed) return;
          graph?.destroy();
          const { ModelGraph } = await import('../layouts/model-graph');
          if (disposed) return;
          graph = new ModelGraph(element, models, edges, selected);
          await graph.render();
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
      if (button && element.contains(button)) latest.current(button.dataset.knowledge!);
    }
    element.addEventListener('click', click);
    return () => {
      disposed = true;
      observer.disconnect();
      element.removeEventListener('click', click);
      graph?.destroy();
    };
  }, [models, edges, selected]);
  const layout = timelineLayout(models);
  return (
    <div
      className={styles.canvas}
      data-testid="map-canvas"
      role="region"
      aria-label="模型时间轴"
      aria-busy={busy}
      tabIndex={0}
    >
      <div
        className={styles.headingBar}
        style={{
          gridTemplateColumns: `${AXIS_WIDTH}px repeat(${layout.organizations.length}, ${COLUMN_STEP}px)`,
        }}
      >
        <span title="同一月份横向对齐；空月份省略，行距不代表实际时间。问号表示月份待核对。">
          时间
        </span>
        {layout.organizations.map((organization) => (
          <span key={organization}>{organization}</span>
        ))}
      </div>
      <div className={styles.bands} style={{ width: layout.width }} aria-hidden="true">
        {layout.periods.map((period) => (
          <div className={styles.band} key={period.period} style={{ top: period.top }} />
        ))}
      </div>
      <div className={styles.tracks} style={{ width: layout.width }} aria-hidden="true">
        {layout.tracks.map((track) => (
          <div key={track.organization}>
            <div
              data-testid="vendor-track"
              data-organization={track.organization}
              className={styles.track}
              style={{ left: track.left, top: track.top, height: track.height }}
            />
            {track.positions.map((top) => (
              <div
                className={styles.tick}
                key={top}
                style={{ left: track.left, top, width: NODE_OFFSET - TRACK_OFFSET }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.axis}>
        {layout.periods.map((period) => (
          <div className={styles.year} key={period.period} style={{ top: period.top }}>
            {period.label}
          </div>
        ))}
      </div>
      <div ref={container} className={styles.graph} />
      {error && (
        <p className={styles.notice} role="alert">
          时间轴暂时无法打开，请重试页面。
        </p>
      )}
      {busy && !error && (
        <p className={styles.notice} role="status">
          正在整理模型时间轴…
        </p>
      )}
    </div>
  );
}
