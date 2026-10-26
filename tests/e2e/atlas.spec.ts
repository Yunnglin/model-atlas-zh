import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('each layout frames its intended context after switching', async ({ page }) => {
  await page.goto('./?node=transformer');
  const canvas = page.getByTestId('map-canvas');
  for (const view of ['分层技术树', '演进泳道', '关联探索']) {
    await page.getByRole('button', { name: view, exact: true }).click();
    await expect(canvas).toHaveAttribute('aria-busy', 'false');
    await expect
      .poll(() =>
        canvas.evaluate((element, currentView) => {
          const frame = element.getBoundingClientRect();
          const direct = new Set(['transformer', 'bert', 'gpt', 'vit', 'encoder-decoder']);
          const nodes = [...element.querySelectorAll('.react-flow__node-knowledge')].filter(
            (node) => currentView !== '分层技术树' || direct.has(node.getAttribute('data-id')!),
          );
          return (
            nodes.length >= 5 &&
            nodes.every((node) => {
              const box = node.getBoundingClientRect();
              return (
                box.left >= frame.left &&
                box.top >= frame.top &&
                box.right <= frame.right &&
                box.bottom <= frame.bottom
              );
            })
          );
        }, view),
      )
      .toBe(true);
  }
});

test('model → training → prerequisite → return → article → case → self-test', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('./?node=whisper&view=timeline&facet=training');
  const inspector = page.getByTestId('node-inspector');
  await expect(inspector.getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  await expect(page.getByTestId('map-canvas')).toHaveAttribute('aria-busy', 'false');
  await inspector.getByRole('button', { name: '编码器与解码器', exact: true }).click();
  await expect(
    inspector.getByRole('heading', { name: '编码器与解码器', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: '返回上一处知识', exact: true }).click();
  await expect(inspector.getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  await inspector.getByRole('link', { name: '读懂原理与例子' }).click();
  await expect(page.getByRole('heading', { name: 'Whisper', exact: true, level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '跟着例子走一遍' })).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图', exact: true }).click();
  await expect(page).toHaveURL(/node=whisper/);
  await expect(page.getByRole('button', { name: '数据与训练', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await expect(page.getByRole('button', { name: '演进泳道', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByRole('button', { name: '错例分析', exact: true }).click();
  await expect(
    inspector.getByRole('heading', { name: '语音助手：从错例回到数据', exact: true }),
  ).toBeVisible();
  await expect(inspector.getByText('实践闭环 · 教学方案')).toBeVisible();
  await expect(inspector.locator('ol > li')).toHaveCount(6);
  await page.getByRole('button', { name: '面试自测', exact: true }).click();
  const question = page
    .getByRole('article')
    .filter({ has: page.getByRole('heading', { name: 'CER 下降就说明语音产品变好了吗？' }) });
  await question.getByText('展开答案要点与追问').click();
  await expect(question.getByText(/检查噪声、口音、专名/)).toBeVisible();
  await question.getByRole('button', { name: '我能讲清了', exact: true }).click();
  await page.reload();
  await expect(question.getByRole('button', { name: '我能讲清了' })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  expect(errors).toEqual([]);
});

test('rapid view switches finish with the latest graph and selection', async ({ page }) => {
  await page.goto('./?node=whisper');
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'Whisper', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: '演进泳道', exact: true }).click();
  await page.getByRole('button', { name: '分层技术树', exact: true }).click();
  await page.getByRole('button', { name: '关联探索', exact: true }).click();
  await expect(page.getByTestId('map-canvas')).toHaveAttribute('aria-busy', 'false');
  await expect(page.locator('.react-flow__node[data-id="wer"]')).toHaveCount(1);
  await expect(page.locator('.react-flow__node[data-id="dit"]')).toHaveCount(0);
  await expect(page).toHaveURL(/view=network/);
  await page.reload();
  await expect(page.getByRole('button', { name: '关联探索', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByLabel('搜索知识节点').fill('低秩');
  await page.getByLabel('节点搜索结果').getByRole('button', { name: /LoRA/ }).click();
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'LoRA', exact: true }),
  ).toBeVisible();
});

test('learning routes share node progress and corrupt imports preserve it', async ({ page }) => {
  await page.goto('./?node=whisper');
  await page.getByRole('button', { name: '已理解', exact: true }).click();
  await page.getByRole('button', { name: '学习路线', exact: true }).click();
  await expect(page.getByRole('heading', { name: '训练与评测工程', exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: '语音与多模态算法', exact: true })).toBeVisible();
  await page.getByRole('button', { name: /Whisper 声音怎样/ }).click();
  await expect(page.getByRole('button', { name: '已理解', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  await page.getByRole('button', { name: '面试自测', exact: true }).click();
  await page.getByLabel('导入学习进度').setInputFiles({
    name: 'bad.json',
    mimeType: 'application/json',
    buffer: Buffer.from('{"version":99}'),
  });
  await expect(page.getByRole('status').filter({ hasText: '现有进度未改变' })).toBeVisible();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: '导出进度' }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('model-atlas-progress.json');
  await page.getByLabel('导入学习进度').setInputFiles({
    name: 'valid.json',
    mimeType: 'application/json',
    buffer: Buffer.from('{"version":1,"nodes":{"whisper":"review"},"answers":{}}'),
  });
  await expect(page.getByRole('status').filter({ hasText: '已导入学习进度' })).toBeVisible();
  await page.getByRole('button', { name: '知识地图', exact: true }).click();
  await expect(page.getByRole('button', { name: '待复习', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
});

test('reading and navigation work when browser storage is unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Storage.prototype.getItem = () => {
      throw new Error('storage disabled');
    };
    Storage.prototype.setItem = () => {
      throw new Error('storage disabled');
    };
  });
  await page.goto('./?node=whisper');
  await page.getByRole('button', { name: '已理解', exact: true }).click();
  await expect(page.getByText(/本次阅读和自测仍可继续/)).toBeVisible();
  await page.getByTestId('node-inspector').getByRole('link', { name: '读懂原理与例子' }).click();
  await expect(page.getByRole('heading', { name: 'Whisper', level: 1, exact: true })).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图', exact: true }).click();
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'Whisper', exact: true }),
  ).toBeVisible();
});

test('failed data loads can be retried', async ({ page }) => {
  await page.route('**/data/atlas.json', (route) =>
    route.fulfill({ status: 503, body: 'unavailable' }),
  );
  await page.goto('./');
  await expect(page.getByRole('button', { name: '重新加载', exact: true })).toBeVisible();
  await page.unroute('**/data/atlas.json');
  await page.getByRole('button', { name: '重新加载', exact: true }).click();
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'Transformer', exact: true }),
  ).toBeVisible();
});

test('node keyboard selection and accessibility checks', async ({ page }) => {
  await page.goto('./?node=whisper');
  await expect(page.getByTestId('map-canvas')).toHaveAttribute('aria-busy', 'false');
  const target = page.locator('.react-flow__node[data-id="bert"]');
  await target.focus();
  await target.press('Enter');
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'BERT', exact: true }),
  ).toBeVisible();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});

test('all generated article routes resolve and math is rendered', async ({
  page,
  request,
  baseURL,
}) => {
  const response = await request.get(`${baseURL}data/atlas.json`);
  const data = (await response.json()) as { nodes: { href: string }[] };
  for (const node of data.nodes) {
    const article = await request.get(new URL(node.href, baseURL).href);
    expect(article.status(), node.href).toBe(200);
  }
  await page.goto('./foundations/attention/');
  await page.getByText('想深入：看公式与符号解释').click();
  await expect(page.locator('.katex').first()).toBeVisible();
  await page.emulateMedia({ colorScheme: 'dark' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  const searchButton = page.getByRole('button', { name: /搜索/ }).first();
  await searchButton.click();
  await page.getByRole('textbox').fill('Whisper');
  await expect(page.getByRole('link', { name: /Whisper/ }).first()).toBeVisible();
  await page.getByRole('textbox').fill('ASR');
  await expect(page.getByRole('link', { name: /Whisper/ }).first()).toBeVisible();
});
