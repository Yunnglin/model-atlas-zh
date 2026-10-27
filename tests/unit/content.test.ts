import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
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
