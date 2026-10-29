import { parseFragment, serialize, type DefaultTreeAdapterMap } from 'parse5';
import type { ModelFigure } from '../core/schemas/knowledge';
import { figureLicenseUrl } from '../core/queries/figure-license';

type Element = DefaultTreeAdapterMap['element'];
type Parent = DefaultTreeAdapterMap['parentNode'];
type Node = DefaultTreeAdapterMap['node'];
type Placement = { heading: string; figure: ModelFigure };

const escapeHtml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

function figureHtml(figure: ModelFigure, base: string): string {
  const esc = escapeHtml;
  const assetUrl = figure.asset ? `${base}${figure.asset.src.replace(/^\//, '')}` : undefined;
  const image =
    figure.asset && assetUrl
      ? `<img src="${esc(assetUrl)}" alt="${esc(figure.alt)}" width="${figure.asset.width}" height="${figure.asset.height}" loading="lazy">`
      : '';
  const original = assetUrl
    ? `<a href="${esc(assetUrl)}" target="_blank" rel="noreferrer" aria-label="查看原图：${esc(figure.title)}">查看原图</a> · `
    : '';
  const licenseUrl = figure.asset && figureLicenseUrl(figure.asset.license);
  const license = figure.asset
    ? licenseUrl
      ? `<a href="${esc(licenseUrl)}" target="_blank" rel="noreferrer">${esc(figure.asset.license)}</a>`
      : esc(figure.asset.license)
    : '';
  const credit = figure.asset ? ` · ${license} · ${esc(figure.asset.attribution)}` : '';
  const interactive = figure.interactive
    ? ` · <a href="${esc(figure.interactive.url)}" target="_blank" rel="noreferrer">查看交互资源</a>`
    : '';
  return `<section aria-label="结构图与资料" class="atlas-document-figures"><figure><h3>${esc(figure.title)}</h3>${image}<figcaption><p>${esc(figure.caption)}</p><p>${original}<a href="${esc(figure.source)}" target="_blank" rel="noreferrer">图示依据</a>${credit}${interactive}</p></figcaption></figure></section>`;
}

function textContent(node: Node): string {
  if (node.nodeName === '#text' && 'value' in node) return node.value;
  return 'childNodes' in node ? node.childNodes.map(textContent).join('') : '';
}

/** Add the registered figures to their chapters on standalone pages only. */
export function insertArticleFigures(html: string, placements: Placement[], base: string): string {
  if (!placements.length) return html;
  const root = parseFragment(html);
  const pending = new Map<string, ModelFigure[]>();
  for (const { heading, figure } of placements)
    pending.set(heading, [...(pending.get(heading) ?? []), figure]);

  function walk(parent: Parent): void {
    for (let i = 0; i < parent.childNodes.length; i++) {
      const node = parent.childNodes[i]!;
      if (!('tagName' in node)) continue;
      const element = node as Element;
      const wrapper =
        element.tagName === 'div' &&
        element.attrs.some(
          (attr) => attr.name === 'class' && attr.value.split(/\s+/).includes('sl-heading-wrapper'),
        );
      const heading =
        element.tagName === 'h2'
          ? element
          : wrapper
            ? element.childNodes.find(
                (child): child is Element => 'tagName' in child && child.tagName === 'h2',
              )
            : undefined;
      if (heading) {
        const title = textContent(heading).trim();
        const figures = pending.get(title);
        if (figures) {
          const nodes = figures.flatMap(
            (figure) => parseFragment(figureHtml(figure, base)).childNodes,
          );
          for (const child of nodes) child.parentNode = parent;
          parent.childNodes.splice(i + 1, 0, ...nodes);
          i += nodes.length;
          pending.delete(title);
        }
      } else walk(element);
    }
  }
  walk(root);
  if (pending.size)
    throw new Error(`Figure placement missing chapter: ${[...pending.keys()].join(', ')}`);
  return serialize(root);
}
