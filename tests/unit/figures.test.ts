// @vitest-environment jsdom
import { createElement } from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { ArchitectureFigure } from '../../src/components/figures/ArchitectureFigure';
import { readKnowledgeFixture } from '../fixtures/knowledge';

afterEach(cleanup);
describe('reusable figure resource contracts', () => {
  it.each([
    ['CC BY 4.0', 'https://creativecommons.org/licenses/by/4.0/'],
    ['MIT', 'https://spdx.org/licenses/MIT.html'],
    ['Apache-2.0', 'https://www.apache.org/licenses/LICENSE-2.0'],
  ])('links the stated %s license in the interactive figure attribution', (license, url) => {
    const figure = structuredClone(readKnowledgeFixture().figures[0]!);
    if (!figure.asset) throw new Error('fixture needs an asset');
    figure.asset.license = license;
    render(createElement(ArchitectureFigure, { figure }));
    expect(screen.getByRole('link', { name: license }).getAttribute('href')).toBe(url);
  });
  it('supports an external-only resource without reporting a nonexistent image failure or loading third-party content', () => {
    const figure = structuredClone(readKnowledgeFixture().figures[0]!);
    delete figure.asset;
    const { container } = render(createElement(ArchitectureFigure, { figure }));
    expect(screen.queryByRole('status')).toBeNull();
    expect(container.querySelector('iframe')).toBeNull();
    expect(screen.getByRole('link', { name: '打开交互结构图' }).getAttribute('target')).toBe(
      '_blank',
    );
    expect(screen.queryByRole('button', { name: '加载交互图' })).toBeNull();
  });
  it('loads a declared verified embed only on demand and removes it when collapsed', () => {
    const figure = structuredClone(readKnowledgeFixture().figures[0]!);
    figure.interactive = {
      provider: 'hfviewer',
      url: 'https://example.com/viewer',
      embedding: 'verified',
      embedUrl: 'https://example.com/embed',
    };
    const { container } = render(createElement(ArchitectureFigure, { figure }));
    expect(container.querySelector('iframe')).toBeNull();
    fireEvent.click(screen.getByRole('button', { name: '加载交互图' }));
    expect(container.querySelector('iframe')?.getAttribute('src')).toBe(
      'https://example.com/embed',
    );
    expect(container.querySelector('iframe')?.getAttribute('sandbox')).not.toContain(
      'allow-top-navigation',
    );
    fireEvent.click(screen.getByRole('button', { name: '收起交互图' }));
    expect(container.querySelector('iframe')).toBeNull();
  });
});
