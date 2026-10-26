import { ArrowRightIcon, CheckCircleIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import type { Progress } from '../../core/schemas/progress';
import { findNode } from '../../core/queries/knowledge';
import styles from './LearningPaths.module.css';

export function LearningPaths({
  data,
  progress,
  onSelect,
}: {
  data: KnowledgeBase;
  progress: Progress;
  onSelect: (id: string) => void;
}) {
  return (
    <div className={styles.paths}>
      <header>
        <span>从全景到能解释</span>
        <h1>给知识一条学习顺序</h1>
        <p>两条路线可以交叉学习。点击任何知识点，回到地图查看它的结构、训练和评测。</p>
      </header>
      <div className={styles.columns}>
        {data.paths.map((path) => (
          <section key={path.id}>
            <h2>{path.title}</h2>
            <p>{path.summary}</p>
            <ol>
              {path.nodes.map((id, index) => {
                const node = findNode(data, id)!;
                return (
                  <li key={id}>
                    <button onClick={() => onSelect(id)}>
                      <span className={styles.step}>
                        {progress.nodes[id] === 'understood' ? (
                          <CheckCircleIcon size={21} />
                        ) : (
                          String(index + 1).padStart(2, '0')
                        )}
                      </span>
                      <span>
                        <strong>{node.title}</strong>
                        <small>{node.question}</small>
                      </span>
                      <ArrowRightIcon size={18} />
                    </button>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
      </div>
    </div>
  );
}
