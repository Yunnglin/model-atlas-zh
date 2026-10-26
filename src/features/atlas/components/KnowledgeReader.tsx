import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeftIcon, ArrowUpRightIcon, XIcon } from '@phosphor-icons/react';
import type { KnowledgeBase, KnowledgeNode } from '../../../core/schemas/knowledge';
import { loadReader, readReadingState, writeReadingState } from '../../../platform/reader';
import styles from '../Atlas.module.css';
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
  const [html, setHtml] = useState<string>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

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

  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    void loadReader(node.readerHref, controller.signal)
      .then((article) => {
        if (!controller.signal.aborted) setHtml(article);
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, [node.readerHref, attempt]);

  useLayoutEffect(() => {
    if (html === undefined) return;
    const element = body.current!;
    const saved = readReadingState(node.id);
    const details = [...element.querySelectorAll('details')];
    details.forEach((item, index) => {
      item.open = saved.expanded.includes(index);
    });
    element.scrollTop = saved.top;
    function save() {
      writeReadingState(node.id, {
        top: element.scrollTop,
        expanded: details.flatMap((item, index) => (item.open ? [index] : [])),
      });
    }
    element.addEventListener('scroll', save, { passive: true });
    element.addEventListener('toggle', save, true);
    return () => {
      save();
      element.removeEventListener('scroll', save);
      element.removeEventListener('toggle', save, true);
    };
  }, [html, node.id]);

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
        onClick={(event) => {
          const anchor = (event.target as Element).closest<HTMLAnchorElement>('a');
          if (
            !anchor?.closest('[data-reader-content]') ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey
          )
            return;
          const href = anchor.getAttribute('href') ?? '';
          if (href.startsWith('#')) {
            const target = body.current?.querySelector(
              `#${CSS.escape(decodeURIComponent(href.slice(1)))}`,
            );
            if (target) {
              event.preventDefault();
              target.scrollIntoView({ block: 'start' });
            }
            return;
          }
          const url = new URL(anchor.href, location.href);
          const related = data.nodes.find(
            (item) => new URL(item.href, location.origin).href === url.href,
          );
          if (related) {
            event.preventDefault();
            onVisit(related.id);
          }
        }}
      >
        <RelatedKnowledge data={data} id={node.id} onVisit={onVisit} />
        {html !== undefined ? (
          <>
            <div
              data-reader-content
              className={styles.article}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <a className={styles.standalone} href={node.href}>
              在独立页面阅读
              <ArrowUpRightIcon size={14} />
            </a>
          </>
        ) : error ? (
          <div className={styles.readerMessage} role="alert">
            <p>正文暂时没有加载成功，地图仍可继续查看。</p>
            <button onClick={() => setAttempt((value) => value + 1)}>重新加载正文</button>
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
