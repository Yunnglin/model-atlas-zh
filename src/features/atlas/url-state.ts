import type { KnowledgeBase } from '../../core/schemas/knowledge';
import { isModel } from '../../core/queries/is-model';
import { visitSelection, type AtlasSelection } from './state';

/** Old tree URLs migrate to a model, without replaying their obsolete expansion state. */
export function decodeSelection(search: string, data: KnowledgeBase): AtlasSelection {
  const params = new URLSearchParams(search);
  const requested = data.nodes.find((node) => node.id === params.get('model') && isModel(node));
  let state: AtlasSelection = { ...(requested ? { model: requested.id } : {}), concepts: [] };
  const legacy = params.getAll('node');
  if (!params.has('model')) {
    const model = legacy
      .map((id) => data.nodes.find((node) => node.id === id))
      .find((node) => node && isModel(node));
    if (model) state = { model: model.id, concepts: [] };
  }
  const concepts = params.has('concept')
    ? params.getAll('concept')
    : params.get('reader') === 'closed'
      ? []
      : legacy;
  for (const id of concepts) {
    const node = data.nodes.find((item) => item.id === id);
    if (!node) break;
    if (!isModel(node)) state = visitSelection(state, id);
  }
  return state;
}
export function encodeSelection(state: AtlasSelection): string {
  const params = new URLSearchParams();
  if (state.model) params.set('model', state.model);
  state.concepts.forEach((id) => params.append('concept', id));
  return params.size ? `?${params}` : '';
}
