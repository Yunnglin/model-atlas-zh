import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const reader = (page: Page) => page.getByTestId('knowledge-reader');
const model = (page: Page) => page.getByTestId('model-learning');
const graph = (page: Page) => page.getByTestId('map-canvas');
const modelButton = (page: Page, title: string) =>
  graph(page).getByRole('button', { name: title, exact: true });
const search = (page: Page) => page.getByRole('combobox', { name: '搜索知识点' });
const choose = async (page: Page, query: string) => {
  await search(page).fill(query);
  await search(page).press('Enter');
};

test('overview contains models with sourced relationships, readable cards and no unrelated tools', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await expect(modelButton(page, 'Transformer')).toBeVisible();
  await expect(modelButton(page, 'Whisper')).toBeVisible();
  await expect(reader(page)).toHaveCount(0);
  await expect(model(page)).toHaveCount(0);
  await expect(page.locator('footer')).toHaveCount(0);
  for (const label of [
    '学习路线',
    '面试自测',
    '按模态浏览',
    '已理解',
    '待复习',
    '下一 token 预测',
    'WER / CER',
  ])
    await expect(graph(page).getByText(label, { exact: true })).toHaveCount(0);
  const boxes = await graph(page)
    .locator('[data-model-id]')
    .evaluateAll((elements) =>
      elements.map((element) => {
        const box = element.getBoundingClientRect();
        return {
          id: element.getAttribute('data-model-id'),
          x: box.x,
          y: box.y,
          w: box.width,
          h: box.height,
          text:
            (parseFloat(getComputedStyle(element.querySelector('button')!).fontSize) * box.width) /
            (element as HTMLElement).offsetWidth,
        };
      }),
    );
  expect(boxes.length).toBeGreaterThan(8);
  expect(boxes.every((box) => box.text >= 12)).toBe(true);
  for (let i = 0; i < boxes.length; i++)
    for (let j = i + 1; j < boxes.length; j++) {
      const a = boxes[i]!,
        b = boxes[j]!;
      expect(
        a.x + a.w <= b.x || b.x + b.w <= a.x || a.y + a.h <= b.y || b.y + b.h <= a.y,
        `${a.id} overlaps ${b.id}`,
      ).toBe(true);
    }
  await page.getByText(/连线依据 ·/).click();
  await expect(page.getByText('BERT 采用 Transformer 编码器。')).toBeVisible();
});

