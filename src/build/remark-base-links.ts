import { existsSync, globSync } from 'node:fs';
import { resolve } from 'node:path';
import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

interface Options {
  base: string;
  targets?: ReadonlySet<string>;
  publicDir?: string;
}
/** Validate authored links before adding the GitHub Pages prefix. Index per transform for dev additions. */
export default function remarkBaseLinks({ base, targets, publicDir = resolve('public') }: Options) {
  const prefix = base.replace(/\/$/, '');
  return (tree: Root): void => {
    const pages =
      targets ??
      new Set([
        '/',
        ...globSync('**/*.{md,mdx}', { cwd: resolve('src/content/docs') }).map((file) =>
          `/${file.replace(/\.(md|mdx)$/, '').replace(/(^|\/)index$/, '')}/`.replace(/\/+/g, '/'),
        ),
      ]);
    visit(tree, ['link', 'image', 'definition'], (node) => {
      if (
        !('url' in node) ||
        typeof node.url !== 'string' ||
        !node.url.startsWith('/') ||
        node.url.startsWith('//')
      )
        return;
      const path = decodeURIComponent(node.url.split(/[?#]/)[0]!);
      const page = path.endsWith('/') ? path : `${path}/`;
      const asset = resolve(publicDir, `.${path}`);
      if (!pages.has(page) && (!asset.startsWith(`${publicDir}/`) || !existsSync(asset)))
        throw new Error(`Missing local content target: ${node.url}`);
      node.url = `${prefix}${node.url}`;
    });
  };
}
