import { describe, expect, it, vi } from 'vitest';
import { readKnowledgeFixture } from '../fixtures/knowledge';
import { validateKnowledge } from '../../src/core/validation/validate-knowledge';
import {
  connectedRelations,
  groupRelations,
  prerequisites,
  searchNodes,
} from '../../src/core/queries/knowledge';
import {
  emptyTimelineFilters,
  filterTimeline,
  timelineRelations,
} from '../../src/core/projections/timeline';
import { decodeSelection, encodeSelection } from '../../src/features/atlas/url-state';
import { timelineLayout } from '../../src/features/atlas/layouts/timeline-layout';
import {
  createAtlasStore,
  visitSelection,
  type AtlasSelection,
} from '../../src/features/atlas/state';

const knowledge = readKnowledgeFixture();

describe('maintained content contracts', () => {
  it('keeps the sourced content inventory and complete cases, independently of UI navigation', () => {
    expect(new Set(knowledge.nodes.map((node) => node.modality)).size).toBe(5);
    expect(knowledge.nodes.find((node) => node.kind === 'case')?.caseStages).toHaveLength(6);
    expect(knowledge.paths).toHaveLength(2);
    expect(knowledge.nodes.every((node) => node.purpose.length <= 28)).toBe(true);
  });
  it('rejects duplicate IDs', () => {
    const bad = structuredClone(knowledge);
    bad.nodes.push(bad.nodes[0]!);
    expect(() => validateKnowledge(bad)).toThrow('duplicate ID');
  });
  it('rejects dangling relationships and missing sources', () => {
    const bad = structuredClone(knowledge);
    bad.relations[0]!.to = 'missing-node';
    bad.nodes[0]!.sources = ['missing-source'];
    expect(() => validateKnowledge(bad)).toThrow('missing reference');
  });
  it('rejects missing or misordered case stages', () => {
    const bad = structuredClone(knowledge);
    bad.nodes.find((node) => node.kind === 'case')!.caseStages!.reverse();
    expect(() => validateKnowledge(bad)).toThrow('six ordered stages');
  });
  it('rejects prerequisite cycles while permitting comparisons', () => {
    const bad = structuredClone(knowledge);
    bad.relations.push({
      id: 'cycle',
      from: 'attention',
      to: 'bert',
      kind: 'prerequisite',
      explanation: 'fixture',
      sources: ['bert-paper'],
    });
    expect(() => validateKnowledge(bad)).toThrow('prerequisite cycle');
    bad.relations.at(-1)!.kind = 'compared-with';
    expect(() => validateKnowledge(bad)).not.toThrow();
  });
});

