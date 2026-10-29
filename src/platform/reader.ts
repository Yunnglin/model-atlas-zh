import { z } from 'zod';

const readingStateSchema = z.object({
  top: z.number().min(0),
  expanded: z.array(z.number().int().min(0)),
});
export type ReadingState = z.infer<typeof readingStateSchema>;
const articles = new Map<string, string>();

/** Only HTML compiled from this repository's Markdown is loaded into the reader. */
export async function loadReader(url: string, signal: AbortSignal): Promise<string> {
  const cached = articles.get(url);
  if (cached !== undefined) return cached;
  // A slow connection gets time to finish; navigation still cancels the request.
  const controller = new AbortController();
  const cancel = () => controller.abort();
  if (signal.aborted) cancel();
  else signal.addEventListener('abort', cancel, { once: true });
  const timer = setTimeout(cancel, 30_000);
  let content: string;
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error('Reader unavailable');
    content = await response.text();
  } finally {
    clearTimeout(timer);
    signal.removeEventListener('abort', cancel);
  }
  const document = new DOMParser().parseFromString(content, 'text/html');
  const article = document.querySelector('[data-atlas-reader]');
  if (!article) throw new Error('Reader fragment missing');
  // The question is already shown in the reader's title block.
  const first = article.querySelector('h2');
  if (first?.textContent?.trim() === '先看一个问题') {
    const block = first.parentElement?.classList.contains('sl-heading-wrapper')
      ? first.parentElement
      : first;
    let next = block.nextElementSibling;
    while (next && next.tagName !== 'H2' && !next.querySelector('h2')) {
      const following = next.nextElementSibling;
      next.remove();
      next = following;
    }
    block.remove();
  }
  article.querySelectorAll('h2,h3,h4,h5').forEach((heading) => {
    const lower = document.createElement(`h${Number(heading.tagName[1]) + 1}`);
    lower.innerHTML = heading.innerHTML;
    lower.id = heading.id;
    heading.replaceWith(lower);
  });
  article.querySelectorAll('script').forEach((script) => script.remove());
  article.querySelectorAll('table').forEach((table) => {
    table.tabIndex = 0;
    table.setAttribute('aria-label', '知识对照表，可横向滚动');
  });
  article.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') ?? '';
    if (/^https?:\/\//.test(href)) {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noreferrer');
    }
  });
  const html = article.innerHTML;
  articles.set(url, html);
  return html;
}

export function readReadingState(id: string): ReadingState {
  try {
    return readingStateSchema.parse(
      JSON.parse(sessionStorage.getItem(`atlas:reading:${id}`) ?? 'null'),
    );
  } catch {
    return { top: 0, expanded: [] };
  }
}

export function writeReadingState(id: string, state: ReadingState): void {
  try {
    sessionStorage.setItem(`atlas:reading:${id}`, JSON.stringify(state));
  } catch {
    /* Reading works without browser storage. */
  }
}
