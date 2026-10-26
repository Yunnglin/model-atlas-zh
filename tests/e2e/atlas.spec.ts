import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const reader = (page: import('@playwright/test').Page) => page.getByTestId('knowledge-reader');
const graph = (page: import('@playwright/test').Page) => page.getByTestId('map-canvas');
const node = (page: import('@playwright/test').Page, title: string) =>
  graph(page).getByRole('button', { name: title, exact: true });

test('overview offers three structure routes without unrelated tools or a preselected reader', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await expect(node(page, 'Transformer')).toBeVisible();
  await expect(
    graph(page).getByRole('button', { name: '编码器＋解码器 · 展开', exact: true }),
  ).toBeVisible();
  await expect(node(page, 'Whisper')).toHaveCount(0);
  await expect(reader(page)).toHaveCount(0);
  await expect(page.locator('footer')).toHaveCount(0);
  for (const label of [
    '学习路线',
    '面试自测',
    '分层技术树',
    '演进泳道',
    '关联探索',
    '按模态浏览',
    '已理解',
    '待复习',
  ])
    await expect(page.getByText(label, { exact: true })).toHaveCount(0);
  await expect(graph(page).locator('[data-nav-id]')).toHaveCount(4);
});

test('structure route → Whisper → one dimension → reading and prerequisite return keep context', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await graph(page).getByRole('button', { name: '编码器＋解码器 · 展开', exact: true }).click();
  await expect(node(page, 'Whisper')).toBeVisible();
  await graph(page).getByRole('button', { name: '展开 · 4 项：Whisper', exact: true }).click();
  await expect(graph(page).getByRole('button', { name: '训练 · 展开', exact: true })).toBeVisible();
  await expect(node(page, '下一 token 预测')).toHaveCount(0);
  await graph(page).getByRole('button', { name: '训练 · 展开', exact: true }).click();
  await expect(node(page, '下一 token 预测')).toBeVisible();
  await expect(node(page, 'WER / CER')).toHaveCount(0);
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const treeIds = await graph(page)
    .locator('[data-nav-id]')
    .evaluateAll((elements) => elements.map((element) => element.getAttribute('data-nav-id')));
  await node(page, 'Whisper').click();
  await expect(reader(page).getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  const body = page.getByTestId('reader-body');
  await expect(body.getByRole('heading', { name: '用大白话理解', exact: true })).toBeVisible();
  await body.evaluate((element) => {
    element.scrollTop = 80;
  });
  await expect.poll(() => body.evaluate((element) => element.scrollTop)).toBeGreaterThan(0);
  const position = await body.evaluate((element) => element.scrollTop);
  await body.getByRole('link', { name: '预测下一个文字片段', exact: true }).click();
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await expect(body.getByText(/假设按字切分/)).toBeVisible();
  await reader(page).getByRole('button', { name: '返回 Whisper', exact: true }).click();
  await expect.poll(() => body.evaluate((element) => element.scrollTop)).toBeCloseTo(position, 0);
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  expect(
    await graph(page)
      .locator('[data-nav-id]')
      .evaluateAll((elements) => elements.map((element) => element.getAttribute('data-nav-id'))),
  ).toEqual(treeIds);
  await expect(node(page, 'Whisper')).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('button', { name: '收起全部', exact: true }).click();
  await expect(page).not.toHaveURL(/node=|open=/);
  expect(errors).toEqual([]);
});

