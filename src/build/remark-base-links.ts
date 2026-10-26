import { visit } from 'unist-util-visit';
import type { Root } from 'mdast';

/** Keep authored root-relative knowledge links valid on GitHub project Pages. */
export default function remarkBaseLinks({ base }: { base: string }) {
  const prefix = base.replace(/\/$/, '');
  return (tree: Root): void => {
    visit(tree, 'link', (node) => {
      if (node.url.startsWith('/') && !node.url.startsWith('//')) {
        node.url = `${prefix}${node.url}`;
      }
    });
  };
}
