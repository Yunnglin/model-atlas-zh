import { useMemo, useState } from 'react';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../../core/schemas/knowledge';
import { searchNodes } from '../../../core/queries/knowledge';
import styles from './AtlasSearch.module.css';

export function AtlasSearch({
  data,
  onVisit,
}: {
  data: KnowledgeBase;
  onVisit: (id: string) => void;
}) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const results = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return [];
    const terms = normalized.split(/\s+/);
    const versions = data.timeline
      .filter((item) => {
        const name = `${item.title} ${item.id}`.toLocaleLowerCase();
        return terms.every((term) => name.includes(term));
      })
      .map((item) => {
        const article = data.nodes.find((node) => node.id === item.article)!;
        const name = item.title.toLocaleLowerCase();
        return {
          key: `version-${item.id}`,
          id: item.article,
          title: item.title,
          purpose: item.title === article.title ? article.purpose : '查看系列或分支讲解',
          rank: name === normalized ? 0 : name.startsWith(normalized) ? 1 : 2,
        };
      });
    const titles = new Set(versions.map((item) => item.title.toLocaleLowerCase()));
    const nodes = searchNodes(data, query)
      .filter((node) => !titles.has(node.title.toLocaleLowerCase()))
      .map((node) => ({
        key: `node-${node.id}`,
        id: node.id,
        title: node.title,
        purpose: node.purpose,
        rank: node.title.toLocaleLowerCase() === normalized ? 0 : 3,
      }));
    return [...versions, ...nodes].sort((a, b) => a.rank - b.rank).slice(0, 7);
  }, [data, query]);
  const expanded = open && !!query.trim();
  function choose(id: string) {
    onVisit(id);
    setQuery('');
    setOpen(false);
  }
  return (
    <div
      className={styles.search}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <MagnifyingGlassIcon size={19} aria-hidden="true" />
      <input
        role="combobox"
        aria-label="搜索知识点"
        aria-expanded={expanded}
        aria-controls="knowledge-search-results"
        aria-autocomplete="list"
        aria-activedescendant={
          expanded && results[active] ? `result-${results[active]!.key}` : undefined
        }
        placeholder="搜索模型或知识点…"
        value={query}
        onFocus={() => setOpen(true)}
        onChange={(event) => {
          setQuery(event.target.value);
          setOpen(true);
          setActive(0);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            event.stopPropagation();
            setOpen(false);
          }
          if (event.key === 'ArrowDown' && results.length) {
            event.preventDefault();
            setActive((value) => (value + 1) % results.length);
          }
          if (event.key === 'ArrowUp' && results.length) {
            event.preventDefault();
            setActive((value) => (value + results.length - 1) % results.length);
          }
          if (event.key === 'Enter' && expanded && results[active]) {
            event.preventDefault();
            choose(results[active]!.id);
          }
        }}
      />
      {expanded && (
        <div
          className={styles.searchResults}
          id="knowledge-search-results"
          role="listbox"
          aria-label="知识点搜索结果"
        >
          {results.length ? (
            results.map((node, index) => (
              <div
                key={node.key}
                id={`result-${node.key}`}
                role="option"
                aria-selected={index === active}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => choose(node.id)}
              >
                <strong>{node.title}</strong>
                <span>{node.purpose}</span>
              </div>
            ))
          ) : (
            <p>没有找到，试试中文名或英文缩写。</p>
          )}
        </div>
      )}
    </div>
  );
}
