import { readFileSync, readdirSync } from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { parse } from 'yaml';
import { validateKnowledge } from '../../src/core/validation/validate-knowledge';
import type { KnowledgeBase } from '../../src/core/schemas/knowledge';

export function readKnowledgeFixture(): KnowledgeBase {
  const root = resolve('src/content');
  const docs = join(root, 'docs');
  const nodes: unknown[] = [];
  function walk(directory: string): void {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) walk(path);
      else if (path.endsWith('.md')) {
        const text = readFileSync(path, 'utf8');
        const frontmatter = parse(text.split('---')[1]!) as { title: string; atlas: object };
        nodes.push({
          ...frontmatter.atlas,
          title: frontmatter.title,
          href: `/${relative(docs, path).replace(/\.md$/, '')}/`,
          readerHref: `/readers/${(frontmatter.atlas as { id: string }).id}/`,
        });
      }
    }
  }
  walk(docs);
  const load = (name: string): unknown =>
    parse(readFileSync(join(root, 'data', `${name}.yaml`), 'utf8'));
  return validateKnowledge({
    version: 2,
    navigation: load('navigation'),
    nodes,
    sources: load('sources'),
    relations: load('relations'),
    questions: load('questions'),
    paths: load('learning-paths'),
  });
}
