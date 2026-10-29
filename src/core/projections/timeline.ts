import type { KnowledgeBase, TimelineModel } from '../schemas/knowledge';

export type TimelineFilters = {
  architecture: TimelineModel['architecture'] | 'all';
  modalities: TimelineModel['modalities'];
  family: string;
};
export const emptyTimelineFilters: TimelineFilters = {
  architecture: 'all',
  modalities: [],
  family: 'all',
};
const organizationOrder = [
  'Google',
  'OpenAI',
  'Meta',
  '阿里巴巴',
  'DeepSeek',
  'Moonshot AI',
  '智谱 / 清华',
  'MiniMax',
  'Microsoft',
  'Anthropic',
];
export function timelineOrganizations(models: TimelineModel[]): string[] {
  const rank = (name: string) => {
    const index = organizationOrder.indexOf(name);
    return index < 0 ? organizationOrder.length : index;
  };
  return [...new Set(models.map((model) => model.organization))].sort(
    (a, b) => rank(a) - rank(b) || a.localeCompare(b),
  );
}

/** A family label is editorial membership; a relation always keeps its own evidence. */
export function filterTimeline(models: TimelineModel[], filters: TimelineFilters): TimelineModel[] {
  return models
    .filter(
      (model) =>
        (filters.architecture === 'all' || model.architecture === filters.architecture) &&
        filters.modalities.every((modality) => model.modalities.includes(modality)) &&
        (filters.family === 'all' || model.family === filters.family),
    )
    .toSorted(
      (a, b) =>
        (a.year ?? 9999) - (b.year ?? 9999) ||
        (a.month ?? 13) - (b.month ?? 13) ||
        a.title.localeCompare(b.title),
    );
}

/** Only map a relationship when both endpoint articles have unambiguous version entries. */
export function timelineRelations(data: KnowledgeBase, models: TimelineModel[]) {
  const byArticle = new Map<string, TimelineModel[]>();
  for (const model of data.timeline)
    byArticle.set(model.article, [...(byArticle.get(model.article) ?? []), model]);
  const visible = new Set(models.map((model) => model.id));
  const documented = data.relations.flatMap((relation) => {
    if (!['uses', 'extends', 'compared-with'].includes(relation.kind)) return [];
    const from = byArticle.get(relation.from),
      to = byArticle.get(relation.to);
    if (
      from?.length !== 1 ||
      to?.length !== 1 ||
      !visible.has(from[0]!.id) ||
      !visible.has(to[0]!.id)
    )
      return [];
    return [{ id: relation.id, from: from[0]!.id, to: to[0]!.id, relation }];
  });
  const series = models.flatMap((model) => {
    const previous = models.find((item) => item.id === model.seriesPrevious);
    if (!previous) return [];
    const id = `series-${previous.id}-${model.id}`;
    return [
      {
        id,
        from: previous.id,
        to: model.id,
        relation: {
          id,
          from: previous.article,
          to: model.article,
          kind: 'compared-with' as const,
          caption: '同系列先后',
          explanation: `${previous.title} 与 ${model.title} 是同系列的先后版本；这条线只表示系列顺序，不代表权重继承。`,
          sources: [
            ...new Set([
              previous.dateSource ?? previous.sources[0]!,
              model.dateSource ?? model.sources[0]!,
            ]),
          ],
        },
      },
    ];
  });
  return [...documented, ...series];
}
