import type { KnowledgeNode } from '../schemas/knowledge';
export function isModel(node: KnowledgeNode): boolean {
  return node.kind === 'model' || node.id === 'transformer';
}
