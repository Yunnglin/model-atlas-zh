import { z } from 'zod';

export const modalitySchema = z.enum(['shared', 'nlp', 'cv', 'audio', 'omni']);
export const facetSchema = z.enum([
  'overview',
  'architecture',
  'training',
  'evaluation',
  'application',
]);
export const nodeKindSchema = z.enum(['architecture', 'model', 'method', 'metric', 'case']);
export const relationKindSchema = z.enum([
  'uses',
  'extends',
  'prerequisite',
  'evaluated-by',
  'applied-to',
  'compared-with',
]);
const idSchema = z.string().regex(/^[a-z][a-z0-9-]*$/);
const nonempty = z.string().trim().min(1);

export const stageNames = ['数据', '训练', '评测', '应用', '错例分析', '数据改进'] as const;
export const caseStageSchema = z.object({
  stage: z.enum(stageNames),
  description: nonempty,
  artifact: nonempty,
  nodes: z.array(idSchema).min(1),
});
export const nodeMetadataSchema = z.object({
  id: idSchema,
  kind: nodeKindSchema,
  modality: modalitySchema,
  aliases: z.array(nonempty).default([]),
  summary: nonempty,
  purpose: nonempty.max(28),
  question: nonempty,
  year: z.number().int().min(1900).max(2100).optional(),
  facets: z.array(facetSchema).min(1),
  sources: z.array(idSchema).min(1),
  featured: z.boolean().default(false),
  caseStages: z.array(caseStageSchema).optional(),
});
export const knowledgeNodeSchema = nodeMetadataSchema.extend({
  title: nonempty,
  href: nonempty,
  readerHref: nonempty,
});
export const sourceSchema = z.object({
  id: idSchema,
  title: nonempty,
  url: z.url(),
  type: z.enum(['paper', 'official-docs', 'official-code']),
  checked: z.iso.date(),
  note: nonempty.optional(),
});
export const relationSchema = z.object({
  id: idSchema,
  from: idSchema,
  to: idSchema,
  kind: relationKindSchema,
  explanation: nonempty,
  caption: nonempty.max(24).optional(),
  sources: z.array(idSchema).min(1),
});
export const questionSchema = z.object({
  id: idSchema,
  title: nonempty,
  nodes: z.array(idSchema).min(1),
  answer: z.array(nonempty).min(1),
  followup: nonempty,
  sources: z.array(idSchema).min(1),
});
export const learningPathSchema = z.object({
  id: idSchema,
  title: nonempty,
  summary: nonempty,
  nodes: z.array(idSchema).min(1),
});
/** Navigation occurrences reference canonical knowledge; parentage is editorial, not lineage. */
export const navigationEntrySchema = z
  .object({
    id: idSchema,
    order: z.number().int().min(0),
    parent: idSchema.optional(),
    knowledge: idSchema.optional(),
    title: nonempty.max(24).optional(),
    description: nonempty.max(42).optional(),
  })
  .refine(
    (entry) => Boolean(entry.knowledge) !== Boolean(entry.title),
    'Provide a knowledge reference or a group title',
  );
export type NavigationEntry = z.infer<typeof navigationEntrySchema>;

export const knowledgeBaseSchema = z.object({
  version: z.literal(2),
  navigation: z.array(navigationEntrySchema).min(1),
  nodes: z.array(knowledgeNodeSchema),
  relations: z.array(relationSchema),
  sources: z.array(sourceSchema),
  questions: z.array(questionSchema),
  paths: z.array(learningPathSchema),
});

export type Modality = z.infer<typeof modalitySchema>;
export type Facet = z.infer<typeof facetSchema>;
export type KnowledgeNode = z.infer<typeof knowledgeNodeSchema>;
export type KnowledgeBase = z.infer<typeof knowledgeBaseSchema>;
export type Relation = z.infer<typeof relationSchema>;
export type Question = z.infer<typeof questionSchema>;

export const modalityLabels: Record<Modality, string> = {
  shared: '共同基础',
  nlp: 'NLP · 自然语言',
  cv: 'CV · 视觉',
  audio: 'Audio · 语音与音频',
  omni: 'Omni · 多模态',
};
export const facetLabels: Record<Facet, string> = {
  overview: '看全貌',
  architecture: '模型结构',
  training: '数据与训练',
  evaluation: '评测与诊断',
  application: '应用与闭环',
};
export const relationLabels: Record<Relation['kind'], string> = {
  uses: '采用',
  extends: '改进自',
  prerequisite: '先理解',
  'evaluated-by': '评测',
  'applied-to': '用于',
  'compared-with': '对比',
};
