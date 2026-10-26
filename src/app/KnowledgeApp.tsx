import { useEffect, useState } from 'react';
import { useStore } from 'zustand';
import { GraphIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { knowledgeBaseSchema, type KnowledgeBase } from '../core/schemas/knowledge';
import { ModelLearning } from '../features/learning/ModelLearning';
import { KnowledgeReader } from '../features/reading/KnowledgeReader';
import { createAtlasStore } from '../features/atlas/state';
import { decodeSelection, encodeSelection } from '../features/atlas/url-state';
import { Atlas } from '../features/atlas/Atlas';
import { AtlasSearch } from '../features/atlas/components/AtlasSearch';
import { rememberMap, updateMapUrl } from '../platform/atlas-navigation';
import '../styles/tokens.css';
import 'katex/dist/katex.min.css';
import styles from './KnowledgeApp.module.css';

export default function KnowledgeApp({ dataUrl, base }: { dataUrl: string; base: string }) {
  const [data, setData] = useState<KnowledgeBase>();
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setError(false);
    void fetch(dataUrl, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Knowledge data unavailable');
        return response.json() as Promise<unknown>;
      })
      .then((raw) => {
        if (!controller.signal.aborted) setData(knowledgeBaseSchema.parse(raw));
      })
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, [dataUrl, attempt]);
  if (!data)
    return (
      <main className={styles.loading}>
        <GraphIcon size={30} />
        <h1>模型知识地图</h1>
        <p role="status">
          {error ? '知识地图暂时没有加载成功，可以重试或先阅读正文。' : '正在打开知识地图…'}
        </p>
        {error && <button onClick={() => setAttempt((value) => value + 1)}>重新加载</button>}
        <a href={`${base}foundations/transformer/`}>从 Transformer 正文开始阅读</a>
      </main>
    );
  return <LoadedApp data={data} />;
}

function LoadedApp({ data }: { data: KnowledgeBase }) {
  const [store] = useState(() => createAtlasStore(decodeSelection(location.search, data), data));
  useEffect(() => {
    let restoring = false;
    const initial = encodeSelection(store.getState().selection);
    history.replaceState(null, '', `${location.pathname}${initial}`);
    rememberMap(initial);
    const unsubscribe = store.subscribe(({ selection }) => {
      if (!restoring) updateMapUrl(encodeSelection(selection));
    });
    function restore() {
      restoring = true;
      store.getState().setSelection(decodeSelection(location.search, data));
      rememberMap(encodeSelection(store.getState().selection));
      restoring = false;
    }
    window.addEventListener('popstate', restore);
    return () => {
      unsubscribe();
      window.removeEventListener('popstate', restore);
    };
  }, [data, store]);
  const selection = useStore(store, (state) => state.selection);
  const actions = store.getState();
  const model = data.nodes.find((node) => node.id === selection.model);
  const concept = data.nodes.find((node) => node.id === selection.concepts.at(-1));
  const previous = data.nodes.find((node) => node.id === selection.concepts.at(-2));
  return (
    <div className={styles.app}>
      <a className={styles.skipLink} href="#main">
        跳到知识地图
      </a>
      <header className={styles.header}>
        <button
          className={styles.brand}
          onClick={() => store.getState().reset()}
          aria-label="模型知识地图，返回全景"
        >
          <GraphIcon size={29} weight="bold" />
          <span>模型知识地图</span>
        </button>
        <AtlasSearch data={data} onVisit={actions.visit} />
        <a
          className={styles.github}
          href="https://github.com/Yunnglin"
          target="_blank"
          rel="noreferrer"
          aria-label="作者的 GitHub"
        >
          <GithubLogoIcon size={21} />
          <span>GitHub</span>
        </a>
      </header>
      <main className={styles.main} id="main">
        <div className={styles.mapSlot} hidden={Boolean(model)}>
          <Atlas data={data} onSelect={actions.visit} />
        </div>
        {model && (
          <ModelLearning
            key={model.id}
            data={data}
            model={model}
            onBack={actions.reset}
            onConcept={actions.visit}
          />
        )}
        {concept && (
          <KnowledgeReader
            key={concept.id}
            data={data}
            node={concept}
            previous={previous}
            onVisit={actions.visit}
            onBack={() => actions.returnTo(selection.concepts.length - 2)}
            onClose={actions.closeReader}
          />
        )}
      </main>
    </div>
  );
}
