import { z } from 'zod';
import {
  facetSchema,
  modalitySchema,
  viewSchema,
  type KnowledgeBase,
} from '../../core/schemas/knowledge';
import type { MapSelection } from '../../core/projections/project';

export function decodeSelection(search: string, data: KnowledgeBase): MapSelection {
  const params = new URLSearchParams(search);
  const id = params.get('node');
  const node = data.nodes.some((item) => item.id === id) ? id! : 'transformer';
  return {
    node,
    view: viewSchema.catch('tree').parse(params.get('view')),
    facet: facetSchema.catch('overview').parse(params.get('facet')),
    modality: modalitySchema.or(z.literal('all')).catch('all').parse(params.get('modality')),
  };
}

export function encodeSelection(state: MapSelection): string {
  const params = new URLSearchParams();
  params.set('node', state.node);
  if (state.view !== 'tree') params.set('view', state.view);
  if (state.facet !== 'overview') params.set('facet', state.facet);
  if (state.modality !== 'all') params.set('modality', state.modality);
  return `?${params.toString()}`;
}
