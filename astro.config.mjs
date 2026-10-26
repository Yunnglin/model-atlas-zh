import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

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
        Search: './src/components/Search.astro',
      },
      sidebar: [
        { label: '返回知识地图', link: '/' },
        { label: '共同基础', items: [{ autogenerate: { directory: 'foundations' } }] },
        { label: 'NLP · 自然语言', items: [{ autogenerate: { directory: 'nlp' } }] },
        { label: 'CV · 视觉', items: [{ autogenerate: { directory: 'cv' } }] },
        { label: 'Audio · 语音', items: [{ autogenerate: { directory: 'audio' } }] },
        { label: 'Omni · 多模态', items: [{ autogenerate: { directory: 'omni' } }] },
        { label: '数据与训练', items: [{ autogenerate: { directory: 'training' } }] },
        { label: '评测与诊断', items: [{ autogenerate: { directory: 'evaluation' } }] },
        { label: '实践闭环', items: [{ autogenerate: { directory: 'cases' } }] },
      ],
    }),
  ],
  markdown: {
    processor: unified({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
  },
});
