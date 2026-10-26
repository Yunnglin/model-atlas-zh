import { useCallback, useEffect, useRef, useState } from 'react';
import { useStore } from 'zustand';
import {
  GraphIcon,
  PathIcon,
  ChatCircleDotsIcon,
  GithubLogoIcon,
  ArrowRightIcon,
  BookOpenIcon,
  DatabaseIcon,
  BrainIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  ArrowsClockwiseIcon,
  CpuIcon,
  WaveformIcon,
  ImageIcon,
  TextTIcon,
  CubeIcon,
} from '@phosphor-icons/react';
import {
  knowledgeBaseSchema,
  modalityLabels,
  stageNames,
  type KnowledgeBase,
  type Facet,
  type Modality,
} from '../core/schemas/knowledge';
import { type Progress } from '../core/schemas/progress';
import { readProgress, writeProgress } from '../platform/progress';
import { updateMapUrl } from '../platform/atlas-navigation';
import { Atlas } from '../features/atlas/Atlas';
import { createAtlasStore } from '../features/atlas/state';
import { decodeSelection, encodeSelection } from '../features/atlas/url-state';
import { LearningPaths } from '../features/learning/LearningPaths';
import { Practice } from '../features/practice/Practice';
import '../styles/tokens.css';
import styles from './KnowledgeApp.module.css';

type Screen = 'map' | 'learning' | 'practice';
interface Route {
  screen: Screen;
  question?: string;
}
const stageIcons = [
  DatabaseIcon,
  BrainIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
  ArrowsClockwiseIcon,
];
const modalityIcons = {
  shared: CpuIcon,
  nlp: TextTIcon,
  cv: ImageIcon,
  audio: WaveformIcon,
  omni: CubeIcon,
};

function readRoute(search: string): Route {
  const params = new URLSearchParams(search);
  const screen = params.get('screen');
  return {
    screen: screen === 'learning' || screen === 'practice' ? screen : 'map',
    question: params.get('question') ?? undefined,
  };
}

export default function KnowledgeApp({ dataUrl, base }: { dataUrl: string; base: string }) {
  const [data, setData] = useState<KnowledgeBase>();
  const [error, setError] = useState('');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    void fetch(dataUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Knowledge data unavailable');
        return response.json() as Promise<unknown>;
      })
      .then((raw) => setData(knowledgeBaseSchema.parse(raw)))
      .catch(() => {
        if (!controller.signal.aborted)
          setError('知识地图暂时没有加载成功。你可以重试，或先阅读正文。');
      });
    return () => controller.abort();
  }, [dataUrl, attempt]);
  if (!data)
    return (
      <main className={styles.loading}>
        <GraphIcon size={34} weight="duotone" />
        <h1>模型知识地图</h1>
        <p role="status">{error || '正在打开知识地图…'}</p>
        {error && (
          <button
            onClick={() => {
              setError('');
              setAttempt(attempt + 1);
            }}
          >
            重新加载
          </button>
        )}
        <a href={`${base}foundations/transformer/`}>先读 Transformer 原理 →</a>
      </main>
    );
  return <LoadedApp data={data} base={base} />;
}

