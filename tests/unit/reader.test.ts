// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest';
import { loadReader, readReadingState, writeReadingState } from '../../src/platform/reader';

afterEach(() => {
  vi.unstubAllGlobals();
  sessionStorage.clear();
});

describe('reader and session adapters', () => {
  it('loads a compiled fragment, avoids repeating the question and keeps accessible heading levels', async () => {
    const fetcher = vi
      .fn()
      .mockResolvedValue(
        new Response(
          '<article data-atlas-reader><div class="sl-heading-wrapper"><h2>先看一个问题</h2></div><p>Question</p><div class="sl-heading-wrapper"><h2 id="plain">用大白话理解</h2></div><p>Explanation</p><a href="https://example.com/paper">Paper</a></article>',
        ),
      );
    vi.stubGlobal('fetch', fetcher);
    const html = await loadReader('/readers/fixture-one/', new AbortController().signal);
    expect(html).not.toContain('Question');
    expect(html).toContain('<h3 id="plain">');
    expect(html).toContain('Explanation');
    expect(html).toContain('target="_blank"');
    await loadReader('/readers/fixture-one/', new AbortController().signal);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });
  it('rejects an unavailable or malformed fragment rather than displaying an unrelated page', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('Not found', { status: 404 })));
    await expect(
      loadReader('/readers/fixture-missing/', new AbortController().signal),
    ).rejects.toThrow('unavailable');
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('<h1>Wrong page</h1>')));
    await expect(
      loadReader('/readers/fixture-wrong/', new AbortController().signal),
    ).rejects.toThrow('fragment missing');
  });
  it('stores reading position, expanded formulas without conflating them with learning progress', () => {
    writeReadingState('whisper', { top: 420, expanded: [0, 2] });
    expect(readReadingState('whisper')).toEqual({ top: 420, expanded: [0, 2] });
  });
  it('ignores corrupt cached positions', () => {
    sessionStorage.setItem('atlas:reading:whisper', '{"top":-10,"expanded":[]}');
    expect(readReadingState('whisper')).toEqual({ top: 0, expanded: [] });
  });
  it('keeps reading available when browser storage is blocked', () => {
    vi.stubGlobal('sessionStorage', {
      getItem: () => {
        throw new Error('blocked');
      },
      setItem: () => {
        throw new Error('blocked');
      },
      clear: () => {},
    });
    expect(readReadingState('whisper')).toEqual({ top: 0, expanded: [] });
    expect(() => writeReadingState('whisper', { top: 1, expanded: [] })).not.toThrow();
  });
});
