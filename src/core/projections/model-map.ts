import type { KnowledgeBase, KnowledgeNode, Relation } from '../schemas/knowledge';
export function isModel(node: KnowledgeNode): boolean {
  return node.kind === 'model' || node.id === 'transformer';
}
export function projectModelMap(data: KnowledgeBase) {
  const nodes = data.nodes
    .filter(isModel)
    .toSorted((a, b) => (a.year ?? 2100) - (b.year ?? 2100) || a.id.localeCompare(b.id));
  const ids = new Set(nodes.map((node) => node.id));
  const edges: {
    id: string;
    from: string;
    to: string;
    label: string;
    comparison: boolean;
    evidence: Relation[];
  }[] = [];
  for (const relation of data.relations) {
    if (!['uses', 'extends', 'compared-with'].includes(relation.kind)) continue;
    if (ids.has(relation.from) && ids.has(relation.to)) {
      const source = nodes.find((node) => node.id === relation.from)!,
        target = nodes.find((node) => node.id === relation.to)!;
      const reverse = (source.year ?? 2100) > (target.year ?? 2100);
      edges.push({
        id: relation.id,
        from: reverse ? target.id : source.id,
        to: reverse ? source.id : target.id,
        label: relation.caption ?? (relation.kind === 'compared-with' ? '对比' : '结构关联'),
        comparison: relation.kind === 'compared-with',
        evidence: [relation],
      });
    } else if (ids.has(relation.from) && relation.to === 'encoder-decoder') {
      const root = data.relations.find(
        (item) =>
          item.from === 'encoder-decoder' && item.to === 'transformer' && item.kind === 'uses',
      );
      if (root)
        edges.push({
          id: `via-${relation.id}`,
          from: 'transformer',
          to: relation.from,
          label: '编码器＋解码器',
          comparison: false,
          evidence: [relation, root],
        });
    }
  }
  const connected = new Set(edges.flatMap((edge) => [edge.from, edge.to]));
  return {
    nodes: nodes.filter((node) => connected.has(node.id) || node.id === 'transformer'),
    unlinked: nodes.filter((node) => !connected.has(node.id) && node.id !== 'transformer'),
    edges,
  };
}
export type ModelMap = ReturnType<typeof projectModelMap>;