function LoadedApp({ data, base }: { data: KnowledgeBase; base: string }) {
  const [store] = useState(() => createAtlasStore(decodeSelection(location.search, data)));
  const selection = useStore(store, (state) => state.selection);
  const [progress, setProgress] = useState<Progress>(() => readProgress());
  const [route, setRoute] = useState<Route>(() => readRoute(location.search));
  const routeRef = useRef(route);
  const [storageMessage, setStorageMessage] = useState('');

  const syncRoute = useCallback(
    (next: Route): void => {
      const params = new URLSearchParams(encodeSelection(store.getState().selection));
      if (next.screen !== 'map') params.set('screen', next.screen);
      if (next.screen === 'practice' && next.question) params.set('question', next.question);
      updateMapUrl(`?${params.toString()}`, next.screen === 'map');
    },
    [store],
  );
  function navigate(next: Route): void {
    routeRef.current = next;
    setRoute(next);
    syncRoute(next);
  }
  useEffect(() => {
    let restoring = false;
    const unsubscribe = store.subscribe(() => {
      if (!restoring) syncRoute(routeRef.current);
    });
    function restore(): void {
      restoring = true;
      store.getState().setSelection(decodeSelection(location.search, data));
      const next = readRoute(location.search);
      routeRef.current = next;
      setRoute(next);
      restoring = false;
    }
    window.addEventListener('popstate', restore);
    return () => {
      unsubscribe();
      window.removeEventListener('popstate', restore);
    };
  }, [store, data, syncRoute]);
  function saveProgress(next: Progress): void {
    setProgress(next);
    setStorageMessage(
      writeProgress(next) ? '' : '浏览器未能保存进度，本次阅读和自测仍可继续；可导出备份。',
    );
  }
  function selectFromOtherScreen(id: string): void {
    routeRef.current = { screen: 'map' };
    setRoute({ screen: 'map' });
    store.getState().setSelection({ node: id, facet: 'overview', modality: 'all' });
  }
  function openCase(facet: Facet = 'application'): void {
    routeRef.current = { screen: 'map' };
    setRoute({ screen: 'map' });
    store.getState().setSelection({ node: 'speech-assistant', facet, modality: 'all' });
  }
  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main">
        跳到主要内容
      </a>
      <header className={styles.header}>
        <a href={base} className={styles.brand}>
          <span className={styles.brandIcon}>
            <GraphIcon size={23} weight="bold" />
          </span>
          <span>
            模型知识地图<small>从 Transformer 出发</small>
          </span>
        </a>
        <span className={styles.headerNote}>先看全景，再读懂原理。</span>
        <a href={`${base}foundations/transformer/`} className={styles.reading}>
          <BookOpenIcon size={17} />
          正文与全文搜索
        </a>
        <a
          href="https://github.com/Yunnglin"
          target="_blank"
          rel="noreferrer"
          className={styles.github}
        >
          <GithubLogoIcon size={20} />
          GitHub
        </a>
      </header>
      <div className={styles.body}>
        <aside className={styles.sidebar} aria-label="学习导航">
          <div className={styles.sideLabel}>探索与学习</div>
          <nav aria-label="探索与学习">
            {[
              { id: 'map', label: '知识地图', icon: GraphIcon },
              { id: 'learning', label: '学习路线', icon: PathIcon },
              { id: 'practice', label: '面试自测', icon: ChatCircleDotsIcon },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                aria-current={route.screen === id ? 'page' : undefined}
                onClick={() => navigate({ screen: id as Screen })}
              >
                <Icon size={19} weight={route.screen === id ? 'duotone' : 'regular'} />
                {label}
              </button>
            ))}
          </nav>
          <div className={styles.sideDivider} />
          <div className={styles.sideLabel}>按模态浏览</div>
          <nav aria-label="按模态浏览">
            {Object.entries(modalityLabels).map(([id, label]) => {
              const Icon = modalityIcons[id as Modality];
              return (
                <button
                  className={styles.domainButton}
                  key={id}
                  aria-pressed={selection.modality === id && route.screen === 'map'}
                  onClick={() => {
                    routeRef.current = { screen: 'map' };
                    setRoute({ screen: 'map' });
                    store.getState().setSelection({
                      modality: selection.modality === id ? 'all' : (id as Modality),
                    });
                  }}
                >
                  <Icon size={18} />
                  {label}
                </button>
              );
            })}
          </nav>
          <div className={styles.sidebarBottom}>
            <div className={styles.sideLabel}>你的学习记录</div>
            <p>
              {Object.values(progress.nodes).filter((value) => value === 'understood').length}{' '}
              个知识点已理解
            </p>
            <p>
              {Object.values(progress.nodes).filter((value) => value === 'review').length}{' '}
              个知识点待复习
            </p>
            <button onClick={() => openCase()}>
              从语音助手看实践闭环
              <ArrowRightIcon size={14} />
            </button>
            <span>第一批精选内容 · {data.nodes.length} 个节点</span>
          </div>
        </aside>
        <main className={styles.main} id="main">
          {storageMessage && (
            <p className={styles.storageMessage} role="status">
              {storageMessage}
            </p>
          )}
          {route.screen === 'map' ? (
            <Atlas
              data={data}
              store={store}
              progress={progress}
              onProgress={(id, value) =>
                saveProgress({ ...progress, nodes: { ...progress.nodes, [id]: value } })
              }
              onPractice={(question) => navigate({ screen: 'practice', question })}
            />
          ) : route.screen === 'learning' ? (
            <LearningPaths data={data} progress={progress} onSelect={selectFromOtherScreen} />
          ) : (
            <Practice
              data={data}
              progress={progress}
              focused={route.question}
              onSelect={selectFromOtherScreen}
              onProgress={saveProgress}
            />
          )}
        </main>
      </div>
      <footer className={styles.lifecycle} aria-label="数据到应用的实践闭环">
        <div className={styles.lifecycleIntro}>
          <strong>让知识回到实际问题</strong>
          <span>数据、模型、评测，连成一个闭环</span>
        </div>
        <div className={styles.stageRow}>
          {stageNames.map((stage, index) => {
            const Icon = stageIcons[index]!;
            return (
              <button
                key={stage}
                onClick={() =>
                  openCase(
                    index < 2
                      ? 'training'
                      : index === 2 || index === 4
                        ? 'evaluation'
                        : 'application',
                  )
                }
              >
                <Icon size={20} />
                <span>{stage}</span>
                {index < 5 && <ArrowRightIcon size={13} className={styles.stageArrow} />}
              </button>
            );
          })}
        </div>
        <button className={styles.loopBack} onClick={() => openCase('application')}>
          <ArrowsClockwiseIcon size={14} />
          由错例决定改哪里，再用独立样本验证
        </button>
      </footer>
    </div>
  );
}
