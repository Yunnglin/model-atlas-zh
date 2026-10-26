import { useEffect, useLayoutEffect, useRef } from 'react';
import { ArrowLeftIcon, ArrowUpRightIcon, XIcon } from '@phosphor-icons/react';
import type { KnowledgeBase, KnowledgeNode } from '../../core/schemas/knowledge';
import { useReadingPosition } from '../../components/reading/useReadingPosition';
import styles from './KnowledgeReader.module.css';
import { ArticleBody } from '../../components/reading/ArticleBody';
import { useArticle } from '../../components/reading/useArticle';
import { RelatedKnowledge } from './RelatedKnowledge';

interface Props {
  data: KnowledgeBase;
  node: KnowledgeNode;
  previous?: KnowledgeNode;
  onVisit: (id: string) => void;
  onBack: () => void;
  onClose: () => void;
}

export function KnowledgeReader({ data, node, previous, onVisit, onBack, onClose }: Props) {
  const dialog = useRef<HTMLDialogElement>(null);
  const body = useRef<HTMLDivElement>(null);
  const { html, error, retry } = useArticle(node.readerHref);

  useEffect(() => {
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && !event.defaultPrevented) {
        event.preventDefault();
        onClose();
      }
    }
    document.addEventListener('keydown', escape);
    return () => document.removeEventListener('keydown', escape);
  }, [onClose]);

  useReadingPosition(body, node.id, html !== undefined);

  useLayoutEffect(() => {
    const element = dialog.current!;
    const media = matchMedia('(max-width: 960px)');
    function show() {
      if (element.open) element.close();
      if (media.matches) element.showModal();
      else element.show();
    }
    show();
    media.addEventListener('change', show);
    return () => {
      media.removeEventListener('change', show);
      element.close();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      className={styles.reader}
      aria-labelledby={`reader-title-${node.id}`}
      data-testid="knowledge-reader"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <header className={styles.readerHeader}>
        {previous && (
          <button className={styles.readerBack} onClick={onBack}>
            <ArrowLeftIcon size={17} />
            返回 {previous.title}
          </button>
        )}
        <button className={styles.readerClose} aria-label="关闭阅读区" onClick={onClose}>
          <XIcon size={23} />
        </button>
        <h2 id={`reader-title-${node.id}`}>{node.title}</h2>
        <p>{node.question}</p>
      </header>
      <div
        ref={body}
        className={styles.readerBody}
        data-testid="reader-body"
        aria-busy={html === undefined && !error}
      >
        <RelatedKnowledge data={data} id={node.id} onVisit={onVisit} />
        {html !== undefined ? (
          <>
            <ArticleBody html={html} data={data} onConcept={onVisit} />
            <a className={styles.standalone} href={node.href}>
              在独立页面阅读
              <ArrowUpRightIcon size={14} />
            </a>
          </>
        ) : error ? (
          <div className={styles.readerMessage} role="alert">
            <p>正文暂时没有加载成功，地图仍可继续查看。</p>
            <button onClick={retry}>重新加载正文</button>
            <a href={node.href}>打开独立正文</a>
          </div>
        ) : (
          <p className={styles.readerMessage} role="status">
            正在打开正文…
          </p>
        )}
      </div>
    </dialog>
  );
}