test('refresh, browser history, a closed reader and legacy links preserve coherent state', async ({
  page,
}) => {
  await page.goto('./?node=whisper&modality=omni&view=network&facet=training');
  await expect(reader(page).getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  await expect(page).toHaveURL(/\?node=whisper&open=route-both$/);
  await page
    .getByTestId('reader-body')
    .getByRole('link', { name: '预测下一个文字片段', exact: true })
    .click();
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(
    reader(page).getByRole('button', { name: '返回 Whisper', exact: true }),
  ).toBeVisible();
  await page.goBack();
  await expect(reader(page).getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await expect(page).toHaveURL(/reader=closed/);
  await page.reload();
  await expect(reader(page)).toHaveCount(0);
  await expect(node(page, 'Whisper')).toHaveAttribute('aria-pressed', 'true');
  await node(page, 'Whisper').focus();
  await node(page, 'Whisper').press('Enter');
  await expect(reader(page)).toBeVisible();
});

test('auxiliary search supports aliases and keyboard selection without extra browse modes', async ({
  page,
}) => {
  await page.goto('./');
  const search = page.getByRole('combobox', { name: '搜索知识点' });
  await search.fill('低秩');
  await expect(page.getByRole('option', { name: /LoRA/ })).toBeVisible();
  await search.press('Enter');
  await expect(reader(page).getByRole('heading', { name: 'LoRA', exact: true })).toBeVisible();
  await search.fill('Whisper');
  await search.press('Enter');
  await expect(reader(page).getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  await expect(page).toHaveURL(/\?node=whisper&open=route-both$/);
});

test('a delayed old reader cannot replace a newly selected knowledge point', async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  let complete!: () => void;
  const finished = new Promise<void>((resolve) => {
    complete = resolve;
  });
  await page.route('**/readers/whisper/**', async (route) => {
    const response = await route.fetch();
    await gate;
    await route.fulfill({ response }).catch(() => {}); // The previous request may already be aborted.
    complete();
  });
  await page.goto('./?node=whisper');
  await expect(reader(page).getByText('正在打开正文…')).toBeVisible();
  const search = page.getByRole('combobox', { name: '搜索知识点' });
  await search.fill('下一 token');
  await search.press('Enter');
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await expect(page.getByTestId('reader-body').getByText(/假设按字切分/)).toBeVisible();
  release();
  await finished;
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await expect(page.getByTestId('reader-body').getByText(/声音图/)).toHaveCount(0);
});

test('failed reader loads retry while leaving the map usable', async ({ page }) => {
  let count = 0;
  await page.route('**/readers/whisper/**', (route) =>
    ++count === 1 ? route.fulfill({ status: 503, body: 'unavailable' }) : route.continue(),
  );
  await page.goto('./?node=whisper');
  await expect(reader(page).getByRole('alert')).toBeVisible();
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await reader(page).getByRole('button', { name: '重新加载正文' }).click();
  await expect(
    page.getByTestId('reader-body').getByRole('heading', { name: '用大白话理解' }),
  ).toBeVisible();
});

test('reading and navigation work without browser storage', async ({ page }) => {
  await page.addInitScript(() => {
    for (const key of ['localStorage', 'sessionStorage'])
      Object.defineProperty(window, key, {
        get() {
          throw new Error('blocked');
        },
      });
  });
  await page.goto('./?node=whisper');
  await expect(
    page.getByTestId('reader-body').getByRole('heading', { name: '用大白话理解' }),
  ).toBeVisible();
  await page
    .getByTestId('reader-body')
    .getByRole('link', { name: '预测下一个文字片段', exact: true })
    .click();
  await reader(page).getByRole('button', { name: '返回 Whisper', exact: true }).click();
  await expect(reader(page).getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
});

test('failed map data loads can be retried', async ({ page }) => {
  let count = 0;
  await page.route('**/data/atlas.json', (route) =>
    ++count === 1 ? route.fulfill({ status: 503, body: '' }) : route.continue(),
  );
  await page.goto('./');
  await expect(page.getByRole('status')).toContainText('暂时没有加载成功');
  await page.getByRole('button', { name: '重新加载', exact: true }).click();
  await expect(node(page, 'Transformer')).toBeVisible();
});

test('keyboard reading and accessibility work in overview and focused contexts', async ({
  page,
}) => {
  await page.goto('./?open=whisper');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await node(page, 'Whisper').focus();
  await node(page, 'Whisper').press('Enter');
  await expect(reader(page)).toBeVisible();
  await expect(
    page.getByTestId('reader-body').getByRole('heading', { name: '用大白话理解' }),
  ).toBeVisible();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(reader(page)).toHaveCount(0);
});

test('all articles and reader fragments resolve; formulas, standalone return and search work', async ({
  page,
  request,
  baseURL,
}) => {
  const response = await request.get(`${baseURL}data/atlas.json`);
  const data = (await response.json()) as { nodes: { href: string; readerHref: string }[] };
  for (const item of data.nodes) {
    expect((await request.get(new URL(item.href, baseURL).href)).status()).toBe(200);
    const fragment = await request.get(new URL(item.readerHref, baseURL).href);
    expect(fragment.status()).toBe(200);
    expect(await fragment.text()).toContain('data-atlas-reader');
  }
  await page.goto('./?node=next-token');
  await page.getByTestId('reader-body').getByText('想深入：看公式与符号解释').click();
  await expect(page.getByTestId('reader-body').locator('.katex').first()).toBeVisible();
  await page.getByRole('link', { name: '在独立页面阅读' }).click();
  await expect(
    page.getByRole('heading', { name: '下一 token 预测', exact: true, level: 1 }),
  ).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图', exact: true }).click();
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await expect(
    page.getByTestId('reader-body').locator('[data-reader-content] details'),
  ).toHaveAttribute('open', '');
  await page.goto('./foundations/attention/');
  await page.emulateMedia({ colorScheme: 'dark' });
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole('button', { name: /搜索正文/ }).click();
  await page.getByRole('textbox').fill('ASR');
  await expect(page.getByRole('link', { name: /Whisper/ }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /readers\// })).toHaveCount(0);
});

test('accordion reflows cleanly, anchors the operated node, and restores a shared path', async ({
  page,
}) => {
  await page.goto('./?open=whisper');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const training = graph(page).getByRole('button', { name: '训练 · 展开', exact: true });
  const before = await training.boundingBox();
  await training.focus();
  await training.press('Enter');
  await expect(node(page, '下一 token 预测')).toBeVisible();
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const after = await graph(page)
    .getByRole('button', { name: '训练 · 收起', exact: true })
    .boundingBox();
  expect(Math.abs(before!.x - after!.x)).toBeLessThan(4);
  expect(Math.abs(before!.y - after!.y)).toBeLessThan(4);
  await graph(page).getByRole('button', { name: '评测 · 展开', exact: true }).click();
  await expect(node(page, 'WER / CER')).toBeVisible();
  await expect(node(page, '下一 token 预测')).toHaveCount(0);
  await expect(graph(page).getByRole('button', { name: '训练 · 展开', exact: true })).toBeVisible();
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const boxes = await graph(page)
    .locator('[data-nav-id]')
    .evaluateAll((elements) =>
      elements.map((element) => {
        const box = element.getBoundingClientRect();
        return {
          id: element.getAttribute('data-nav-id'),
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height,
        };
      }),
    );
  for (let i = 0; i < boxes.length; i++)
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i]!,
        b = boxes[j]!;
      expect(
        a.x + a.width <= b.x ||
          b.x + b.width <= a.x ||
          a.y + a.height <= b.y ||
          b.y + b.height <= a.y,
        `${a.id} overlaps ${b.id}`,
      ).toBe(true);
    }
  await page.reload();
  await expect(node(page, 'WER / CER')).toBeVisible();
  await expect(
    graph(page).getByRole('button', { name: '评测 · 收起', exact: true }),
  ).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('button', { name: '收起全部', exact: true }).click();
  await expect(graph(page).locator('[data-nav-id]')).toHaveCount(4);
});

test('cross-relations can be read with sources without adding anything to the tree', async ({
  page,
}) => {
  await page.goto('./?node=whisper&open=model-whisper');
  await expect(reader(page)).toBeVisible();
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const count = await graph(page).locator('[data-nav-id]').count();
  await reader(page).getByText('关联知识 · 5 项', { exact: true }).click();
  await expect(
    reader(page).getByRole('button', { name: 'wav2vec 2.0', exact: true }),
  ).toBeVisible();
  await reader(page).getByText('wav2vec 2.0 · 对比 · 当前知识点', { exact: true }).click();
  await expect(
    reader(page)
      .getByRole('link', { name: 'Robust Speech Recognition via Large-Scale Weak Supervision' })
      .first(),
  ).toBeVisible();
  await reader(page).getByRole('button', { name: 'wav2vec 2.0', exact: true }).click();
  await expect(
    reader(page).getByRole('heading', { name: 'wav2vec 2.0', exact: true }),
  ).toBeVisible();
  await expect(graph(page).locator('[data-nav-id]')).toHaveCount(count);
});

test('quick sibling switches finish on the latest requested branch without reviving old nodes', async ({
  page,
}) => {
  await page.goto('./?open=whisper');
  const map = graph(page);
  await expect(map).toHaveAttribute('aria-busy', 'false');
  await map.getByRole('button', { name: '训练 · 展开', exact: true }).click();
  await map.getByRole('button', { name: '评测 · 展开', exact: true }).click();
  await map.getByRole('button', { name: '应用 · 展开', exact: true }).click();
  await expect(map).toHaveAttribute('aria-busy', 'false');
  await expect(node(page, '语音助手：从错例回到数据')).toBeVisible();
  await expect(node(page, '下一 token 预测')).toHaveCount(0);
  await expect(node(page, 'WER / CER')).toHaveCount(0);
  await expect(map.locator('[data-nav-id]')).toHaveCount(11);
});

test('resizing to a phone keeps the current branch and its children in view', async ({ page }) => {
  await page.goto('./?open=whisper-training');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await page.setViewportSize({ width: 390, height: 844 });
  const training = graph(page).getByRole('button', { name: '训练 · 收起', exact: true });
  const next = node(page, '下一 token 预测');
  await expect.poll(async () => (await training.boundingBox())!.x).toBeGreaterThanOrEqual(0);
  await expect
    .poll(async () => {
      const box = (await next.boundingBox())!;
      return box.x + box.width;
    })
    .toBeLessThanOrEqual(390);
  await next.click();
  await expect(reader(page)).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区', exact: true }).click();
  await expect(training).toBeVisible();
});