describe('knowledge and progressive projections', () => {
  it('filters versions by combined architecture, family and modalities and sorts months', () => {
    const filtered = filterTimeline(knowledge.timeline, {
      ...emptyTimelineFilters,
      family: 'Qwen',
      architecture: 'mixed',
      modalities: ['text', 'audio'],
    });
    expect(filtered.map((item) => item.id)).toContain('qwen3-asr');
    expect(
      filtered.every(
        (item) =>
          item.family === 'Qwen' &&
          item.architecture === 'mixed' &&
          item.modalities.includes('audio') &&
          item.modalities.includes('text'),
      ),
    ).toBe(true);
    const all = filterTimeline(knowledge.timeline, emptyTimelineFilters);
    expect(all.findIndex((item) => item.id === 'qwen-vl')).toBeLessThan(
      all.findIndex((item) => item.id === 'qwen3'),
    );
    expect(
      timelineRelations(knowledge, all).find((edge) => edge.id === 'series-qwen-2-qwen-25')
        ?.relation.explanation,
    ).toContain('不代表权重继承');
  });
  it('rejects a month without a traceable date basis', () => {
    const bad = structuredClone(knowledge);
    const item = bad.timeline.find((model) => model.month)!;
    delete item.dateSource;
    expect(() => validateKnowledge(bad)).toThrow('month requires year, date basis and source');
  });
  it('groups a month by vendor without interleaving dates or crossing source families', () => {
    const models = filterTimeline(knowledge.timeline, emptyTimelineFilters);
    const layout = timelineLayout(models);
    const periods = layout.periods.map((period) => period.period);
    expect(periods.indexOf('2024-6')).toBeLessThan(periods.indexOf('2024-9'));
    expect(
      layout.periods.find((period) => period.period === '2021-3')?.items.map((item) => item.id),
    ).toEqual(expect.arrayContaining(['glm-original', 'swin']));
    expect(layout.organizations.filter((name) => name === '阿里巴巴')).toHaveLength(1);
    expect(
      models
        .filter((model) => model.family === 'Qwen')
        .every((model) => model.organization === '阿里巴巴'),
    ).toBe(true);
  });
  it('searches English names and Chinese aliases', () => {
    expect(searchNodes(knowledge, '下一 token')[0]?.id).toBe('next-token');
    expect(searchNodes(knowledge, 'whisper').map((node) => node.id)).toEqual(['whisper']);
    expect(searchNodes(knowledge, '低秩').some((node) => node.id === 'lora')).toBe(true);
    expect(searchNodes(knowledge, 'Qwen3')[0]?.id).toBe('qwen3');
    expect(searchNodes(knowledge, 'Qwen3.5')[0]?.id).toBe('qwen35-model');
    expect(searchNodes(knowledge, 'Qwen3.6')[0]?.id).toBe('qwen36-model');
    expect(searchNodes(knowledge, 'Qwen3.5-Omni')[0]?.id).toBe('qwen35-omni-model');
    expect(searchNodes(knowledge, 'Qwen3.8-Omni-Flash')[0]?.id).toBe('qwen38-omni-model');
    expect(searchNodes(knowledge, 'Qwen3.8-Flash-Next')[0]?.id).toBe('qwen38-flash-next-model');
    expect(searchNodes(knowledge, 'Qwen-VLA')[0]?.id).toBe('qwen-vla-model');
    expect(searchNodes(knowledge, 'Qwen-Image-Layered')[0]?.id).toBe('qwen-image-layered-model');
    expect(searchNodes(knowledge, 'Qwen3-LiveTranslate')[0]?.id).toBe('qwen3-livetranslate-model');
    expect(searchNodes(knowledge, 'Qwen3.5-LiveTranslate')[0]?.id).toBe(
      'qwen35-livetranslate-model',
    );
    expect(searchNodes(knowledge, 'Qwen2-Math')[0]?.id).toBe('qwen2-math-model');
    expect(searchNodes(knowledge, 'Qwen2.5-Math-RM-72B')[0]?.id).toBe('qwen25-math-rm-model');
    expect(searchNodes(knowledge, 'QVQ-72B-Preview')[0]?.id).toBe('qvq-72b-preview-model');
    expect(searchNodes(knowledge, 'DeepSeek-V2.5')[0]?.id).toBe('deepseek-v25-model');
    expect(searchNodes(knowledge, 'GLM-TTS')[0]?.id).toBe('glm-tts-model');
    expect(searchNodes(knowledge, 'Qwen2.5-Math-PRM')[0]?.id).toBe('qwen25-math-prm-model');
    expect(searchNodes(knowledge, 'DeepSeek-R1-0528')[0]?.id).toBe('deepseek-r1-0528-model');
    expect(searchNodes(knowledge, 'DeepSeek-V3-0324')[0]?.id).toBe('deepseek-v3-0324-model');
    expect(searchNodes(knowledge, 'GLM-Image')[0]?.id).toBe('glm-image-model');
    expect(searchNodes(knowledge, 'Qwen2.5-1M')[0]?.id).toBe('qwen25-1m-model');
    expect(searchNodes(knowledge, 'KTO')[0]?.id).toBe('kto');
    expect(searchNodes(knowledge, 'Qwen3-VL-Embedding')[0]?.id).toBe('qwen3-vl-embedding-model');
    expect(searchNodes(knowledge, 'Qwen3 Reranker')[0]?.id).toBe('qwen3-reranker-model');
    expect(searchNodes(knowledge, 'Qwen3-VL-Reranker')[0]?.id).toBe('qwen3-vl-reranker-model');
    expect(searchNodes(knowledge, 'Qwen3-ForcedAligner')[0]?.id).toBe('qwen3-forcedaligner-model');
    expect(searchNodes(knowledge, 'Qwen-Image-Edit')[0]?.id).toBe('qwen-image-edit-model');
    expect(searchNodes(knowledge, 'Qwen-Image-2.1')[0]?.id).toBe('qwen-image21-model');
    expect(searchNodes(knowledge, 'Qwen3.8-LiveTranslate')[0]?.id).toBe(
      'qwen38-livetranslate-model',
    );
    expect(searchNodes(knowledge, 'Qwen3.8')[0]?.id).toBe('qwen38');
    expect(searchNodes(knowledge, 'GPT-4')[0]?.id).not.toBe('gpt');
    expect(searchNodes(knowledge, 'Kimi K2')[0]?.id).toBe('kimi-k2');
    expect(searchNodes(knowledge, 'Kimi K2 Thinking')[0]?.id).toBe('kimi-k2-thinking');
    expect(knowledge.timeline.find((model) => model.id === 'kimi-k2-thinking')).toMatchObject({
      year: 2025,
      month: 11,
      seriesPrevious: 'kimi-k2',
    });
    expect(searchNodes(knowledge, 'Kimi K2.7')[0]?.id).toBe('kimi-k27-model');
    expect(searchNodes(knowledge, 'Qwen')[0]?.id).toBe('qwen');
  });
  it('follows only reading prerequisites', () => {
    const ids = prerequisites(knowledge, 'whisper').map((node) => node.id);
    expect(ids).toContain('attention');
    expect(ids).not.toContain('wav2vec2');
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('keeps incoming and outgoing relationships', () => {
    expect(connectedRelations(knowledge, 'whisper').some((r) => r.from === 'wav2vec2')).toBe(true);
  });
  it('rejects missing figure references, mismatched model and missing chapter placements', () => {
    const bad = structuredClone(knowledge);
    bad.guides[0]!.figures[0]!.figure = 'absent';
    expect(() => validateKnowledge(bad)).toThrow('missing reference');
    bad.guides[0]!.figures[0]!.figure = knowledge.figures[0]!.id;
    bad.guides[0]!.figures[0]!.heading = 'absent';
    expect(() => validateKnowledge(bad)).toThrow('missing chapter');
    bad.guides[0]!.model = 'bert';
    expect(() => validateKnowledge(bad)).toThrow('figure/model mismatch');
  });
  it('requires a verified embed declaration and a local static asset', () => {
    const bad = structuredClone(knowledge);
    bad.figures[0]!.interactive!.embedUrl = 'https://example.com/';
    expect(() => validateKnowledge(bad)).toThrow('unverified embed');
    delete bad.figures[0]!.interactive!.embedUrl;
    bad.figures[0]!.interactive!.embedding = 'verified';
    expect(() => validateKnowledge(bad)).toThrow('requires embedUrl');
    bad.figures[0]!.interactive!.embedding = 'external-only';
    bad.figures[0]!.asset!.src = '/../secret';
    expect(() => validateKnowledge(bad)).toThrow('local public path');
  });
  it('bundles duplicate endpoint pairs without losing meanings or reversing them', () => {
    const pairs = groupRelations(connectedRelations(knowledge, 'whisper'));
    const structure = pairs.find((group) => group[0]!.to === 'encoder-decoder')!;
    expect(new Set(structure.map((r) => r.kind))).toEqual(new Set(['uses', 'prerequisite']));
    expect(
      pairs.filter((group) => group[0]!.from === 'whisper' && group[0]!.to === 'speech-assistant'),
    ).toHaveLength(1);
    expect(
      pairs.filter((group) => group[0]!.from === 'speech-assistant' && group[0]!.to === 'whisper'),
    ).toHaveLength(1);
  });
});

describe('model and concept navigation', () => {
  it('starts with an unselected overview and roundtrips shareable reading state', () => {
    expect(decodeSelection('', knowledge)).toEqual({ concepts: [] });
    const state: AtlasSelection = { model: 'whisper', concepts: ['next-token', 'attention'] };
    expect(decodeSelection(encodeSelection(state), knowledge)).toEqual(state);
  });
  it('migrates old expanded URLs to the model and discards obsolete filters', () => {
    expect(
      decodeSelection(
        '?node=whisper&node=wer&reader=closed&open=route-both&view=network',
        knowledge,
      ),
    ).toEqual({ model: 'whisper', concepts: [] });
    expect(
      encodeSelection(decodeSelection('?node=whisper&node=next-token&modality=omni', knowledge)),
    ).toBe('?model=whisper&concept=next-token');
  });
  it('rejects unknown IDs and truncates invalid concept paths', () => {
    expect(decodeSelection('?model=wer&concept=unknown&concept=sft', knowledge)).toEqual({
      concepts: [],
    });
    expect(
      decodeSelection('?model=whisper&concept=next-token&concept=unknown&concept=sft', knowledge),
    ).toEqual({ model: 'whisper', concepts: ['next-token'] });
  });
  it('returns within a concept cycle without changing the model', () => {
    expect(
      visitSelection({ model: 'whisper', concepts: ['next-token', 'attention'] }, 'next-token'),
    ).toEqual({ model: 'whisper', concepts: ['next-token'] });
  });
  it('separates model navigation from concept previews without duplicate history', () => {
    const store = createAtlasStore({ concepts: [] }, knowledge),
      subscriber = vi.fn();
    store.subscribe(subscriber);
    store.getState().visit('whisper');
    store.getState().visit('whisper');
    expect(subscriber).toHaveBeenCalledTimes(1);
    store.getState().visit('next-token');
    store.getState().visit('attention');
    store.getState().returnTo(0);
    expect(store.getState().selection).toEqual({ model: 'whisper', concepts: ['next-token'] });
    store.getState().closeReader();
    expect(store.getState().selection).toEqual({ model: 'whisper', concepts: [] });
    store.getState().visit('bert');
    expect(store.getState().selection).toEqual({ model: 'bert', concepts: [] });
    store.getState().visit('unknown');
    expect(store.getState().selection.model).toBe('bert');
    store.getState().reset();
    expect(store.getState().selection).toEqual({ concepts: [] });
  });
});
