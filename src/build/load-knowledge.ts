import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getCollection, render } from 'astro:content';
import { validateKnowledge } from '../core/validation/validate-knowledge';
import type { KnowledgeBase } from '../core/schemas/knowledge';

export async function loadKnowledge(): Promise<KnowledgeBase> {
  const [docs, sources, relations, questions, paths, figures, guides, timeline] = await Promise.all(
    [
      getCollection('docs'),
      getCollection('sources'),
      getCollection('relations'),
      getCollection('questions'),
      getCollection('paths'),
      getCollection('figures'),
      getCollection('guides'),
      getCollection('timeline'),
    ],
  );
  await Promise.all(
    figures.map(async ({ data: figure }) => {
      if (!figure.asset) return;
      if (!figure.asset.src.startsWith('/figures/') || figure.asset.src.includes('..'))
        throw new Error(`${figure.id}: invalid asset path`);
      await access(resolve(process.cwd(), `public${figure.asset.src}`));
    }),
  );
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return validateKnowledge({
    version: 3,
    timeline: timeline.map((entry) => entry.data),
    figures: figures.map((entry) => ({
      ...entry.data,
      ...(entry.data.asset
        ? { asset: { ...entry.data.asset, src: `${base}${entry.data.asset.src}` } }
        : {}),
    })),
    guides: guides.map((entry) => entry.data),
    nodes: await Promise.all(
      docs
        .toSorted((a, b) => a.data.atlas.id.localeCompare(b.data.atlas.id))
        .map(async (entry) => {
          const { headings } = await render(entry);
          return {
            ...entry.data.atlas,
            title: entry.data.title,
            href: `${base}/${entry.id.replace(/\/$/, '')}/`,
            readerHref: `${base}/readers/${entry.data.atlas.id}/`,
            chapters: headings
              .filter((h) => h.depth === 2 && h.text !== '先看一个问题')
              .map((h) => ({ id: h.slug, title: h.text })),
          };
        }),
    ),
    sources: sources.map((entry) => entry.data),
    relations: relations.map((entry) => entry.data),
    questions: questions.map((entry) => entry.data),
    paths: paths.map((entry) => entry.data),
  });
}
