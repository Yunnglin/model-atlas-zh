import { useMemo, useRef } from 'react';
import { ArrowLeftIcon } from '@phosphor-icons/react';
import type { KnowledgeBase, KnowledgeNode } from '../../core/schemas/knowledge';
import { useArticle } from '../../components/reading/useArticle';
import { ArticleBody } from '../../components/reading/ArticleBody';
import { ArchitectureFigure } from '../../components/figures/ArchitectureFigure';
import { splitArticleSections } from '../../platform/reader';
import { useReadingPosition } from '../../components/reading/useReadingPosition';
import styles from './ModelLearning.module.css';

export function ModelLearning({
  data,
  model,
  onBack,
  onConcept,
}: {
  data: KnowledgeBase;
  model: KnowledgeNode;
  onBack: () => void;
  onConcept: (id: string) => void;
}) {
  const { html, error, slow, retry } = useArticle(model.readerHref);
  const sections = useMemo(() => (html === undefined ? [] : splitArticleSections(html)), [html]);
  const scroll = useRef<HTMLDivElement>(null);
  const guide = data.guides.find((item) => item.model === model.id);
  useReadingPosition(scroll, `model:${model.id}`, html !== undefined);
  return (
    <div ref={scroll} className={styles.page} data-testid="model-learning">
      <div className={styles.layout}>
        <aside className={styles.toc} aria-label="本模型目录">
          <button onClick={onBack}>
            <ArrowLeftIcon size={16} />
            返回模型地图
          </button>
          <strong>{model.title}</strong>
          {html !== undefined && (
            <nav>
              {model.chapters.map((chapter) => (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  onClick={(event) => {
                    event.preventDefault();
                    scroll.current
                      ?.querySelector(`#${CSS.escape(chapter.id)}`)
                      ?.scrollIntoView({ block: 'start' });
                  }}
                >
                  {chapter.title}
                </a>
              ))}
            </nav>
          )}
        </aside>
        <article className={styles.content}>
          <header>
            <span className={styles.eyebrow}>模型学习 · {model.year ?? '知识概览'}</span>
            <h1>{model.title}</h1>
            <p>
              {model.purpose}。{model.question}
            </p>
          </header>
          {error ? (
            <div role="alert">
              <p>正文暂时未能加载，仍可打开独立文章。</p>
              <button onClick={retry}>重新加载正文</button>
              <a href={model.href}>打开独立正文</a>
            </div>
          ) : html === undefined ? (
            <div>
              <p role="status">{slow ? '网络较慢，正文仍在加载…' : '正在打开模型学习页…'}</p>
              <a href={model.href}>直接打开独立正文</a>
            </div>
          ) : (
            sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className={styles.chapter}
                data-testid="model-chapter"
              >
                <h2>{section.title}</h2>
                <ArticleBody html={section.html} data={data} onConcept={onConcept} />
                {guide?.figures
                  .filter((item) => item.heading === section.title)
                  .map((item) => (
                    <ArchitectureFigure
                      key={item.figure}
                      figure={data.figures.find((figure) => figure.id === item.figure)!}
                    />
                  ))}
              </section>
            ))
          )}
          <footer>
            <a href={model.href}>独立正文与全文搜索</a>
            <button onClick={onBack}>返回模型地图</button>
          </footer>
        </article>
      </div>
    </div>
  );
}
