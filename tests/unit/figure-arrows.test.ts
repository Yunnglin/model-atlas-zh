// @vitest-environment jsdom
import { readFileSync, readdirSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { readKnowledgeFixture } from '../fixtures/knowledge';

function checkArrowPaths(file: string) {
  const svg = new DOMParser().parseFromString(readFileSync(file, 'utf8'), 'image/svg+xml');
  expect(svg.querySelector('parsererror'), file).toBeNull();
  for (const path of svg.querySelectorAll('path')) {
    const marker = path.closest('[marker-end]');
    if (!marker || marker.getAttribute('marker-end') === 'none') continue;
    const moves = path.getAttribute('d')?.match(/[Mm]/g)?.length ?? 0;
    expect(moves, `${file}: separate arrow paths need separate end markers`).toBeLessThanOrEqual(1);
  }
}

describe('teaching figure arrows', () => {
  it('places an end marker on each independent model arrow path', () => {
    for (const figure of readKnowledgeFixture().figures) {
      if (figure.basis === 'teaching' && figure.asset?.src.endsWith('.svg')) {
        checkArrowPaths(`public${figure.asset.src}`);
      }
    }
  });

  it.each(['training', 'foundations', 'evaluation'])(
    'checks %s figures that are referenced directly in articles',
    (category) => {
      const directory = `public/figures/${category}`;
      const files = readdirSync(directory).filter((file) => file.endsWith('.svg'));
      expect(files.length).toBeGreaterThan(0);
      for (const file of files) checkArrowPaths(`${directory}/${file}`);
    },
  );
});
