import type { KnowledgeBase } from '../../core/schemas/knowledge';
import { projectModelMap } from '../../core/projections/model-map';
import { MapCanvas } from './components/MapCanvas';
import styles from './Atlas.module.css';

export function Atlas({ data, onSelect }: { data: KnowledgeBase; onSelect: (id: string) => void }) {
  const map = projectModelMap(data);
  const unlinked = map.unlinked;
  return (
    <div className={styles.atlas}>
      <div className={styles.context}>
        <div>
          <span className={styles.eyebrow}>从 Transformer 出发</span>
          <h1>先看模型之间，怎样相连</h1>
          <p>选一个模型，连贯地读懂结构、训练和评测。遇到新概念，再顺手查阅。</p>
        </div>
        <span className={styles.legend}>实线：结构关联 · 虚线：对比</span>
      </div>
      <div className={styles.stage}>
        <MapCanvas data={data} onSelect={onSelect} />
        {unlinked.length > 0 && (
          <div className={styles.unlinked}>
            <span>关系待补充</span>
            {unlinked.map((node) => (
              <button key={node.id} onClick={() => onSelect(node.id)}>
                {node.title}
              </button>
            ))}
          </div>
        )}
        <details className={styles.evidence}>
          <summary>连线依据 · {map.edges.length} 条</summary>
          <div>
            {map.edges.map((edge) => (
              <section key={edge.id}>
                <strong>
                  {data.nodes.find((node) => node.id === edge.from)!.title} ↔{' '}
                  {data.nodes.find((node) => node.id === edge.to)!.title}
                </strong>
                {edge.evidence.map((relation) => (
                  <p key={relation.id}>
                    {relation.explanation}
                    {relation.sources.map((id) => {
                      const source = data.sources.find((item) => item.id === id)!;
                      return (
                        <a key={id} href={source.url} target="_blank" rel="noreferrer">
                          资料
                        </a>
                      );
                    })}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}
