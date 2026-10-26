import {
  ArrowUpRightIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ArrowCounterClockwiseIcon,
} from '@phosphor-icons/react';
import {
  connectedRelations,
  findNode,
  prerequisites,
  groupRelations,
} from '../../../core/queries/knowledge';
import {
  facetLabels,
  modalityLabels,
  relationLabels,
  type KnowledgeBase,
  type Facet,
} from '../../../core/schemas/knowledge';
import type { Progress } from '../../../core/schemas/progress';
import { rememberMap } from '../../../platform/atlas-navigation';
import styles from '../Atlas.module.css';

interface Props {
  data: KnowledgeBase;
  id: string;
  facet: Facet;
  progress: Progress;
  onSelect: (id: string) => void;
  onProgress: (id: string, state: 'understood' | 'review') => void;
  onPractice: (id: string) => void;
}

export function NodeInspector({
  data,
  id,
  facet,
  progress,
  onSelect,
  onProgress,
  onPractice,
}: Props) {
  const node = findNode(data, id)!;
  const before = prerequisites(data, id);
  const connections = groupRelations(connectedRelations(data, id))
    .map((relations) => {
      const relation = relations[0]!;
      return {
        relation,
        relations,
        neighbor: findNode(data, relation.from === id ? relation.to : relation.from)!,
      };
    })
    .filter(({ neighbor }) => facet === 'overview' || neighbor.facets.includes(facet));
  const question = data.questions.find((item) => item.nodes.includes(id));
  return (
    <aside className={styles.inspector} aria-label="知识点详情" data-testid="node-inspector">
      <div className={styles.eyebrow}>
        {modalityLabels[node.modality]} <span> / {node.kind === 'model' ? '模型' : '知识点'}</span>
      </div>
      <h2>{node.title}</h2>
      <p className={styles.inspectorQuestion}>{node.question}</p>
      <div className={styles.progressRow}>
        <button
          aria-pressed={progress.nodes[id] === 'understood'}
          onClick={() => onProgress(id, 'understood')}
        >
          <CheckCircleIcon size={16} />
          已理解
        </button>
        <button
          aria-pressed={progress.nodes[id] === 'review'}
          onClick={() => onProgress(id, 'review')}
        >
          <ArrowCounterClockwiseIcon size={16} />
          待复习
        </button>
      </div>
      <section className={styles.explanation}>
        <div className={styles.sectionLabel}>先用一句话理解</div>
        <p>{node.summary}</p>
        <a
          className={styles.readLink}
          href={node.href}
          onClick={() => rememberMap(location.search)}
        >
          <BookOpenIcon size={18} />
          读懂原理与例子
          <ArrowUpRightIcon size={16} />
        </a>
      </section>
      <section>
        <h3>{facet === 'overview' ? '它与哪些知识相连' : `${facetLabels[facet]} · 相关知识`}</h3>
        <div className={styles.connectionList}>
          {connections.slice(0, 8).map(({ relation, relations, neighbor }) => (
            <button
              key={relation.id}
              onClick={() => onSelect(neighbor.id)}
              title={relations.map((r) => r.explanation).join('；')}
            >
              <span>
                {relations.map((r) => relationLabels[r.kind]).join(' / ')}
                {relation.to === id ? ' · 来自' : ''}
              </span>
              <strong>{neighbor.title}</strong>
              <ArrowUpRightIcon size={14} />
            </button>
          ))}
        </div>
        {!connections.length && (
          <p className={styles.muted}>此视角暂无直接关联。可切换“看全貌”，或阅读完整解释。</p>
        )}
      </section>
      {before.length > 0 && (
        <section>
          <h3>不熟悉？先补这几个概念</h3>
          <div className={styles.chips}>
            {before.slice(0, 5).map((item) => (
              <button key={item.id} onClick={() => onSelect(item.id)}>
                {item.title}
              </button>
            ))}
          </div>
        </section>
      )}
      {node.caseStages && (
        <section>
          <h3>实践闭环 · 教学方案</h3>
          <p className={styles.muted}>本案例未执行训练；以下列出复现时应保留的产物。</p>
          <ol className={styles.caseStages}>
            {node.caseStages.map((stage) => (
              <li key={stage.stage}>
                <strong>{stage.stage}</strong>
                <p>{stage.description}</p>
                <small>产物：{stage.artifact}</small>
                <div className={styles.chips}>
                  {stage.nodes.map((target) => (
                    <button key={target} onClick={() => onSelect(target)}>
                      {findNode(data, target)?.title}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}
      {question && (
        <button className={styles.practicePrompt} onClick={() => onPractice(question.id)}>
          <span className={styles.sectionLabel}>试着讲给面试官听</span>
          <strong>{question.title}</strong>
          <span>先想一想，再展开答案 →</span>
        </button>
      )}
      <section>
        <h3>从一手资料继续读</h3>
        {node.sources.map((id) => {
          const source = data.sources.find((s) => s.id === id)!;
          return (
            <a
              className={styles.source}
              href={source.url}
              target="_blank"
              rel="noreferrer"
              key={id}
            >
              <span>
                {source.type === 'paper'
                  ? '论文'
                  : source.type === 'official-code'
                    ? '官方实现'
                    : '官方说明'}
              </span>
              <strong>{source.title}</strong>
              <ArrowUpRightIcon size={15} />
            </a>
          );
        })}
      </section>
      <p className={styles.inspectorFoot}>
        关系表示“如何联系”，不一定表示“谁继承谁”。点击地图中的连线可查看依据说明。
      </p>
    </aside>
  );
}
