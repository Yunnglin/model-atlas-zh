import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('model content and navigation are available without JavaScript', async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(new URL('omni/qwen38-flash-next-model/', baseURL).href);
  await expect(page.getByRole('heading', { name: 'Qwen3.8-Flash-Next', level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  await expect(page.getByRole('link', { name: '← 返回知识地图' })).toHaveAttribute('href', /\/$/);
  await expect(page.locator('a[href^="#"]').filter({ hasText: '模型卡' }).first()).toBeAttached();
  await expect(page.getByText('正在打开模型学习页…')).toHaveCount(0);
  await context.close();
});

test('timeline opens static model and related knowledge with no reader fetch', async ({ page }) => {
  const readerRequests: string[] = [];
  page.on('request', (request) => {
    if (request.url().includes('/readers/')) readerRequests.push(request.url());
  });
  await page.goto('./');
  await expect(page.getByTestId('map-canvas')).toHaveAttribute('aria-busy', 'false');
  await page
    .getByTestId('map-canvas')
    .getByRole('button', { name: 'Whisper', exact: true })
    .click();
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  await expect(page).toHaveURL(/\/audio\/whisper\/$/);
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  await expect(page.locator('.atlas-document-figures img').first()).toBeVisible();
  const related = page.getByRole('region', { name: '关联知识' });
  await expect(related).toBeVisible();
  await expect(related.getByRole('link').first()).toHaveAttribute('href', /^\//);
  expect(readerRequests).toEqual([]);
  await page.getByRole('link', { name: '← 返回知识地图' }).click();
  await expect(page.getByTestId('map-canvas')).toBeVisible();
});

test('returning from a model restores the filtered map', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByTestId('map-canvas')).toHaveAttribute('aria-busy', 'false');
  await page.getByRole('combobox', { name: '系列' }).selectOption('Qwen');
  await page.getByTestId('map-canvas').getByRole('button', { name: 'Qwen3', exact: true }).click();
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  await expect(page).toHaveURL(/\/nlp\/qwen3\/$/);
  await page.getByRole('link', { name: '← 返回知识地图' }).click();
  await expect(page.getByRole('combobox', { name: '系列' })).toHaveValue('Qwen');
});

test('old model links reach the canonical static page', async ({ page }) => {
  await page.route('**/data/atlas.json', (route) => route.abort());
  await page.goto('./?model=qwen3');
  await expect(page).toHaveURL(/\/nlp\/qwen3\/$/);
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  await page.goto('./?node=whisper&reader=closed');
  await expect(page).toHaveURL(/\/audio\/whisper\/$/);
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
});

test('direct model page does not fetch the atlas or an article fragment', async ({ page }) => {
  const requests: string[] = [];
  page.on('request', (request) => requests.push(new URL(request.url()).pathname));
  await page.goto('./nlp/qwen3/', { waitUntil: 'load' });
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  expect(
    requests.filter((url) => url.endsWith('/data/atlas.json') || url.includes('/readers/')),
  ).toEqual([]);
});

test('model links allow reading related concepts and returning to the article', async ({
  page,
}) => {
  await page.goto('./audio/whisper/');
  await page.getByRole('link', { name: 'SFT', exact: true }).first().click();
  await expect(page.getByRole('heading', { name: 'SFT · 示范学习', level: 1 })).toBeVisible();
  await page.goBack();
  await expect(page.getByRole('heading', { name: 'Whisper', level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { name: '数据与训练', level: 2 })).toBeVisible();
});

test('static model content and figures fit narrow screens', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./audio/whisper/');
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  const figure = page.getByTestId('architecture-figure').first();
  await expect(figure.getByRole('img')).toBeVisible();
  await expect(figure.getByRole('link', { name: /^查看原图：/ })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('the map concept reader can retry a failed request', async ({ page }) => {
  let count = 0;
  await page.route('**/readers/next-token/**', (route) =>
    ++count === 1 ? route.fulfill({ status: 503, body: '' }) : route.continue(),
  );
  await page.goto('./?concept=next-token');
  const reader = page.getByTestId('knowledge-reader');
  await expect(reader.getByRole('alert')).toBeVisible();
  await reader.getByRole('button', { name: '重新加载正文' }).click();
  await expect(reader.getByText(/假设按字切分/)).toBeVisible();
});

test('model pages remain readable when browser storage is unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    for (const key of ['localStorage', 'sessionStorage'])
      Object.defineProperty(window, key, {
        get: () => {
          throw new Error('blocked');
        },
      });
  });
  await page.goto('./audio/whisper/');
  await expect(page.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图' }).click();
  await expect(page.getByTestId('map-canvas')).toBeVisible();
});

test('static model page passes accessibility checks', async ({ page }) => {
  await page.goto('./audio/whisper/');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test('Qwen model chapters retain their sourced diagrams', async ({ page }) => {
  for (const [path, count] of [
    ['nlp/qwen3/', 1],
    ['omni/qwen-vl/', 1],
    ['audio/qwen-asr/', 2],
    ['audio/qwen-tts/', 2],
    ['omni/qwen-omni/', 1],
    ['omni/qwen3-omni/', 2],
  ] as const) {
    await page.goto(`./${path}`);
    const figures = page.getByTestId('architecture-figure');
    await expect(figures).toHaveCount(count);
    for (const figure of await figures.all()) {
      await figure.scrollIntoViewIfNeeded();
      await expect
        .poll(() => figure.locator('img').evaluate((img: HTMLImageElement) => img.naturalWidth))
        .toBeGreaterThan(0);
      await expect(figure.getByRole('link', { name: '图示依据' })).toHaveAttribute(
        'href',
        /^https:\/\/arxiv.org\//,
      );
      await expect(figure).toContainText('CC BY 4.0');
    }
  }
});

test('reasoning and speech models link to complete training and practice material', async ({
  page,
}) => {
  await page.goto('./nlp/deepseek-r1/');
  await expect(page.getByText(/R1-Zero 研究不先做 SFT/)).toBeVisible();
  await page.getByRole('link', { name: 'RLVR', exact: true }).first().click();
  await expect(page.getByText(/它描述奖励如何获得/).first()).toBeVisible();
  await page.goBack();
  await expect(page.getByRole('heading', { name: 'DeepSeek-R1', level: 1 })).toBeVisible();
  await page.goto('./cv/sam/');
  const figure = page.getByTestId('architecture-figure');
  await figure.scrollIntoViewIfNeeded();
  await expect(figure.getByRole('img', { name: /SAM 官方示意图/ })).toHaveJSProperty(
    'naturalWidth',
    2412,
  );
  await expect(figure).toContainText('Apache-2.0');
  await page.goto('./audio/f5-tts/');
  await page.getByRole('link', { name: '扩散与流匹配', exact: true }).first().click();
  await page.getByText('想深入：直线路径的流匹配例子').click();
  await expect(
    page
      .locator('details')
      .filter({ hasText: '想深入：直线路径的流匹配例子' })
      .locator('.katex')
      .first(),
  ).toBeVisible();
});
