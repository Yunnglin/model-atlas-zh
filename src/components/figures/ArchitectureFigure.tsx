import { useRef, useState } from 'react';
import {
  ArrowsOutIcon,
  ArrowSquareOutIcon,
  XIcon,
  MinusIcon,
  PlusIcon,
} from '@phosphor-icons/react';
import type { ModelFigure } from '../../core/schemas/knowledge';
import { figureLicenseUrl } from '../../core/queries/figure-license';
import styles from './ArchitectureFigure.module.css';

const basisLabels: Record<ModelFigure['basis'], string> = {
  official: '官方原图',
  teaching: '教学简化图',
  'configuration-or-trace': '配置或执行追踪生成',
  'execution-trace': '执行追踪',
};

/** Images, external viewers and verified embeds share attribution, loading and fallback UI. */
export function ArchitectureFigure({ figure }: { figure: ModelFigure }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [failed, setFailed] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [embed, setEmbed] = useState(false);
  const licenseUrl = figure.asset && figureLicenseUrl(figure.asset.license);
  function open() {
    setZoom(1);
    dialog.current?.showModal();
  }
  return (
    <figure className={styles.figure} data-testid="architecture-figure">
      <div className={styles.captionHeader}>
        <strong>{figure.title}</strong>
        <span>{basisLabels[figure.basis]}</span>
      </div>
      {figure.asset && !failed ? (
        <button
          className={styles.preview}
          onClick={open}
          aria-label={`放大查看原图：${figure.title}`}
        >
          <img
            src={figure.asset.src}
            alt={figure.alt}
            width={figure.asset.width}
            height={figure.asset.height}
            loading="lazy"
            onError={() => setFailed(true)}
          />
          <span>
            <ArrowsOutIcon size={16} />
            放大查看原图
          </span>
        </button>
      ) : figure.asset ? (
        <p role="status">原图暂时未能显示，可打开来源查看。</p>
      ) : null}
      <figcaption>
        <p>{figure.caption}</p>
        <p className={styles.metadata}>
          {figure.version} · 核对：{figure.checked}
        </p>
        <div className={styles.links}>
          <a href={figure.source} target="_blank" rel="noreferrer">
            原始来源 <ArrowSquareOutIcon size={14} />
          </a>
          {figure.interactive && (
            <a href={figure.interactive.url} target="_blank" rel="noreferrer">
              打开交互结构图 <ArrowSquareOutIcon size={14} />
            </a>
          )}
          {figure.asset && (
            <span>
              {licenseUrl ? (
                <a href={licenseUrl} target="_blank" rel="noreferrer">
                  {figure.asset.license}
                </a>
              ) : (
                figure.asset.license
              )}{' '}
              · {figure.asset.attribution}
            </span>
          )}
        </div>
        {figure.interactive?.embedding === 'external-only' && (
          <p className={styles.metadata}>交互图在独立页面打开，当前学习页和阅读位置会保留。</p>
        )}
      </figcaption>
      {figure.interactive?.embedding === 'verified' && figure.interactive.embedUrl && (
        <div>
          <button className={styles.embedButton} onClick={() => setEmbed((value) => !value)}>
            {embed ? '收起交互图' : '加载交互图'}
          </button>
          {embed && (
            <iframe
              title={`${figure.title}交互视图`}
              src={figure.interactive.embedUrl}
              loading="lazy"
              referrerPolicy="no-referrer"
              sandbox="allow-scripts allow-same-origin allow-popups"
              allowFullScreen
            />
          )}
        </div>
      )}
      <dialog ref={dialog} className={styles.dialog} aria-label={`${figure.title}放大视图`}>
        <header>
          <strong>{figure.title}</strong>
          <div>
            <button
              onClick={() => setZoom((value) => Math.max(1, value - 0.5))}
              aria-label="缩小架构图"
            >
              <MinusIcon size={18} />
            </button>
            <button
              onClick={() => setZoom((value) => Math.min(3, value + 0.5))}
              aria-label="放大架构图"
            >
              <PlusIcon size={18} />
            </button>
            <button onClick={() => dialog.current?.close()} aria-label="关闭架构图">
              <XIcon size={22} />
            </button>
          </div>
        </header>
        <div className={styles.imageScroll} tabIndex={0} role="region" aria-label="架构图滚动区域">
          {figure.asset && (
            <img src={figure.asset.src} alt={figure.alt} style={{ width: `${zoom * 100}%` }} />
          )}
        </div>
        <p>
          {figure.version} · {basisLabels[figure.basis]}
        </p>
      </dialog>
    </figure>
  );
}
