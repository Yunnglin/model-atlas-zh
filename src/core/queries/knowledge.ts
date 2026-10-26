import type { KnowledgeBase, KnowledgeNode, Relation } from '../schemas/knowledge';

export function findNode(data: KnowledgeBase, id: string): KnowledgeNode | undefined {
  return data.nodes.find((node) => node.id === id);
}

export function connectedRelations(data: KnowledgeBase, id: string): Relation[] {
  return data.relations.filter((relation) => relation.from === id || relation.to === id);
}

export function groupRelations(relations: Relation[]): Relation[][] {
  const groups = new Map<string, Relation[]>();
  for (const relation of relations) {
    const key = `${relation.from}:${relation.to}`;
    const group = groups.get(key) ?? [];
    group.push(relation);
    groups.set(key, group);
  }
  return [...groups.values()];
}

export function prerequisites(data: KnowledgeBase, id: string): KnowledgeNode[] {
  const ids = new Set<string>();
  function visit(current: string): void {
    for (const relation of data.relations) {
      if (relation.kind !== 'prerequisite' || relation.from !== current || ids.has(relation.to))
        continue;
      ids.add(relation.to);
      visit(relation.to);
    }
  }
  visit(id);
  return data.nodes.filter((node) => ids.has(node.id));
}

export function searchNodes(data: KnowledgeBase, query: string): KnowledgeNode[] {
  const normalized = query.toLocaleLowerCase().trim();
  const terms = normalized.split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  function score(node: KnowledgeNode): number {
    const names = [node.title, node.id, ...node.aliases].map((name) => name.toLocaleLowerCase());
    if (names.includes(normalized)) return 0;
    if (names.some((name) => name.startsWith(normalized))) return 1;
    if (names.some((name) => name.includes(normalized))) return 2;
    if (terms.every((term) => names.some((name) => name.includes(term)))) return 3;
    return 4;
  }
  return data.nodes
    .filter((node) => {
      const text =
        `${node.title} ${node.id} ${node.aliases.join(' ')} ${node.summary}`.toLocaleLowerCase();
      return terms.every((term) => text.includes(term));
    })
    .sort((a, b) => score(a) - score(b) || a.id.localeCompare(b.id));
}
