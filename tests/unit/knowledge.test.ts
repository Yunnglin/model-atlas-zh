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
  projectNavigation,
  navigationPath,
  normalizeExpansion,
  toggleBranch,
  initialExpansion,
} from '../../src/core/projections/navigation';
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
  it('starts with a root and three structure routes, not every direct technical relationship', () => {
    const tree = projectNavigation(knowledge, initialExpansion(knowledge));
    expect(tree.nodes.map((node) => node.id)).toEqual([
      'nav-root',
      'route-encoder',
      'route-decoder',
      'route-both',
    ]);
    expect(tree.edges).toHaveLength(tree.nodes.length - 1);
  });
  it('opens one sibling dimension at a time while preserving the ancestor path', () => {
    const open = normalizeExpansion(knowledge, ['whisper-training']);
    expect(open).toEqual(['nav-root', 'route-both', 'model-whisper', 'whisper-training']);
    const next = toggleBranch(knowledge, open, 'whisper-evaluation');
    const tree = projectNavigation(knowledge, next);
    expect(tree.nodes.some((node) => node.knowledge === 'wer')).toBe(true);
    expect(tree.nodes.some((node) => node.knowledge === 'next-token')).toBe(false);
    expect(tree.nodes.some((node) => node.id === 'whisper-training')).toBe(true);
    expect(next).not.toContain('whisper-training');
  });
  it('collapses descendants and keeps only navigation parent edges', () => {
    const expanded = normalizeExpansion(knowledge, ['whisper-training']);
    const collapsed = toggleBranch(knowledge, expanded, 'model-whisper');
    expect(collapsed).toEqual(['nav-root', 'route-both']);
    const tree = projectNavigation(knowledge, expanded);
    expect(tree.edges).toHaveLength(tree.nodes.length - 1);
    expect(
      tree.edges.every(
        (edge) => knowledge.navigation.find((node) => node.id === edge.to)?.parent === edge.from,
      ),
    ).toBe(true);
  });
  it('can reference the same canonical article from multiple navigation locations', () => {
    const duplicate = structuredClone(knowledge);
    duplicate.navigation.push({
      id: 'another-whisper-reference',
      order: 99,
      parent: 'route-encoder',
      knowledge: 'next-token',
    });
    expect(() => validateKnowledge(duplicate)).not.toThrow();
    expect(navigationPath(duplicate, 'another-whisper-reference').map((entry) => entry.id)).toEqual(
      ['nav-root', 'route-encoder', 'another-whisper-reference'],
    );
    expect(duplicate.nodes.filter((node) => node.id === 'next-token')).toHaveLength(1);
  });
  it('rejects broken navigation references, cycles and duplicate occurrences', () => {
    const broken = structuredClone(knowledge);
    broken.navigation[1]!.parent = 'missing-parent';
    expect(() => validateKnowledge(broken)).toThrow('missing reference');
    broken.navigation[1]!.parent = 'model-bert';
    expect(() => validateKnowledge(broken)).toThrow('navigation cycle');
    broken.navigation.push(broken.navigation[1]!);
    expect(() => validateKnowledge(broken)).toThrow('duplicate ID');
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

describe('exploration URL and navigation', () => {
  it('starts in an unselected overview', () => {
    expect(decodeSelection('', knowledge)).toEqual({
      trail: [],
      readerOpen: false,
      expanded: ['nav-root'],
    });
  });
  it('roundtrips a shared path and closed reader', () => {
    const selection: AtlasSelection = {
      trail: ['whisper', 'next-token'],
      readerOpen: false,
      expanded: ['nav-root', 'route-both', 'model-whisper', 'whisper-training'],
    };
    expect(decodeSelection(encodeSelection(selection), knowledge)).toEqual(selection);
  });
  it('preserves old node links but discards obsolete filter and mode parameters', () => {
    const selection = decodeSelection(
      '?node=whisper&modality=omni&view=network&facet=training',
      knowledge,
    );
    expect(selection).toEqual({
      trail: ['whisper'],
      readerOpen: true,
      expanded: ['nav-root', 'route-both'],
    });
    expect(encodeSelection(selection)).toBe('?node=whisper&open=route-both');
  });
  it('rejects unknown path segments instead of selecting a random node', () => {
    expect(decodeSelection('?node=unknown', knowledge)).toEqual({
      trail: [],
      readerOpen: false,
      expanded: ['nav-root'],
    });
    expect(decodeSelection('?node=whisper&node=unknown&node=sft', knowledge).trail).toEqual([
      'whisper',
    ]);
  });
  it('returns to an existing point in a cycle instead of growing the breadcrumb indefinitely', () => {
    expect(
      visitSelection(
        { trail: ['whisper', 'next-token'], readerOpen: true, expanded: ['nav-root'] },
        'whisper',
      ).trail,
    ).toEqual(['whisper']);
  });
  it('does not generate duplicate history entries for an unchanged selection', () => {
    const store = createAtlasStore(
      { trail: [], readerOpen: false, expanded: ['nav-root'] },
      knowledge,
    );
    const subscriber = vi.fn();
    store.subscribe(subscriber);
    store.getState().visit('whisper');
    store.getState().visit('whisper');
    expect(subscriber).toHaveBeenCalledTimes(1);
    store.getState().visit('next-token');
    store.getState().returnTo(0);
    expect(store.getState().selection.trail).toEqual(['whisper']);
    store.getState().closeReader();
    expect(store.getState().selection.readerOpen).toBe(false);
    store.getState().reset();
    expect(store.getState().selection.trail).toEqual([]);
  });
});
