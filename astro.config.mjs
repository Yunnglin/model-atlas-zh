import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkBaseLinks from './src/build/remark-base-links';

export default defineConfig({
  site: 'https://Yunnglin.github.io',
  base: process.env.ATLAS_BASE ?? '/',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  integrations: [
    react(),
    starlight({
      title: '模型知识地图',
      disable404Route: true,
      defaultLocale: 'root',
      locales: { root: { label: '简体中文', lang: 'zh-CN' } },
      customCss: ['./src/styles/docs.css', 'katex/dist/katex.min.css'],
      components: {
        PageTitle: './src/components/ArticleTitle.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
        Search: './src/components/Search.astro',
      },
      sidebar: [
        { label: '返回知识地图', link: '/' },
        { label: '先理解这几个概念', items: [{ autogenerate: { directory: 'foundations' } }] },
      ],
    }),
  ],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath, [remarkBaseLinks, { base: process.env.ATLAS_BASE ?? '/' }]],
      rehypePlugins: [rehypeKatex],
    }),
  },
});
