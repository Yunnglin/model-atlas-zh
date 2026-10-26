import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { file } from 'astro/loaders';
import { parse } from 'yaml';
import { z } from 'zod';
import {
  nodeMetadataSchema,
  figureSchema,
  modelGuideSchema,
  relationSchema,
  sourceSchema,
  questionSchema,
  learningPathSchema,
} from './core/schemas/knowledge';

export const collections = {
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: z.object({ atlas: nodeMetadataSchema }) }),
  }),
  figures: defineCollection({
    loader: file('src/content/data/figures.yaml', { parser: parse }),
    schema: figureSchema,
  }),
  guides: defineCollection({
    loader: file('src/content/data/model-guides.yaml', { parser: parse }),
    schema: modelGuideSchema,
  }),
  sources: defineCollection({
    loader: file('src/content/data/sources.yaml', { parser: parse }),
    schema: sourceSchema,
  }),
  relations: defineCollection({
    loader: file('src/content/data/relations.yaml', { parser: parse }),
    schema: relationSchema,
  }),
  questions: defineCollection({
    loader: file('src/content/data/questions.yaml', { parser: parse }),
    schema: questionSchema,
  }),
  paths: defineCollection({
    loader: file('src/content/data/learning-paths.yaml', { parser: parse }),
    schema: learningPathSchema,
  }),
};
