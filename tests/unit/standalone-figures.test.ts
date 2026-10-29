import { describe, expect, it } from 'vitest';
import { insertArticleFigures } from '../../src/build/insert-article-figures';
import type { ModelFigure } from '../../src/core/schemas/knowledge';

const figure: ModelFigure = {
  id: 'example',
  title: '结构图',
  model: 'example',
  version: 'v1',
  basis: 'teaching',
  source: 'https://example.com/paper',
  checked: '2026-10-29',
  caption: '图示说明',
  alt: '结构与数据流',
  asset: {
    src: '/figures/example.svg',
    width: 100,
    height: 50,
    license: 'CC BY 4.0',
    attribution: '贡献者',
  },
};

describe('standalone article figures', () => {
  it('inserts each figure immediately after its chapter heading using the configured base', () => {
    const html =
      '<div class="sl-heading-wrapper level-h2"><h2 id="structure">结构与数据流</h2><a href="#structure">#</a></div><p>正文</p><h2>训练</h2>';
    const result = insertArticleFigures(
      html,
      [{ heading: '结构与数据流', figure }],
      '/model-atlas-zh/',
    );
    expect(result.indexOf('</div><section')).toBeGreaterThan(-1);
    expect(result.indexOf('结构图与资料')).toBeLessThan(result.indexOf('<p>正文</p>'));
    expect(result).toContain('src="/model-atlas-zh/figures/example.svg"');
    expect(result).toContain('href="/model-atlas-zh/figures/example.svg"');
    expect(result).toContain('aria-label="查看原图：结构图"');
    expect(result).toContain('alt="结构与数据流"');
    expect(result).toContain('https://example.com/paper');
    expect(result).toContain('href="https://creativecommons.org/licenses/by/4.0/"');
    expect(result.match(/<img\b/g)).toHaveLength(1);
  });

  it('leaves articles with no registered figures unchanged', () => {
    const html = '<h2>训练</h2><p>正文</p>';
    expect(insertArticleFigures(html, [], '/')).toBe(html);
  });

  it('fails explicitly rather than silently losing a figure when its chapter is absent', () => {
    expect(() => insertArticleFigures('<h2>训练</h2>', [{ heading: '结构', figure }], '/')).toThrow(
      'Figure placement missing chapter: 结构',
    );
  });
});
