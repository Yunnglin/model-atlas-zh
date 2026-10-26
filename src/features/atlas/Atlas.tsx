import { useMemo, useState } from 'react';
import { useStore } from 'zustand';
import {
  TreeStructureIcon,
  ColumnsIcon,
  GraphIcon,
  MagnifyingGlassIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CaretDownIcon,
} from '@phosphor-icons/react';
import {
  facetLabels,
  modalityLabels,
  type KnowledgeBase,
  type Facet,
  type MapView,
  type Modality,
} from '../../core/schemas/knowledge';
import { projectKnowledge } from '../../core/projections/project';
import { searchNodes } from '../../core/queries/knowledge';
import type { Progress } from '../../core/schemas/progress';
import type { createAtlasStore } from './state';
import { MapCanvas } from './components/MapCanvas';
import { NodeInspector } from './components/NodeInspector';
import styles from './Atlas.module.css';

interface Props {
  data: KnowledgeBase;
  store: ReturnType<typeof createAtlasStore>;
  progress: Progress;
  onProgress: (id: string, value: 'understood' | 'review') => void;
  onPractice: (id: string) => void;
}
const views = [
  { id: 'tree', label: '分层技术树', icon: TreeStructureIcon },
  { id: 'timeline', label: '演进泳道', icon: ColumnsIcon },
  { id: 'network', label: '关联探索', icon: GraphIcon },
] satisfies { id: MapView; label: string; icon: typeof GraphIcon }[];

export function Atlas({ data, store, progress, onProgress, onPractice }: Props) {
  const selection = useStore(store, (state) => state.selection);
  const select = useStore(store, (state) => state.setSelection);
  const [query, setQuery] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [relationMessage, setRelationMessage] = useState('');
  const projected = useMemo(
    () => projectKnowledge(data, selection, expanded),
    [data, selection, expanded],
  );
  const results = useMemo(() => searchNodes(data, query), [data, query]);
  function selectNode(id: string): void {
    select({ node: id });
    setQuery('');
    setRelationMessage('');
  }
  return (
    <div className={styles.atlas}>
      <h1 className={styles.srOnly}>交互式模型知识地图</h1>
      <div className={styles.workspace}>
        <div className={styles.workspaceTop}>
          <div className={styles.viewTabs} role="group" aria-label="地图展示方式">
            {views.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                aria-pressed={selection.view === id}
                onClick={() => select({ view: id })}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>
          <div className={styles.historyButtons}>
            <button aria-label="返回上一处知识" onClick={() => history.back()}>
              <ArrowLeftIcon size={17} />
            </button>
            <button aria-label="前往下一处知识" onClick={() => history.forward()}>
              <ArrowRightIcon size={17} />
            </button>
          </div>
        </div>
        <div className={styles.searchWrap}>
          <MagnifyingGlassIcon size={19} />
          <input
            aria-label="搜索知识节点"
            placeholder="搜索模型、方法、任务… 例如：Whisper、SFT、概率"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {query.trim() && (
            <div className={styles.searchResults} aria-label="节点搜索结果">
              {results.length ? (
                results.map((node) => (
                  <button key={node.id} onClick={() => selectNode(node.id)}>
                    <strong>{node.title}</strong>
                    <span>{node.summary}</span>
                  </button>
                ))
              ) : (
                <p>没有找到，试试中文名或英文缩写。</p>
              )}
            </div>
          )}
        </div>
        <div className={styles.facetRow} role="group" aria-label="观察维度">
          {Object.entries(facetLabels).map(([id, label]) => (
            <button
              key={id}
              aria-pressed={selection.facet === id}
              onClick={() => select({ facet: id as Facet })}
            >
              {label}
            </button>
          ))}
        </div>
        <div className={styles.mapMeta}>
          <span>
            <span className={styles.liveDot} />
            {selection.view === 'tree'
              ? '按结构与前置知识展开'
              : selection.view === 'timeline'
                ? '各模态内按参考资料时间排序 · 不表示继承'
                : '围绕当前节点查看直接关系'}
          </span>
          <label>
            领域{' '}
            <select
              aria-label="筛选领域"
              value={selection.modality}
              onChange={(event) => select({ modality: event.target.value as Modality | 'all' })}
            >
              <option value="all">全部领域</option>
              {Object.entries(modalityLabels).map(([id, label]) => (
                <option key={id} value={id}>
                  {label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <MapCanvas
          data={projected}
          selection={selection}
          onSelect={selectNode}
          onRelation={setRelationMessage}
        />
        <div className={styles.mapFooter}>
          <span>{projected.nodes.length} 个可见节点 · 箭头指向关系对象</span>
          <button onClick={() => setExpanded(!expanded)}>
            {expanded ? '收起方法与指标' : '展开方法与指标'}
            <CaretDownIcon size={14} />
          </button>
        </div>
        <p className={styles.relationMessage} role="status">
          {relationMessage ||
            '点击节点看解释；点击连线看关系。年份为参考资料公开年份，不表示该技术最早提出；前置知识也不表示模型继承。'}
        </p>
      </div>
      <NodeInspector
        data={data}
        id={selection.node}
        facet={selection.facet}
        progress={progress}
        onSelect={selectNode}
        onProgress={onProgress}
        onPractice={onPractice}
      />
    </div>
  );
}