test('model chapters read continuously; concept previews and nested returns preserve the model position', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('./');
  await modelButton(page, 'Whisper').click();
  await expect(model(page).getByRole('heading', { name: 'Whisper', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('model-chapter')).toHaveCount(7);
  await model(page).getByRole('link', { name: '数据与训练', exact: true }).click();
  await expect
    .poll(() => model(page).evaluate((element) => element.scrollTop))
    .toBeGreaterThan(500);
  await model(page).getByRole('link', { name: 'SFT', exact: true }).click();
  const position = await model(page).evaluate((element) => element.scrollTop);
  await expect(
    reader(page).getByRole('heading', { name: 'SFT · 示范学习', exact: true }),
  ).toBeVisible();
  await page
    .getByTestId('reader-body')
    .getByRole('link', { name: '下一 token 预测', exact: true })
    .click();
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await reader(page).getByRole('button', { name: '返回 SFT · 示范学习', exact: true }).click();
  await expect(
    reader(page).getByRole('heading', { name: 'SFT · 示范学习', exact: true }),
  ).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await expect
    .poll(() => model(page).evaluate((element) => element.scrollTop))
    .toBeCloseTo(position, 0);
  await expect(page).toHaveURL(/\?model=whisper$/);
  expect(errors).toEqual([]);
});

test('official architecture figure enlarges, zooms, closes and provides an external viewer without loading it', async ({
  page,
}) => {
  await page.goto('./?model=whisper');
  const figure = page.getByTestId('architecture-figure');
  await figure
    .getByRole('button', { name: '放大查看原图：Whisper 官方架构与任务示意', exact: true })
    .click();
  const enlarged = page.getByRole('dialog', { name: 'Whisper 官方架构与任务示意放大视图' });
  await expect(enlarged).toBeVisible();
  await expect(enlarged.getByRole('img', { name: /Whisper 官方示意图/ })).toHaveJSProperty(
    'naturalWidth',
    2973,
  );
  await enlarged.getByRole('button', { name: '放大架构图', exact: true }).click();
  await expect(enlarged.getByRole('img', { name: /Whisper 官方示意图/ })).toHaveAttribute(
    'style',
    /150%/,
  );
  await page.keyboard.press('Escape');
  await expect(enlarged).not.toBeVisible();
  await expect(figure.getByRole('link', { name: '打开交互结构图' })).toHaveAttribute(
    'href',
    'https://hfviewer.com/openai/whisper-small',
  );
  await expect(figure.getByRole('link', { name: '打开交互结构图' })).toHaveAttribute(
    'target',
    '_blank',
  );
  await expect(page.locator('iframe')).toHaveCount(0);
  await expect(figure).toContainText('MIT');
  await expect(figure).toContainText('2026-10-26');
});

test('a failed figure leaves its attribution and source fallback available', async ({ page }) => {
  await page.route('**/figures/whisper/approach.png', (route) =>
    route.fulfill({ status: 503, body: '' }),
  );
  await page.goto('./?model=whisper');
  const figure = page.getByTestId('architecture-figure');
  await figure.scrollIntoViewIfNeeded();
  await expect(figure.getByRole('status')).toContainText('原图暂时未能显示');
  await expect(figure.getByRole('link', { name: '原始来源' })).toBeVisible();
});

test('legacy links, reload and browser history restore the model and concept independently', async ({
  page,
}) => {
  await page.goto('./?node=whisper&node=wer&reader=closed&open=whisper-application&modality=omni');
  await expect(model(page).getByRole('heading', { name: 'Whisper', level: 1 })).toBeVisible();
  await expect(page).toHaveURL(/\?model=whisper$/);
  await choose(page, '下一 token');
  await expect(reader(page)).toBeVisible();
  await page.reload();
  await expect(
    reader(page).getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await page.goBack();
  await expect(reader(page)).toHaveCount(0);
  await page.goForward();
  await expect(reader(page)).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await model(page).getByRole('link', { name: '数据与训练', exact: true }).click();
  await expect
    .poll(() => model(page).evaluate((element) => element.scrollTop))
    .toBeGreaterThan(500);
  const position = await model(page).evaluate((element) => element.scrollTop);
  await page.reload();
  await expect(model(page).getByRole('heading', { name: '数据与训练', exact: true })).toBeVisible();
  await expect
    .poll(() => model(page).evaluate((element) => element.scrollTop))
    .toBeCloseTo(position, 0);
});

test('returning to the model map preserves its camera and reopens the saved model position', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const initial = await graph(page).locator('[data-model-id="whisper"]').boundingBox();
  await page.getByRole('button', { name: '放大地图', exact: true }).click();
  await expect
    .poll(async () => (await graph(page).locator('[data-model-id="whisper"]').boundingBox())!.width)
    .toBeGreaterThan(initial!.width * 1.1);
  const before = await modelButton(page, 'Whisper').boundingBox();
  await modelButton(page, 'Whisper').click();
  await model(page).getByRole('link', { name: '数据与训练', exact: true }).click();
  const position = await model(page).evaluate((element) => element.scrollTop);
  await page.getByRole('button', { name: '模型知识地图，返回全景' }).click();
  await expect(graph(page)).toBeVisible();
  const after = await modelButton(page, 'Whisper').boundingBox();
  expect(after!.x).toBeCloseTo(before!.x, 0);
  expect(after!.y).toBeCloseTo(before!.y, 0);
  await modelButton(page, 'Whisper').click();
  await expect
    .poll(() => model(page).evaluate((element) => element.scrollTop))
    .toBeCloseTo(position, 0);
});

test('auxiliary search supports aliases, keyboard selection and distinct model/concept destinations', async ({
  page,
}) => {
  await page.goto('./');
  await choose(page, '低秩');
  await expect(reader(page).getByRole('heading', { name: 'LoRA', exact: true })).toBeVisible();
  await choose(page, 'Whisper');
  await expect(model(page).getByRole('heading', { name: 'Whisper', level: 1 })).toBeVisible();
  await expect(reader(page)).toHaveCount(0);
});

test('a delayed concept response cannot overwrite the latest preview or its model background', async ({
  page,
}) => {
  let release!: () => void, complete!: () => void;
  const gate = new Promise<void>((resolve) => {
      release = resolve;
    }),
    finished = new Promise<void>((resolve) => {
      complete = resolve;
    });
  await page.route('**/readers/next-token/**', async (route) => {
    const response = await route.fetch();
    await gate;
    await route.fulfill({ response }).catch(() => {});
    complete();
  });
  await page.goto('./?model=whisper&concept=next-token');
  await expect(reader(page).getByText('正在打开正文…')).toBeVisible();
  await choose(page, '注意力机制');
  await expect(
    reader(page).getByRole('heading', { name: '注意力机制', exact: true }),
  ).toBeVisible();
  release();
  await finished;
  await expect(page.getByTestId('reader-body').getByText(/假设按字切分/)).toHaveCount(0);
  await expect(page).toHaveURL(/model=whisper/);
});

test('a delayed model response cannot overwrite a newly selected model', async ({ page }) => {
  let release!: () => void;
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  await page.route('**/readers/whisper/**', async (route) => {
    const response = await route.fetch();
    await gate;
    await route.fulfill({ response }).catch(() => {});
  });
  await page.goto('./?model=whisper');
  await expect(model(page).getByText('正在打开模型学习页…')).toBeVisible();
  await choose(page, 'BERT');
  await expect(model(page).getByRole('heading', { name: 'BERT', level: 1 })).toBeVisible();
  release();
  await expect(model(page).getByText(/打开客厅灯/)).toHaveCount(0);
});

test('failed model and concept loads retry without losing the reading context', async ({
  page,
}) => {
  let modelCount = 0,
    conceptCount = 0;
  await page.route('**/readers/whisper/**', (route) =>
    ++modelCount === 1 ? route.fulfill({ status: 503, body: '' }) : route.continue(),
  );
  await page.route('**/readers/next-token/**', (route) =>
    ++conceptCount === 1 ? route.fulfill({ status: 503, body: '' }) : route.continue(),
  );
  await page.goto('./?model=whisper');
  await expect(model(page).getByRole('alert')).toBeVisible();
  await model(page).getByRole('button', { name: '重新加载正文' }).click();
  await expect(model(page).getByTestId('model-chapter')).toHaveCount(7);
  await choose(page, '下一 token');
  await expect(reader(page).getByRole('alert')).toBeVisible();
  await reader(page).getByRole('button', { name: '重新加载正文' }).click();
  await expect(page.getByTestId('reader-body').getByText(/假设按字切分/)).toBeVisible();
});

test('model reading and concept navigation work with blocked browser storage', async ({ page }) => {
  await page.addInitScript(() => {
    for (const key of ['localStorage', 'sessionStorage'])
      Object.defineProperty(window, key, {
        get() {
          throw new Error('blocked');
        },
      });
  });
  await page.goto('./?model=whisper');
  await expect(model(page).getByTestId('model-chapter')).toHaveCount(7);
  await choose(page, '下一 token');
  await expect(reader(page)).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await expect(model(page)).toBeVisible();
});

test('failed knowledge data loads can be retried', async ({ page }) => {
  let count = 0;
  await page.route('**/data/atlas.json', (route) =>
    ++count === 1 ? route.fulfill({ status: 503, body: '' }) : route.continue(),
  );
  await page.goto('./');
  await expect(page.getByRole('status')).toContainText('暂时没有加载成功');
  await page.getByRole('button', { name: '重新加载', exact: true }).click();
  await expect(modelButton(page, 'Transformer')).toBeVisible();
});

test('overview, keyboard model reading, shared preview and figure modal pass accessibility checks', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await modelButton(page, 'Whisper').focus();
  await modelButton(page, 'Whisper').press('Enter');
  await expect(model(page).getByTestId('model-chapter')).toHaveCount(7);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await choose(page, '下一 token');
  await expect(page.getByTestId('reader-body').getByText(/假设按字切分/)).toBeVisible();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
  await expect(reader(page)).toHaveCount(0);
  await page
    .getByTestId('architecture-figure')
    .getByRole('button', { name: /^放大查看原图/ })
    .click();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test('shared concept relationships retain evidence and can lead to another model learning page', async ({
  page,
}) => {
  await page.goto('./?model=whisper&concept=next-token');
  await reader(page)
    .getByText(/关联知识 ·/)
    .click();
  await reader(page).getByText('SFT · 示范学习 · 采用 · 当前知识点', { exact: true }).click();
  await expect(
    reader(page).getByRole('link', {
      name: 'Training language models to follow instructions with human feedback',
    }),
  ).toBeVisible();
  await reader(page).getByRole('button', { name: 'GPT-2', exact: true }).click();
  await expect(model(page).getByRole('heading', { name: 'GPT-2', level: 1 })).toBeVisible();
  await expect(reader(page)).toHaveCount(0);
});

test('all canonical articles, fragments and figures resolve under the configured base; formulas and fulltext search work', async ({
  page,
  request,
  baseURL,
}) => {
  const data = (await (await request.get(`${baseURL}data/atlas.json`)).json()) as {
    nodes: { href: string; readerHref: string }[];
    figures: { asset?: { src: string } }[];
  };
  for (const item of data.nodes) {
    expect((await request.get(new URL(item.href, baseURL).href)).status()).toBe(200);
    const fragment = await request.get(new URL(item.readerHref, baseURL).href);
    expect(fragment.status()).toBe(200);
    expect(await fragment.text()).toContain('data-atlas-reader');
  }
  for (const figure of data.figures)
    if (figure.asset)
      expect((await request.get(new URL(figure.asset.src, baseURL).href)).status()).toBe(200);
  await page.goto('./?model=whisper&concept=next-token');
  await page.getByTestId('reader-body').getByText('想深入：看公式与符号解释').click();
  await expect(page.getByTestId('reader-body').locator('.katex').first()).toBeVisible();
  await page.getByRole('link', { name: '在独立页面阅读' }).click();
  await expect(
    page.getByRole('heading', { name: '下一 token 预测', level: 1, exact: true }),
  ).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图', exact: true }).click();
  await expect(reader(page)).toBeVisible();
  await expect(
    page.getByTestId('reader-body').locator('[data-reader-content] details'),
  ).toHaveAttribute('open', '');
  await page.goto('./foundations/attention/');
  await page.emulateMedia({ colorScheme: 'dark' });
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await page.getByRole('button', { name: /搜索正文/ }).click();
  await page.getByRole('textbox').fill('ASR');
  await expect(
    page.getByRole('link', { name: 'Qwen Audio / ASR', exact: true }).first(),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: /readers\// })).toHaveCount(0);
});

test('curated reasoning models link to complete training concepts without losing model context', async ({
  page,
}) => {
  await page.goto('./?model=deepseek-r1');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-R1', level: 1 })).toBeVisible();
  await expect(model(page).getByText(/R1-Zero 研究不先做 SFT/)).toBeVisible();
  await model(page).getByRole('link', { name: 'RLVR', exact: true }).click();
  await expect(reader(page).getByRole('heading', { name: /RLVR/, level: 2 })).toBeVisible();
  await expect(
    reader(page)
      .locator('[data-reader-content]')
      .getByText(/奖励来源/)
      .first(),
  ).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-R1', level: 1 })).toBeVisible();
});

test('new vision and speech chapters reuse figures, formulas and linked practice cases', async ({
  page,
}) => {
  await page.goto('./?model=sam');
  const figure = page.getByTestId('architecture-figure');
  await expect(figure.getByRole('img', { name: /SAM 官方示意图/ })).toHaveJSProperty(
    'naturalWidth',
    2412,
  );
  await expect(figure).toContainText('Apache-2.0');
  await expect(model(page).getByText(/不能仅凭示意图/)).toBeVisible();
  await page.goto('./?model=f5-tts');
  await expect(model(page).getByRole('heading', { name: 'F5-TTS', level: 1 })).toBeVisible();
  await model(page).getByRole('link', { name: '流匹配', exact: true }).click();
  await reader(page).getByText('想深入：直线路径的流匹配例子').click();
  await expect(reader(page).locator('.katex').first()).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await model(page).getByRole('link', { name: '语音生成案例', exact: true }).click();
  await expect(
    reader(page).getByRole('heading', { name: '语音生成：漏读、音色与杂音分开查', exact: true }),
  ).toBeVisible();
  for (const stage of ['数据', '训练', '评测', '应用', '错例分析', '数据改进'])
    await expect(reader(page).getByRole('heading', { name: stage, exact: true })).toHaveCount(1);
});

test('family overviews contain generations while detailed versions stay off the overview map', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await expect(modelButton(page, 'Qwen 系列')).toBeVisible();
  await expect(modelButton(page, 'Kimi 系列')).toBeVisible();
  await expect(modelButton(page, 'GLM 系列')).toBeVisible();
  await expect(modelButton(page, 'Qwen3')).toHaveCount(0);
  await modelButton(page, 'Qwen 系列').click();
  const rows = model(page).getByRole('row');
  for (const generation of [
    'Qwen 第一代',
    'Qwen1.5',
    'Qwen2（',
    'Qwen2.5（',
    'Qwen3（',
    'Qwen3-Next',
    'Qwen3.5',
    'Qwen3.6',
    'Qwen3.7',
    'Qwen3.8',
  ])
    await expect(rows.filter({ hasText: generation }).first()).toHaveCount(1);
  await model(page).getByRole('link', { name: '3.5 → 3.8', exact: true }).click();
  await expect(page).toHaveURL(/\?model=qwen38$/);
  await expect(model(page).getByText(/纯文本、始终思考/)).toBeVisible();
  await page.goto('./?model=qwen');
  await model(page).getByRole('link', { name: 'Audio 与 ASR', exact: true }).click();
  await expect(page).toHaveURL(/\?model=qwen-asr$/);
  await expect(model(page).getByRole('row').filter({ hasText: 'Qwen3-ForcedAligner' })).toHaveCount(
    1,
  );
  await model(page).getByRole('link', { name: 'WER／CER', exact: true }).click();
  await expect(reader(page).getByRole('heading', { name: 'WER / CER', exact: true })).toBeVisible();
  await reader(page).getByRole('button', { name: '关闭阅读区' }).click();
  await expect(
    model(page).getByRole('heading', { name: 'Qwen Audio / ASR', level: 1 }),
  ).toBeVisible();
  for (const [id, version] of [
    ['kimi', 'Kimi K3'],
    ['glm', 'GLM-5.3-Flash'],
  ]) {
    await page.goto(`./?model=${id}`);
    await expect(model(page).getByRole('row').filter({ hasText: version! })).toHaveCount(1);
  }
  await choose(page, 'Qwen3');
  await expect(page).toHaveURL(/\?model=qwen3$/);
  await choose(page, 'Qwen3.8');
  await expect(page).toHaveURL(/\?model=qwen38$/);
});
