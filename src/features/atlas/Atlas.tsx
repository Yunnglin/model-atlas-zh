import { useMemo, useState } from 'react';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import {
  emptyTimelineFilters,
  filterTimeline,
  timelineRelations,
  type TimelineFilters,
} from '../../core/projections/timeline';
import { MapCanvas } from './components/MapCanvas';
import { TimelineFilterBar, architectures, modalities } from './components/TimelineFilterBar';
import styles from './Atlas.module.css';

export function Atlas({ data, onSelect }: { data: KnowledgeBase; onSelect: (id: string) => void }) {
  const [filters, setFilters] = useState<TimelineFilters>(emptyTimelineFilters);
  const [selected, setSelected] = useState<string>();
  const models = useMemo(() => filterTimeline(data.timeline, filters), [data.timeline, filters]);
  const edges = useMemo(() => timelineRelations(data, models), [data, models]);
  const current = models.find((model) => model.id === selected);
  const currentArticle = data.nodes.find((node) => node.id === current?.article);
  const related = edges.filter((edge) => edge.from === selected || edge.to === selected);
  const families = [
    ...new Set(data.timeline.flatMap((model) => (model.family ? [model.family] : []))),
  ].sort();
  function change<K extends keyof TimelineFilters>(key: K, value: TimelineFilters[K]) {
    setFilters((previous) => ({ ...previous, [key]: value }));
    setSelected(undefined);
  }
  return (
    <div className={styles.atlas}>
      <h1 className={styles.visuallyHidden}>模型发展时间线</h1>
      <TimelineFilterBar
        filters={filters}
        families={families}
        count={models.length}
        onChange={change}
        onClear={() => {
          setFilters(emptyTimelineFilters);
          setSelected(undefined);
        }}
      />
      <div className={styles.stage}>
        {models.length ? (
          <MapCanvas models={models} edges={edges} selected={selected} onSelect={setSelected} />
        ) : (
          <p className={styles.empty}>没有符合条件的模型，请调整筛选。</p>
        )}
        {current && (
          <aside className={styles.detail} aria-label="选中模型">
            {currentArticle && <link rel="prefetch" href={currentArticle.readerHref} />}
            <button
              className={styles.close}
              aria-label="关闭模型详情"
              onClick={() => setSelected(undefined)}
            >
              ×
            </button>
            <span className={styles.eyebrow}>
              {current.year
                ? `${current.year}年${current.month ? `${current.month}月` : ' · 月份待核对'}`
                : '年份待核对'}{' '}
              · {current.family ?? '模型'}
            </span>
            <h2>{current.title}</h2>
            <p>
              {architectures[current.architecture]} ·{' '}
              {current.modalities.map((item) => modalities[item]).join('、') || '模态待确认'}
            </p>
            <p>{data.nodes.find((node) => node.id === current.article)?.purpose}</p>
            {current.dateSource && (
              <p className={styles.note}>
                {current.dateBasis === 'paper' ? '论文首次公开' : '官方发布'}：
                <a
                  href={data.sources.find((source) => source.id === current.dateSource)?.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  日期来源 ↗
                </a>
              </p>
            )}
            <button className={styles.read} onClick={() => onSelect(current.article)}>
              阅读模型讲解 →
            </button>
            {current.title !== data.nodes.find((node) => node.id === current.article)?.title && (
              <p className={styles.note}>进入系列或分支共用正文。</p>
            )}
            <h3>已记录的直接关系</h3>
            {related.length ? (
              related.map((edge) => (
                <div key={edge.id} className={styles.relationship}>
                  <button
                    className={styles.relatedLink}
                    onClick={() => {
                      const other = models.find(
                        (item) => item.id === (edge.from === selected ? edge.to : edge.from),
                      );
                      if (other) onSelect(other.article);
                    }}
                  >
                    {
                      models.find(
                        (item) => item.id === (edge.from === selected ? edge.to : edge.from),
                      )?.title
                    }{' '}
                    →
                  </button>
                  <p>{edge.relation.explanation}</p>
                  {edge.relation.sources.map((id) => {
                    const source = data.sources.find((item) => item.id === id)!;
                    return (
                      <a key={id} href={source.url} target="_blank" rel="noreferrer">
                        资料 ↗
                      </a>
                    );
                  })}
                </div>
              ))
            ) : (
              <p className={styles.note}>
                当前筛选范围内没有可明确对应到具体版本的关系。年份和系列颜色不代表继承。
              </p>
            )}
          </aside>
        )}
      </div>
    </div>
  );
}
