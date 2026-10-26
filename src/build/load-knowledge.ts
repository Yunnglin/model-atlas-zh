import { getCollection } from 'astro:content';
import { validateKnowledge } from '../core/validation/validate-knowledge';
import type { KnowledgeBase } from '../core/schemas/knowledge';

export async function loadKnowledge(): Promise<KnowledgeBase> {
  const [docs, sources, relations, questions, paths, navigation] = await Promise.all([
    getCollection('docs'),
    getCollection('sources'),
    getCollection('relations'),
    getCollection('questions'),
    getCollection('paths'),
    getCollection('navigation'),
  ]);
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return validateKnowledge({
    version: 2,
    navigation: navigation.map((entry) => entry.data).toSorted((a, b) => a.order - b.order),
    nodes: docs
      .toSorted((a, b) => a.data.atlas.id.localeCompare(b.data.atlas.id))
      .map((entry) => ({
        ...entry.data.atlas,
        title: entry.data.title,
        href: `${base}/${entry.id.replace(/\/$/, '')}/`,
        readerHref: `${base}/readers/${entry.data.atlas.id}/`,
      })),
    sources: sources.map((entry) => entry.data),
    relations: relations.map((entry) => entry.data),
    questions: questions.map((entry) => entry.data),
    paths: paths.map((entry) => entry.data),
  });
}
