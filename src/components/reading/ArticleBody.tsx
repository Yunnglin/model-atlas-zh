import type { KnowledgeBase } from '../../core/schemas/knowledge';
import styles from './Reading.module.css';

export function ArticleBody({
  html,
  data,
  onConcept,
}: {
  html: string;
  data: KnowledgeBase;
  onConcept: (id: string) => void;
}) {
  return (
    <div
      data-reader-content
      className={styles.article}
      dangerouslySetInnerHTML={{ __html: html }}
      onClick={(event) => {
        const anchor = (event.target as Element).closest<HTMLAnchorElement>('a');
        if (!anchor || event.ctrlKey || event.metaKey || event.altKey || event.shiftKey) return;
        const url = new URL(anchor.href, location.href);
        const node = data.nodes.find(
          (item) =>
            new URL(item.href, location.origin).pathname === url.pathname &&
            url.origin === location.origin,
        );
        if (node) {
          event.preventDefault();
          onConcept(node.id);
        }
      }}
    />
  );
}
