import { useLayoutEffect, useRef } from 'react';
import { useStore } from 'zustand';
import { CaretRightIcon } from '@phosphor-icons/react';
import type { KnowledgeBase } from '../../core/schemas/knowledge';
import type { createAtlasStore } from './state';
import { MapCanvas } from './components/MapCanvas';
import { KnowledgeReader } from './components/KnowledgeReader';
import styles from './Atlas.module.css';

export function Atlas({
  data,
  store,
}: {
  data: KnowledgeBase;
  store: ReturnType<typeof createAtlasStore>;
}) {
  const selection = useStore(store, (state) => state.selection);
  const actions = store.getState();
  const focus = selection.trail.at(-1);
  const node = data.nodes.find((item) => item.id === focus);
  const previous = data.nodes.find((item) => item.id === selection.trail.at(-2));
  const branch = selection.expanded.map((id) => data.navigation.find((entry) => entry.id === id)!);
  const breadcrumb = useRef<HTMLElement>(null);
  useLayoutEffect(() => {
    const element = breadcrumb.current!;
    const revealCurrent = () => {
      element.scrollLeft = element.scrollWidth;
    };
    const observer = new ResizeObserver(revealCurrent);
    observer.observe(element);
    revealCurrent();
    return () => observer.disconnect();
  }, [selection.expanded]);
  return (
    <div className={styles.atlas}>
      <div className={styles.context}>
        <nav ref={breadcrumb} className={styles.breadcrumbs} aria-label="当前导航分支">
          {branch.map((entry, index) => {
            const title =
              entry.title ?? data.nodes.find((item) => item.id === entry.knowledge)!.title;
            return (
              <span className={styles.crumb} key={entry.id}>
                {index > 0 && <CaretRightIcon size={15} />}
                {index < branch.length - 1 ? (
                  <button
                    onClick={() =>
                      actions.setSelection({
                        ...selection,
                        expanded: selection.expanded.slice(0, index + 1),
                      })
                    }
                  >
                    {title}
                  </button>
                ) : (
                  <span aria-current="page">{title}</span>
                )}
              </span>
            );
          })}
        </nav>
        <button
          className={styles.collapseAll}
          disabled={selection.expanded.length === 1 && !focus}
          onClick={actions.reset}
        >
          收起全部
        </button>
        <p>沿结构路线逐层展开，先体验 Whisper。树枝表示学习顺序，技术关系见详情。</p>
      </div>
      <div className={styles.stage}>
        <div className={styles.graphArea}>
          <MapCanvas
            data={data}
            focus={focus}
            expanded={selection.expanded}
            onToggle={(id) => actions.toggle(id, data)}
            onSelect={actions.visit}
          />
        </div>
        {selection.readerOpen && node && (
          <KnowledgeReader
            key={node.id}
            data={data}
            node={node}
            previous={previous}
            onVisit={actions.visit}
            onBack={() => actions.returnTo(selection.trail.length - 2)}
            onClose={actions.closeReader}
          />
        )}
      </div>
    </div>
  );
}
