import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { parse } from 'yaml';
import type { Root } from 'mdast';
import remarkBaseLinks from '../../src/build/remark-base-links';
import { readKnowledgeFixture } from '../fixtures/knowledge';

function tree(url: string): Root {
  return {
    type: 'root',
    children: [
      {
        type: 'paragraph',
        children: [{ type: 'link', url, children: [{ type: 'text', value: '知识点' }] }],
      },
    ],
  };
}

describe('learner-facing content integrity', () => {
  it('keeps recorded local figure checksums consistent with the assets', () => {
    const sections = readFileSync('docs/assets.md', 'utf8').split(/(?=^#{2,3} )/m);
    for (const section of sections) {
      const hash = section.match(/SHA-256：`([0-9a-f]{64})`/)?.[1];
      const path = section.match(/`(public\/figures\/[^`]+\.(?:svg|png|jpe?g|webp))`/)?.[1];
      if (!hash || !path) continue;
      expect(createHash('sha256').update(readFileSync(path)).digest('hex'), path).toBe(hash);
    }
  });
  it('avoids site-centric self references in reader-facing articles', () => {
    const data = readKnowledgeFixture();
    for (const node of data.nodes) {
      const raw = readFileSync(`src/content/docs${node.href.replace(/\/$/, '.md')}`, 'utf8');
      expect(raw, node.id).not.toMatch(/本站|本网站|本项目/);
    }
  });
  it('keeps every timeline model distinct, illustrated, and beginning with a sufficiently deep model card', () => {
    const data = readKnowledgeFixture();
    const articles = new Set<string>();
    for (const entry of data.timeline) {
      expect(articles.has(entry.article), `${entry.id}: shared article`).toBe(false);
      articles.add(entry.article);
      const node = data.nodes.find((item) => item.id === entry.article);
      expect(node, `${entry.id}: missing article`).toBeDefined();
      const raw = readFileSync(`src/content/docs${node!.href.replace(/\/$/, '.md')}`, 'utf8');
      const body = raw.split('---').slice(2).join('---').split('## 参考资料')[0]!;
      expect(body.trimStart(), entry.id).toMatch(/^## 模型卡/);
      // Count article prose separately from headings, model-card tables and reference links.
      const prose = body
        .split('\n')
        .filter((line) => !/^\s*(\||#|[-*]\s*\[|<\/?|\$\$)/.test(line))
        .join('\n')
        .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1');
      expect(prose.match(/[\u4e00-\u9fff]/g)?.length ?? 0, entry.id).toBeGreaterThanOrEqual(2000);
      expect(
        data.guides.some((guide) => guide.model === entry.article && guide.figures.length),
        entry.id,
      ).toBe(true);
      const guide = data.guides.find((item) => item.model === entry.article)!;
      for (const item of guide.figures) {
        const figure = data.figures.find((candidate) => candidate.id === item.figure);
        if (figure?.asset)
          expect(raw, `${entry.id}: duplicated registered figure`).not.toContain(
            `](${figure.asset.src})`,
          );
      }
    }
  });
  it('rejects dangling article links, while keeping base prefixes, anchors and query strings', () => {
    const validate = remarkBaseLinks({
      base: '/model-atlas-zh/',
      targets: new Set(['/foundations/attention/']),
    });
    expect(() => validate(tree('/foundations/missing/'))).toThrow('Missing local content target');
    const valid = tree('/foundations/attention/#公式');
    validate(valid);
    expect(valid.children[0]).toMatchObject({
      children: [{ url: '/model-atlas-zh/foundations/attention/#公式' }],
    });
    expect(() => validate(tree('//example.com/paper'))).not.toThrow();
  });
  it('validates the maintained article inventory rather than a hand-written graph copy', () => {
    const data = readKnowledgeFixture(),
      validate = remarkBaseLinks({ base: '/model-atlas-zh/' });
    for (const node of data.nodes) expect(() => validate(tree(node.href))).not.toThrow();
    expect(() => validate(tree('/figures/sam/model_diagram.png'))).not.toThrow();
    expect(() => validate(tree('/figures/missing.png'))).toThrow('Missing local content target');
  });
  it('keeps visible references aligned with registered source URLs and pinned paper versions', () => {
    const data = readKnowledgeFixture();
    for (const node of data.nodes) {
      const raw = readFileSync(`src/content/docs${node.href.replace(/\/$/, '.md')}`, 'utf8');
      const references = raw.split('## 参考资料')[1] ?? '';
      const urls = new Set(
        [...references.matchAll(/\]\((https?:[^)]+)\)/g)].map((match) => match[1]),
      );
      for (const id of node.sources) {
        const source = data.sources.find((item) => item.id === id)!;
        expect(urls.has(source.url), `${node.id}: missing canonical reference ${id}`).toBe(true);
      }
    }
  });
  it('keeps selected models as complete, sourced continuous explanations and cases as six-stage plans', () => {
    const data = readKnowledgeFixture();
    for (const node of data.nodes) {
      const raw = readFileSync(`src/content/docs${node.href.replace(/\/$/, '.md')}`, 'utf8'),
        parts = raw.split('---'),
        meta = parse(parts[1]!).atlas as { featured?: boolean; kind: string };
      const body = parts.slice(2).join('---').split('## 参考资料')[0]!;
      if (meta.featured && (meta.kind === 'model' || node.id === 'transformer')) {
        expect(body.match(/[\u4e00-\u9fff]/g)?.length ?? 0, node.id).toBeGreaterThan(450);
        for (const section of [
          '要解决什么问题',
          '结构与数据流',
          '数据与训练',
          '评测',
          '应用与',
          '比较与面试',
        ])
          expect(body, `${node.id}/${section}`).toContain(`## ${section}`);
      }
      if (node.kind === 'case')
        for (const stage of ['数据', '训练', '评测', '应用', '错例分析', '数据改进'])
          expect(body, `${node.id}/${stage}`).toMatch(new RegExp(`^## ${stage}\\s*$`, 'm'));
    }
  });
});
