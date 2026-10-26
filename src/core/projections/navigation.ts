import type { KnowledgeBase, NavigationEntry } from '../schemas/knowledge';

export function navigationPath(data: KnowledgeBase, id: string): NavigationEntry[] {
  const path: NavigationEntry[] = [];
  let entry = data.navigation.find((item) => item.id === id);
  while (entry) {
    path.unshift(entry);
    entry = data.navigation.find((item) => item.id === entry!.parent);
  }
  return path;
}

export function childrenOf(data: KnowledgeBase, id: string): NavigationEntry[] {
  return data.navigation.filter((entry) => entry.parent === id);
}

export function initialExpansion(data: KnowledgeBase): string[] {
  return data.navigation.filter((entry) => !entry.parent).map((entry) => entry.id);
}

/** Exactly one open branch per level; restoring a path also restores its ancestors. */
export function normalizeExpansion(data: KnowledgeBase, requested: readonly string[]): string[] {
  const branch = [...requested].reverse().find((id) => childrenOf(data, id).length > 0);
  return branch ? navigationPath(data, branch).map((entry) => entry.id) : initialExpansion(data);
}

export function toggleBranch(
  data: KnowledgeBase,
  expanded: readonly string[],
  id: string,
): string[] {
  if (!childrenOf(data, id).length) return [...expanded];
  if (expanded.includes(id)) return expanded.slice(0, Math.max(1, expanded.indexOf(id)));
  return navigationPath(data, id).map((entry) => entry.id);
}

export function revealKnowledge(data: KnowledgeBase, id: string): string[] {
  const occurrence = data.navigation.find((entry) => entry.knowledge === id);
  return occurrence
    ? normalizeExpansion(
        data,
        navigationPath(data, occurrence.id)
          .slice(0, -1)
          .map((entry) => entry.id),
      )
    : initialExpansion(data);
}

export function projectNavigation(data: KnowledgeBase, expanded: readonly string[]) {
  const open = new Set(expanded);
  const visible = data.navigation.filter((entry) =>
    navigationPath(data, entry.id)
      .slice(0, -1)
      .every((parent) => open.has(parent.id)),
  );
  return {
    nodes: visible,
    edges: visible
      .filter((entry) => entry.parent)
      .map((entry) => ({ from: entry.parent!, to: entry.id })),
  };
}
