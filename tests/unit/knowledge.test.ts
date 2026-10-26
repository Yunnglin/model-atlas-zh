import { describe, expect, it, vi } from 'vitest';
import { readKnowledgeFixture } from '../fixtures/knowledge';
import { validateKnowledge } from '../../src/core/validation/validate-knowledge';
import {
  connectedRelations,
  groupRelations,
  prerequisites,
  searchNodes,
} from '../../src/core/queries/knowledge';
import { isModel, projectModelMap } from '../../src/core/projections/model-map';
import { decodeSelection, encodeSelection } from '../../src/features/atlas/url-state';
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
  it('searches English names and Chinese aliases', () => {
    expect(searchNodes(knowledge, '下一 token')[0]?.id).toBe('next-token');
    expect(searchNodes(knowledge, 'whisper').map((node) => node.id)).toEqual(['whisper']);
    expect(searchNodes(knowledge, '低秩').some((node) => node.id === 'lora')).toBe(true);
    expect(searchNodes(knowledge, 'Qwen3')[0]?.id).toBe('qwen3');
    expect(searchNodes(knowledge, 'Qwen3.8')[0]?.id).toBe('qwen38');
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
  it('projects models only, keeping sourced meanings rather than treating prerequisites as ancestry', () => {
    const map = projectModelMap(knowledge);
    expect(map.nodes.every(isModel)).toBe(true);
    expect(map.nodes.some((node) => node.id === 'transformer')).toBe(true);
    expect(map.nodes.some((node) => node.id === 'next-token')).toBe(false);
    expect(map.nodes.every((node) => node.featured)).toBe(true);
    expect(map.nodes.some((node) => node.id === 'qwen')).toBe(true);
    expect(map.nodes.some((node) => node.id === 'qwen3')).toBe(false);
    expect(knowledge.nodes.some((node) => node.id === 'qwen3' && isModel(node))).toBe(true);
    expect(
      map.edges.every(
        (edge) =>
          edge.evidence.length > 0 && edge.evidence.every((item) => item.kind !== 'prerequisite'),
      ),
    ).toBe(true);
    expect(
      map.edges
        .find((edge) => edge.to === 'whisper' && !edge.comparison)
        ?.evidence.map((item) => item.id),
    ).toEqual(['whisper-uses-encoder-decoder', 'encoder-decoder-uses-transformer']);
    const comparison = map.edges.find((edge) => edge.comparison && edge.to === 'whisper')!;
    expect(comparison.evidence[0]!.kind).toBe('compared-with');
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
