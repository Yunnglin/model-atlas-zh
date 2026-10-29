import { useEffect, useRef, useState } from 'react';
import { CaretDownIcon } from '@phosphor-icons/react';
import type { TimelineModel } from '../../../core/schemas/knowledge';
import type { TimelineFilters } from '../../../core/projections/timeline';
import styles from './TimelineFilterBar.module.css';

export const architectures: Record<TimelineModel['architecture'], string> = {
  encoder: 'Encoder',
  decoder: 'Decoder',
  'encoder-decoder': 'Encoder + Decoder',
  mixed: '混合结构',
  other: '其他结构',
  unknown: '未公开或待确认',
};
export const modalities = { text: '文字', image: '图像', audio: '音频', video: '视频' } as const;

export function TimelineFilterBar({
  filters,
  families,
  count,
  onChange,
  onClear,
}: {
  filters: TimelineFilters;
  families: string[];
  count: number;
  onChange: <K extends keyof TimelineFilters>(key: K, value: TimelineFilters[K]) => void;
  onClear: () => void;
}) {
  const details = useRef<HTMLDetailsElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!details.current?.contains(event.target as Node))
        details.current?.removeAttribute('open');
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape' && details.current?.open) {
        details.current.open = false;
        details.current.querySelector('summary')?.focus();
      }
    }
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);
  const modalityLabel = filters.modalities.length
    ? filters.modalities.map((item) => modalities[item]).join('＋')
    : '全部模态';
  return (
    <div className={styles.filters}>
      <label>
        结构
        <select
          aria-label="结构"
          value={filters.architecture}
          onChange={(event) =>
            onChange('architecture', event.target.value as TimelineFilters['architecture'])
          }
        >
          <option value="all">全部结构</option>
          {Object.entries(architectures).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
      </label>
      <div className={styles.modalityField}>
        <span>模态</span>
        <details
          ref={details}
          className={styles.modalityFilter}
          onToggle={(event) => setOpen(event.currentTarget.open)}
        >
          <summary role="button" aria-expanded={open} aria-label={`模态：${modalityLabel}`}>
            {modalityLabel}
            <CaretDownIcon size={14} aria-hidden="true" />
          </summary>
          <div className={styles.modalityPanel}>
            <fieldset>
              <legend>同时涉及所选模态</legend>
              {Object.entries(modalities).map(([key, label]) => {
                const value = key as TimelineModel['modalities'][number];
                return (
                  <label key={key}>
                    <input
                      type="checkbox"
                      checked={filters.modalities.includes(value)}
                      onChange={(event) =>
                        onChange(
                          'modalities',
                          event.target.checked
                            ? [...filters.modalities, value]
                            : filters.modalities.filter((item) => item !== value),
                        )
                      }
                    />
                    {label}
                  </label>
                );
              })}
            </fieldset>
          </div>
        </details>
      </div>
      <label>
        系列
        <select
          aria-label="系列"
          value={filters.family}
          onChange={(event) => onChange('family', event.target.value)}
        >
          <option value="all">全部系列</option>
          {families.map((family) => (
            <option key={family}>{family}</option>
          ))}
        </select>
      </label>
      <button onClick={onClear}>清除筛选</button>
      <span
        className={styles.filterCount}
        aria-live="polite"
        title="竖线只表示厂商内的时间先后，并不表示模型继承关系；月份未知时同年内顺序待核对。"
      >
        {count} 个模型或版本 · 竖线表示先后
      </span>
    </div>
  );
}
