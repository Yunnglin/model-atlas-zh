import type { Facet, KnowledgeBase, MapView, Modality } from '../schemas/knowledge';
import { connectedRelations } from '../queries/knowledge';

export interface MapSelection {
  node: string;
  view: MapView;
  facet: Facet;
  modality: Modality | 'all';
}

export function projectKnowledge(
  data: KnowledgeBase,
  selection: MapSelection,
  expanded = false,
): KnowledgeBase {
  const related = connectedRelations(data, selection.node);
  const neighborIds = new Set(related.flatMap((relation) => [relation.from, relation.to]));
  const nodes = data.nodes.filter((node) => {
    if (node.id === selection.node || node.id === 'transformer') return true;
    if (
      selection.modality !== 'all' &&
      node.modality !== selection.modality &&
      node.modality !== 'shared'
    )
      return false;
    if (selection.view === 'network' && !neighborIds.has(node.id)) return false;
    if (
      !expanded &&
      selection.facet === 'overview' &&
      selection.view !== 'network' &&
      !node.featured
    )
      return false;
    return selection.facet === 'overview' || node.facets.includes(selection.facet);
  });
  const visible = new Set(nodes.map((node) => node.id));
  return {
    ...data,
    nodes,
    relations: data.relations.filter((r) => visible.has(r.from) && visible.has(r.to)),
  };
}
