import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { format, resolveConfig } from 'prettier';

const root = resolve(fileURLToPath(new URL('../..', import.meta.url)));
const readYaml = (path) => parse(readFileSync(resolve(root, path), 'utf8'));
const models = readYaml('src/content/data/model-timeline.yaml');
const ledger = readYaml('docs/reviews/review-ledger.yaml');
const training = readYaml('docs/reviews/training-review-ledger.yaml');
const trainingDimensions = ['principle', 'practice', 'figures', 'community'];
const trainingLabels = ['原理与资料', '例子与评测', '配图', '社区'];
const dimensions = ['structure', 'training', 'evaluation', 'figures', 'community'];
const labels = ['结构', '训练', '评测', '配图', '社区'];
const statuses = ['untriaged', 'targeted', 'complete'];
const symbols = { untriaged: '待整理', targeted: '定向', complete: '完成' };
const errors = [];
const ids = new Set();
const modelById = new Map(models.map((model) => [model.id, model]));
if (ledger.version !== 1 || JSON.stringify(ledger.dimensions) !== JSON.stringify(dimensions)) {
  errors.push('台账版本或维度不符合约定');
}
for (const entry of ledger.entries) {
  if (ids.has(entry.id)) errors.push(`重复 ID：${entry.id}`);
  ids.add(entry.id);
  if (!modelById.has(entry.id)) errors.push(`台账中存在已移除的 ID：${entry.id}`);
  if (!Array.isArray(entry.evidence) || !entry.evidence.length)
    errors.push(`${entry.id} 缺少历史审阅记录`);
  for (const path of entry.evidence ?? []) {
    if (!path.startsWith('docs/reviews/') || !existsSync(resolve(root, path)))
      errors.push(`${entry.id} 的记录不存在：${path}`);
  }
  for (const dimension of dimensions) {
    const status = entry.review?.[dimension];
    if (!statuses.includes(status)) errors.push(`${entry.id} 的 ${dimension} 状态无效：${status}`);
    if (status === 'complete') {
      const proof = entry.completedEvidence?.[dimension];
      if (
        typeof proof !== 'string' ||
        !proof.startsWith('docs/reviews/') ||
        !existsSync(resolve(root, proof))
      ) {
        errors.push(`${entry.id} 的 ${dimension} 已完成，但缺少对应审阅证据文件`);
      }
    }
  }
}
for (const model of models) if (!ids.has(model.id)) errors.push(`新增模型没有台账：${model.id}`);
if (
  training.version !== 1 ||
  JSON.stringify(training.dimensions) !== JSON.stringify(trainingDimensions)
) {
  errors.push('训练技术台账版本或维度不符合约定');
}
const trainingArticles = new Set(
  readdirSync(resolve(root, 'src/content/docs/training'))
    .filter((name) => name.endsWith('.md'))
    .map((name) => `src/content/docs/training/${name}`),
);
const trainingIds = new Set();
for (const entry of training.entries) {
  if (trainingIds.has(entry.id)) errors.push(`重复训练技术 ID：${entry.id}`);
  trainingIds.add(entry.id);
  if (!trainingArticles.delete(entry.article)) {
    errors.push(`训练技术文章不存在或重复：${entry.article}`);
  } else {
    const frontmatter = readFileSync(resolve(root, entry.article), 'utf8').split('---')[1];
    if (parse(frontmatter)?.atlas?.id !== entry.id)
      errors.push(`训练技术 ID 与文章不一致：${entry.id}`);
  }
  for (const dimension of trainingDimensions) {
    const status = entry.review?.[dimension];
    if (!statuses.includes(status)) errors.push(`${entry.id} 的 ${dimension} 状态无效：${status}`);
    if (status === 'complete') {
      const proof = entry.completedEvidence?.[dimension];
      if (
        typeof proof !== 'string' ||
        !proof.startsWith('docs/reviews/') ||
        !existsSync(resolve(root, proof))
      ) {
        errors.push(`${entry.id} 的 ${dimension} 已完成，但缺少对应审阅证据文件`);
      }
    }
  }
}
for (const article of trainingArticles) errors.push(`新增训练技术没有台账：${article}`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}
const count = (dimension, status) =>
  ledger.entries.filter((entry) => entry.review[dimension] === status).length;
