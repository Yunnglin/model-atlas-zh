import type { KnowledgeBase } from '../../core/schemas/knowledge';
import { connectedRelations } from '../../core/queries/knowledge';
import { relationLabels } from '../../core/schemas/knowledge';
import styles from './KnowledgeReader.module.css';

/** Cross-links stay available without adding any edge to the model map. */
export function RelatedKnowledge({
  data,
  id,
  onVisit,
}: {
  data: KnowledgeBase;
  id: string;
  onVisit: (id: string) => void;
}) {
  const relations = connectedRelations(data, id);
  const related = [
    ...new Set(relations.map((relation) => (relation.from === id ? relation.to : relation.from))),
  ];
  if (!related.length) return null;
  return (
    <details className={styles.related}>
      <summary>关联知识 · {related.length} 项</summary>
      <p>查看相关概念、使用它的模型，以及资料依据。</p>
      {related.map((neighbor) => {
        const target = data.nodes.find((node) => node.id === neighbor)!;
        const links = relations.filter(
          (relation) => relation.from === neighbor || relation.to === neighbor,
        );
        return (
          <section key={neighbor}>
            <button type="button" onClick={() => onVisit(neighbor)}>
              {target.title}
            </button>
            {links.map((relation) => (
              <details className={styles.relationEvidence} key={relation.id}>
                <summary>
                  {relation.from === id ? '当前知识点' : target.title} ·{' '}
                  {relationLabels[relation.kind]} ·{' '}
                  {relation.to === id ? '当前知识点' : target.title}
                </summary>
                <p>{relation.explanation}</p>
                {relation.sources.map((sourceId) => {
                  const source = data.sources.find((item) => item.id === sourceId)!;
                  return (
                    <a key={sourceId} href={source.url} target="_blank" rel="noreferrer">
                      {source.title}
                    </a>
                  );
                })}
              </details>
            ))}
          </section>
        );
      })}
    </details>
  );
}
