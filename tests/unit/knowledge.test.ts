import { describe, expect, it } from 'vitest';
import { readKnowledgeFixture } from '../fixtures/knowledge';
import { validateKnowledge } from '../../src/core/validation/validate-knowledge';
import { connectedRelations, prerequisites, searchNodes } from '../../src/core/queries/knowledge';
import { projectKnowledge, type MapSelection } from '../../src/core/projections/project';
import { decodeSelection, encodeSelection } from '../../src/features/atlas/url-state';
import { parseProgress } from '../../src/platform/progress';

const knowledge = readKnowledgeFixture();
const selection: MapSelection = {
  node: 'whisper',
  view: 'tree',
  facet: 'overview',
  modality: 'all',
};

describe('published content contracts', () => {
  it('loads the real content with all modalities, sources, questions and a complete case', () => {
    expect(new Set(knowledge.nodes.map((node) => node.modality)).size).toBe(5);
    expect(knowledge.nodes.find((node) => node.kind === 'case')?.caseStages).toHaveLength(6);
    expect(knowledge.paths).toHaveLength(2);
  });
  it('rejects duplicate IDs instead of silently overwriting a node', () => {
    const bad = structuredClone(knowledge);
    bad.nodes.push(bad.nodes[0]!);
    expect(() => validateKnowledge(bad)).toThrow('duplicate ID');
  });
  it('rejects a dangling relationship and missing source', () => {
    const bad = structuredClone(knowledge);
    bad.relations[0]!.to = 'missing-node';
    bad.nodes[0]!.sources = ['missing-source'];
    expect(() => validateKnowledge(bad)).toThrow('missing reference');
  });
  it('rejects missing and misordered case stages', () => {
    const bad = structuredClone(knowledge);
    bad.nodes.find((node) => node.kind === 'case')!.caseStages!.reverse();
    expect(() => validateKnowledge(bad)).toThrow('six ordered stages');
  });
  it('rejects cyclic reading prerequisites but accepts non-prerequisite relationship cycles', () => {
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

describe('knowledge queries and projections', () => {
  it('finds English names and Chinese aliases without duplicating records', () => {
    expect(searchNodes(knowledge, 'whisper').map((node) => node.id)).toEqual(['whisper']);
    expect(searchNodes(knowledge, '概率').some((node) => node.id === 'calibration')).toBe(true);
  });
  it('follows only reading prerequisites and terminates on shared dependencies', () => {
    const ids = prerequisites(knowledge, 'whisper').map((node) => node.id);
    expect(ids).toContain('attention');
    expect(ids).not.toContain('wav2vec2');
    expect(new Set(ids).size).toBe(ids.length);
  });
  it('includes incoming as well as outgoing semantic relationships', () => {
    expect(connectedRelations(knowledge, 'whisper').some((r) => r.from === 'wav2vec2')).toBe(true);
  });
  it('keeps selected node visible across filters and removes dangling edges', () => {
    const projected = projectKnowledge(knowledge, {
      ...selection,
      modality: 'cv',
      facet: 'training',
    });
    expect(projected.nodes.some((node) => node.id === 'whisper')).toBe(true);
    const ids = new Set(projected.nodes.map((node) => node.id));
    expect(projected.relations.every((r) => ids.has(r.from) && ids.has(r.to))).toBe(true);
  });
  it('shows direct neighbors in network mode, not an unrelated whole graph', () => {
    const projected = projectKnowledge(knowledge, { ...selection, view: 'network' });
    expect(projected.nodes.some((node) => node.id === 'wer')).toBe(true);
    expect(projected.nodes.some((node) => node.id === 'dit')).toBe(false);
  });
});

describe('URL and progress boundaries', () => {
  it('roundtrips the shareable map state', () => {
    const state: MapSelection = {
      ...selection,
      view: 'timeline',
      facet: 'evaluation',
      modality: 'audio',
    };
    expect(decodeSelection(encodeSelection(state), knowledge)).toEqual(state);
  });
  it('recovers a usable map from unknown IDs and invalid URL values', () => {
    expect(decodeSelection('?node=unknown&view=bad&modality=bad&facet=bad', knowledge)).toEqual({
      node: 'transformer',
      view: 'tree',
      facet: 'overview',
      modality: 'all',
    });
  });
  it('rejects unsupported progress versions and malformed records', () => {
    expect(() => parseProgress('{"version":2,"nodes":{},"answers":{}}')).toThrow();
    expect(() => parseProgress('{"version":1,"nodes":{"whisper":"yes"},"answers":{}}')).toThrow();
  });
});
