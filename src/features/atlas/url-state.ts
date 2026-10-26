import type { KnowledgeBase } from '../../core/schemas/knowledge';
import {
  initialExpansion,
  normalizeExpansion,
  revealKnowledge,
} from '../../core/projections/navigation';
import { visitSelection, type AtlasSelection } from './state';

/** Repeated node parameters preserve a shareable exploration path, including old deep links. */
export function decodeSelection(search: string, data: KnowledgeBase): AtlasSelection {
  const params = new URLSearchParams(search);
  const ids = new Set(data.nodes.map((node) => node.id));
  let state: AtlasSelection = { trail: [], readerOpen: false, expanded: initialExpansion(data) };
  for (const id of params.getAll('node')) {
    if (!ids.has(id)) break;
    state = visitSelection(state, id);
  }
  const requested = params.getAll('open').flatMap((id) => {
    if (data.navigation.some((entry) => entry.id === id)) return [id];
    // Earlier demos used canonical knowledge IDs for expansion.
    return data.navigation.filter((entry) => entry.knowledge === id).map((entry) => entry.id);
  });
  state.expanded = requested.length
    ? normalizeExpansion(data, requested)
    : state.trail.length
      ? revealKnowledge(data, state.trail.at(-1)!)
      : initialExpansion(data);
  if (state.trail.length && params.get('reader') === 'closed') state.readerOpen = false;
  return state;
}

export function encodeSelection(state: AtlasSelection): string {
  const params = new URLSearchParams();
  state.trail.forEach((id) => params.append('node', id));
  if (state.trail.length && !state.readerOpen) params.set('reader', 'closed');
  state.expanded.filter((id) => id !== 'nav-root').forEach((id) => params.append('open', id));
  const search = params.toString();
  return search ? `?${search}` : '';
}