const completed = ledger.entries.filter((entry) =>
  dimensions.every((d) => entry.review[d] === 'complete'),
).length;
const anyTargeted = ledger.entries.filter((entry) =>
  dimensions.some((d) => entry.review[d] === 'targeted'),
).length;
const lines = [
  '# 内容审阅进度',
  '',
  '> 由 `pnpm review:progress --write` 根据台账生成，请不要直接编辑。更新方法和完成标准见 [审阅台账说明](review-tracking.md)。',
  '',
  `范围：时间线上的 ${models.length} 个模型／版本。${completed} 个已登记五项全部完成；${models.length - completed} 个尚未达到全部完成的登记标准。`,
  '',
  `证据记录：${ledger.entries.length} 个模型均关联审阅记录；当前 ${anyTargeted} 个模型至少有一个维度处于「定向核查」。各维度状态见下表。`,
  '',
  '| 维度 | 待整理 | 定向核查 | 完整审校 |',
  '| --- | ---: | ---: | ---: |',
  ...dimensions.map(
    (d, i) =>
      `| ${labels[i]} | ${count(d, 'untriaged')} | ${count(d, 'targeted')} | ${count(d, 'complete')} |`,
  ),
  '',
  '「待整理」需读原记录后确认；「定向」表示历史索引称有部分内容核查，仍须核实原记录；「完成」需要该维度完整审阅并留下逐项证据。',
  '',
  '| 模型 | 结构 | 训练 | 评测 | 配图 | 社区 | 历史记录 |',
  '| --- | --- | --- | --- | --- | --- | --- |',
];
for (const entry of ledger.entries) {
  const model = modelById.get(entry.id);
  const title = `${model.title} (${entry.id})`.replaceAll('|', '\\|');
  const evidence = entry.evidence
    .map(
      (path, index) =>
        `[${index + 1}](${relative(resolve(root, 'docs/reviews'), resolve(root, path))})`,
    )
    .join(' ');
  lines.push(
    `| ${title} | ${dimensions.map((d) => symbols[entry.review[d]]).join(' | ')} | ${evidence} |`,
  );
}
const trainingCompleted = training.entries.filter((entry) =>
  trainingDimensions.every((d) => entry.review[d] === 'complete'),
).length;
lines.push(
  '',
  '## 训练技术',
  '',
  `${training.entries.length} 篇文章中，${trainingCompleted} 篇已登记四项全部完成；${training.entries.length - trainingCompleted} 篇尚未达到全部完成的登记标准。`,
  '',
  '| 维度 | 待整理 | 定向核查 | 完整审校 |',
  '| --- | ---: | ---: | ---: |',
);
for (const [i, dimension] of trainingDimensions.entries()) {
  const number = (status) =>
    training.entries.filter((entry) => entry.review[dimension] === status).length;
  lines.push(
    `| ${trainingLabels[i]} | ${number('untriaged')} | ${number('targeted')} | ${number('complete')} |`,
  );
}
lines.push(
  '',
  '| 技术 | 原理与资料 | 例子与评测 | 配图 | 社区 |',
  '| --- | --- | --- | --- | --- |',
);
for (const entry of training.entries) {
  const article = relative(resolve(root, 'docs/reviews'), resolve(root, entry.article));
  const status = trainingDimensions.map((dimension) => {
    const label = symbols[entry.review[dimension]];
    const proof = entry.completedEvidence?.[dimension];
    if (entry.review[dimension] !== 'complete' || !proof) return label;
    const link = relative(resolve(root, 'docs/reviews'), resolve(root, proof));
    return `[${label}](${link})`;
  });
  lines.push(`| [${entry.title.replaceAll('|', '\\|')}](${article}) | ${status.join(' | ')} |`);
}
lines.push('');
const reportPath = resolve(root, 'docs/reviews/review-progress.md');
const output = await format(lines.join('\n'), {
  ...(await resolveConfig(reportPath)),
  filepath: reportPath,
});
if (process.argv.includes('--write')) {
  writeFileSync(reportPath, output);
  console.log('已更新 docs/reviews/review-progress.md');
} else if (process.argv.includes('--check')) {
  if (!existsSync(reportPath) || readFileSync(reportPath, 'utf8') !== output) {
    console.error('审阅进度表已过期，请运行 pnpm review:progress --write');
    process.exit(1);
  }
  console.log('审阅台账和进度表一致');
} else {
  console.log(output.slice(0, output.indexOf('| 模型 |')));
}
