import { knowledgeBaseSchema, stageNames, type KnowledgeBase } from '../schemas/knowledge';

export function validateKnowledge(input: unknown): KnowledgeBase {
  const data = knowledgeBaseSchema.parse(input);
  const errors: string[] = [];
  const sets = {
    nodes: new Set<string>(),
    sources: new Set<string>(),
    relations: new Set<string>(),
    questions: new Set<string>(),
    paths: new Set<string>(),
    figures: new Set<string>(),
    guides: new Set<string>(),
    timeline: new Set<string>(),
  };
  for (const key of Object.keys(sets) as (keyof typeof sets)[]) {
    for (const item of data[key]) {
      if (sets[key].has(item.id)) errors.push(`${key}: duplicate ID ${item.id}`);
      sets[key].add(item.id);
    }
  }
  function references(ids: string[], set: Set<string>, context: string): void {
    for (const id of ids) if (!set.has(id)) errors.push(`${context}: missing reference ${id}`);
  }
  for (const node of data.nodes) {
    references(node.sources, sets.sources, node.id);
    if (node.kind === 'case') {
      const stages = node.caseStages ?? [];
      if (stages.map((item) => item.stage).join('|') !== stageNames.join('|')) {
        errors.push(`${node.id}: case must contain all six ordered stages`);
      }
      for (const stage of stages) references(stage.nodes, sets.nodes, `${node.id}/${stage.stage}`);
    } else if (node.caseStages) errors.push(`${node.id}: only cases may define case stages`);
  }
  for (const model of data.timeline) {
    references([model.article], sets.nodes, model.id);
    references(model.sources, sets.sources, model.id);
    if (model.dateSource) references([model.dateSource], sets.sources, model.id);
    if (model.month && (!model.year || !model.dateBasis || !model.dateSource))
      errors.push(`${model.id}: month requires year, date basis and source`);
    if (!model.month && (model.dateBasis || model.dateSource))
      errors.push(`${model.id}: date basis and source require a month`);
    const article = data.nodes.find((node) => node.id === model.article);
    if (article && article.kind !== 'model' && article.id !== 'transformer')
      errors.push(`${model.id}: timeline article must be a model`);
    if (new Set(model.modalities).size !== model.modalities.length)
      errors.push(`${model.id}: duplicate modality`);
    if (model.seriesPrevious) {
      references([model.seriesPrevious], sets.timeline, model.id);
      const previous = data.timeline.find((item) => item.id === model.seriesPrevious);
      if (previous && (!model.family || model.family !== previous.family))
        errors.push(`${model.id}: previous entry must share its family`);
      if (previous && (previous.year ?? 9999) > (model.year ?? 9999))
        errors.push(`${model.id}: previous entry is later than this model`);
      if (
        previous?.year === model.year &&
        previous?.month &&
        model.month &&
        previous.month > model.month
      )
        errors.push(`${model.id}: previous entry is later than this model`);
    }
  }
  for (const model of data.timeline) {
    const seen = new Set<string>();
    let current: typeof model | undefined = model;
    while (current) {
      if (seen.has(current.id)) {
        errors.push(`${model.id}: cycle in series order`);
        break;
      }
      seen.add(current.id);
      current = data.timeline.find((item) => item.id === current?.seriesPrevious);
    }
  }
  for (const relation of data.relations) {
    references([relation.from, relation.to], sets.nodes, relation.id);
    references(relation.sources, sets.sources, relation.id);
    if (relation.from === relation.to) errors.push(`${relation.id}: self relation`);
  }
  const visited = new Set<string>();
  const active = new Set<string>();
  function visit(id: string): void {
    if (active.has(id)) {
      errors.push(`prerequisite cycle at ${id}`);
      return;
    }
    if (visited.has(id)) return;
    active.add(id);
    for (const r of data.relations) if (r.kind === 'prerequisite' && r.from === id) visit(r.to);
    active.delete(id);
    visited.add(id);
  }
  for (const id of sets.nodes) visit(id);
  for (const item of data.questions) {
    references(item.nodes, sets.nodes, item.id);
    references(item.sources, sets.sources, item.id);
  }
  for (const item of data.paths) references(item.nodes, sets.nodes, item.id);
  for (const figure of data.figures) {
    references([figure.model], sets.nodes, figure.id);
    if (figure.interactive?.embedUrl && figure.interactive.embedding !== 'verified')
      errors.push(`${figure.id}: unverified embed URL`);
    if (figure.asset && (!figure.asset.src.startsWith('/') || figure.asset.src.includes('..')))
      errors.push(`${figure.id}: asset must use a local public path`);
  }
  for (const guide of data.guides) {
    references([guide.model], sets.nodes, guide.id);
    const node = data.nodes.find((item) => item.id === guide.model);
    if (node && node.kind !== 'model' && node.id !== 'transformer')
      errors.push(`${guide.id}: guide must reference a model`);
    for (const placement of guide.figures) {
      references([placement.figure], sets.figures, guide.id);
      if (node && !node.chapters.some((chapter) => chapter.title === placement.heading))
        errors.push(`${guide.id}: missing chapter ${placement.heading}`);
      if (data.figures.find((item) => item.id === placement.figure)?.model !== guide.model)
        errors.push(`${guide.id}: figure/model mismatch`);
    }
  }
  if (errors.length) throw new Error(`Invalid knowledge base:\n${errors.join('\n')}`);
  return data;
}
