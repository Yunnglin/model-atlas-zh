import { expect, test, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const reader = (page: Page) => page.getByTestId('knowledge-reader');
const model = (page: Page) => page.locator('body:has([data-atlas-return])');
const graph = (page: Page) => page.getByTestId('map-canvas');
const modelButton = (page: Page, title: string) =>
  graph(page).getByRole('button', { name: title, exact: true });
const search = (page: Page) => page.getByRole('combobox', { name: '搜索知识点' });
const choose = async (page: Page, query: string) => {
  await search(page).fill(query);
  await search(page).press('Enter');
};

test('selecting a model prepares its article before opening it', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const article = page.waitForResponse((response) => response.url().includes('/audio/whisper/'));
  await modelButton(page, 'Whisper').click();
  expect((await article).ok()).toBeTruthy();
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  await expect(model(page).getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
});

test('orders model vendors and exposes the major DeepSeek versions', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  const columns = [
    'Google',
    'OpenAI',
    'Meta',
    '阿里巴巴',
    'DeepSeek',
    'Moonshot AI',
    '智谱 / 清华',
    'MiniMax',
  ];
  const positions = await Promise.all(
    columns.map(
      async (name) => (await graph(page).getByText(name, { exact: true }).boundingBox())!.x,
    ),
  );
  expect(positions).toEqual([...positions].sort((a, b) => a - b));
  await page.getByRole('combobox', { name: '系列' }).selectOption('DeepSeek');
  for (const name of [
    'DeepSeek-Coder',
    'DeepSeekMath',
    'Janus-Pro',
    'DeepSeekMath-V2',
    'DeepSeek-V4-Flash',
    'DeepSeek-V4-Pro',
    'DeepSeek-V4.1-Flash',
  ]) {
    await expect(modelButton(page, name)).toBeAttached();
  }
  await modelButton(page, 'DeepSeekMath-V2').click();
  await expect(page.getByText('进入系列或分支共用正文。')).toHaveCount(0);
});

test('DeepSeek-V2 opens its own illustrated explanation', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await page.getByRole('combobox', { name: '系列' }).selectOption('DeepSeek');
  await modelButton(page, 'DeepSeek-V2').click();
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V2', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/低维的.*潜在表示/)).toBeVisible();
});

test('DeepSeek-V3 explains the original version with its own figure', async ({ page }) => {
  await page.goto('./?model=deepseek-v3');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V3', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/不包括前期研究/)).toBeVisible();
  await model(page).getByRole('link', { name: 'DeepSeek-V2', exact: true }).click();
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V2', level: 1 })).toBeVisible();
});

test('DeepSeek-R1 distinguishes its training stages and links to its base', async ({ page }) => {
  await page.goto('./?model=deepseek-r1');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-R1', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByRole('img', { name: /再从 V3-Base 重新微调/ })).toBeVisible();
  await expect(model(page).getByText('重新微调 V3-Base', { exact: true })).toBeVisible();
  await model(page).getByRole('link', { name: 'DeepSeek-V3', exact: true }).first().click();
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V3', level: 1 })).toBeVisible();
});

test('DeepSeek-V3.2 search opens its illustrated version-specific article', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-V3.2');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V3.2', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/索引器仍要对历史位置打分/)).toBeVisible();
});

test('DeepSeek-V4-Flash opens its own illustrated model article', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-V4-Flash');
  await expect(
    model(page).getByRole('heading', { name: 'DeepSeek-V4-Flash', level: 1 }),
  ).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/^Flash 有 43 层，前两层/)).toBeVisible();
});

test('DeepSeek-V4.1-Flash opens its own multimodal explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-V4.1-Flash');
  await expect(
    model(page).getByRole('heading', { name: 'DeepSeek-V4.1-Flash', level: 1 }),
  ).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/编码器是.*因果的/)).toBeVisible();
});

for (const name of [
  'DeepSeek-Coder',
  'DeepSeekMath-V2',
  'Janus-Pro',
  'Qwen2.5-Math',
  'QwQ-32B',
  'Kimi-Audio',
  'Qwen3 Embedding',
  'GLM-130B',
  'GLM-4-9B',
  'GLM-4.5',
  'Kimi-VL',
  'Kimi Linear',
  'GLM-4.6',
  'MiniMax-M1',
  'MiniMax-M2',
  'MiniMax-M2.1',
  'GLM-4.7',
  'Kimi K2.5',
  'DeepSeek LLM',
  'Transformer',
  'BERT',
  'GPT 初代',
  'GPT-2',
  'SAM 2',
  'Wan2.2',
  'GPT-3',
  'GPT-5',
  'QwQ-32B-Preview',
  'GPT-4',
  'Wan2.1',
  'T5',
  'ViT',
  'wav2vec 2.0',
  'Whisper',
  'CLIP',
  'HuBERT',
  'Swin',
  'SAM',
  'DiT',
  'Conformer',
  'EnCodec',
  'Stable Diffusion',
  'LLaVA',
  'VALL-E',
  'Llama 3.1',
  'LLaMA 初代',
  'Llama 2',
  'Llama 3',
  'Llama 3.2 Vision',
  'Llama 3.2：1B 与 3B 文本模型',
  'InstructGPT',
  'Llama 3.3 70B Instruct',
  'Llama 4：Scout 与 Maverick',
  'ChatGLM',
  'F5-TTS',
  'Qwen3.6',
  'Qwen3.8',
  'Qwen3.7',
  'Qwen3.5-Omni',
  'Qwen3.8-Omni-Flash',
  'Qwen3.8-Flash-Next',
  'Qwen-Image-2.1',
  'Qwen3.8-LiveTranslate',
  'Qwen3-LiveTranslate',
  'Qwen3.5-LiveTranslate',
  'Qwen-VLA',
  'Qwen-Image-Layered',
  'Qwen2-Math',
  'Qwen2.5-Math-RM-72B',
  'QVQ-72B-Preview',
  'DeepSeek-V2.5',
  'GLM-TTS',
  'Qwen2.5-Math-PRM',
  'DeepSeek-R1-0528',
  'DeepSeek-V3-0324',
  'GLM-Image',
  'Qwen2.5-1M',
  'Qwen3-VL-Embedding',
  'Qwen3 Reranker',
  'Qwen3-VL-Reranker',
  'Qwen3-ForcedAligner',
  'Qwen-Image-Edit',
  'Qwen-Image',
  'Qwen-Image-2512',
  'Qwen-Image-Edit-2511',
  'Qwen-Image-Edit-2509',
  'Qwen3Guard',
  'Kimi K2.7 Code',
  'Kimi K1.5',
  'Kimi K2',
  'Kimi K2 Thinking',
  'Kimi K3',
  'Jev',
  'OmniJev',
  'Claude',
  'Gemini 1.5',
  'GPT-4o',
  'GLM-5',
  'Kimi K2.6',
  'MiniMax-M2.5',
]) {
  test(`${name} opens its own illustrated model card`, async ({ page }) => {
    await page.goto('./');
    await choose(page, name);
    await expect(model(page).getByRole('heading', { name, level: 1 })).toBeVisible();
    await expect(model(page).getByRole('heading', { name: /模型卡/, level: 2 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure').first()).toBeVisible();
  });
}

test('ChatGLM generations open distinct illustrated model pages', async ({ page }) => {
  for (const [query, title] of [
    ['ChatGLM2', 'ChatGLM2-6B'],
    ['ChatGLM3', 'ChatGLM3-6B'],
  ] as const) {
    await page.goto('./');
    await choose(page, query);
    await expect(model(page).getByRole('heading', { name: title, level: 1 })).toBeVisible();
    await expect(model(page).getByRole('heading', { name: /模型卡/, level: 2 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure').first()).toBeVisible();
  }
});

test('new Omni articles display their attributed official figures', async ({ page }) => {
  for (const [id, count] of [
    ['qwen35-omni-model', 1],
    ['qwen38-omni-model', 2],
  ] as const) {
    await page.goto(`./?model=${id}`);
    const official = model(page).getByTestId('architecture-figure').filter({ hasText: '官方原图' });
    await expect(official).toHaveCount(count);
    for (const figure of await official.all()) {
      const image = figure.locator('img');
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() => image.evaluate((element: HTMLImageElement) => element.naturalWidth))
        .toBeGreaterThan(0);
      await expect(figure.getByText(/CC BY 4\.0/)).toBeVisible();
    }
  }
});

test('standalone model articles show their registered figures and the reader does not duplicate them', async ({
  page,
}) => {
  for (const [path, alt, heading] of [
    ['nlp/glm51-model/', '模型接收任务，调用工具并根据工具结果继续解决问题。', '结构与数据流'],
    [
      'omni/glm-ocr-model/',
      '图像经过视觉编码与语言解码，生成文字和结构化内容。',
      '结构：先看清，再组织输出',
    ],
  ] as const) {
    await page.goto(path);
    const section = page.getByRole('region', { name: '结构图与资料' });
    await expect(section.getByRole('img', { name: alt })).toBeVisible();
    await expect(section.locator('xpath=preceding-sibling::*[1]')).toContainText(heading);
    await expect(section.getByRole('link', { name: '图示依据' })).toHaveAttribute(
      'href',
      /^https:/,
    );
  }
  await page.goto('./?model=glm-ocr-model');
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).locator('img:visible')).toHaveCount(1);
});

test('new training algorithms are searchable and cross-linked', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await choose(page, 'RLOO');
  await expect(
    reader(page).getByRole('heading', { name: 'REINFORCE 与 RLOO', level: 2 }),
  ).toBeVisible();
  await choose(page, 'DAPO');
  await expect(
    reader(page).getByRole('heading', { name: 'DAPO · 长推理训练的几项改进', level: 2 }),
  ).toBeVisible();
  await expect(reader(page).getByRole('link', { name: 'GRPO' }).first()).toBeVisible();
  await choose(page, 'SmoothQuant');
  await expect(
    reader(page).getByRole('heading', { name: '量化 · 用更少的位数表示模型', level: 2 }),
  ).toBeVisible();
  await expect(
    reader(page).getByRole('heading', { name: 'GGUF 是文件格式，不是单一量化算法', level: 4 }),
  ).toBeVisible();
  await choose(page, 'MiniLLM');
  await expect(reader(page).getByRole('heading', { name: '知识蒸馏', level: 2 })).toBeVisible();
  await expect(reader(page).getByText('从教师示范到学生自己练习', { exact: true })).toBeVisible();
});

test('training methods are reachable by name from search', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  for (const [query, title] of [
    ['KTO', 'KTO · 单条反馈也能做偏好优化'],
    ['LoRA', 'LoRA'],
    ['SFT', 'SFT · 示范学习'],
    ['RLHF', 'RLHF'],
    ['RLVR', 'RLVR'],
    ['PPO', 'PPO · 近端策略优化'],
    ['DPO', 'DPO'],
    ['GRPO', 'GRPO'],
    ['GSPO', 'GSPO · 按序列优化'],
    ['蒸馏', '知识蒸馏'],
    ['量化', '量化 · 用更少的位数表示模型'],
  ] as const) {
    await choose(page, query);
    await expect(reader(page).getByRole('heading', { name: title, exact: true })).toBeVisible();
    await expect(page.getByTestId('reader-body')).toBeVisible();
    if (
      ['LoRA', 'SFT', 'RLHF', 'RLVR', 'PPO', 'DPO', 'GRPO', 'GSPO', '蒸馏', '量化'].includes(query)
    ) {
      const figures = reader(page).locator('img[src*="/figures/training/"]');
      await expect.poll(() => figures.count()).toBeGreaterThan(0);
      for (const figure of await figures.all()) {
        await figure.scrollIntoViewIfNeeded();
        await expect(figure).toBeVisible();
        await expect
          .poll(() => figure.evaluate((image: HTMLImageElement) => image.naturalWidth))
          .toBeGreaterThan(0);
      }
    }
  }
});

for (const [query, title] of [
  ['GLM-5.3', 'GLM-5.3'],
  ['GLM-5.3-Flash', 'GLM-5.3-Flash'],
  ['MiniMax-M3.1 Flash', 'MiniMax M3.1 Flash'],
] as const) {
  test(`${query} opens its own model card and figure`, async ({ page }) => {
    await page.goto('./');
    await choose(page, query);
    await expect(
      model(page).getByRole('heading', { name: title, level: 1, exact: true }),
    ).toBeVisible();
    await expect(model(page).getByRole('heading', { name: /模型卡/, level: 2 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  });
}

test('DeepSeek-V3.1 opens its version-specific model explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-V3.1');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-V3.1', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/32K 阶段约 630B token/)).toBeVisible();
});

test('DeepSeekMath opens its version-specific model explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeekMath');
  await expect(model(page).getByRole('heading', { name: 'DeepSeekMath', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/团队在代码底座上继续训练 5000 亿 token/)).toBeVisible();
});

test('DeepSeek-VL2 opens its version-specific model explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-VL2');
  await expect(model(page).getByRole('heading', { name: 'DeepSeek-VL2', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/Tiny 使用常规多头注意力 MHA/)).toBeVisible();
});

test('DeepSeek-Coder-V2 opens its version-specific model explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-Coder-V2');
  await expect(
    model(page).getByRole('heading', { name: 'DeepSeek-Coder-V2', level: 1 }),
  ).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/论文从已经看到约 4.2 万亿 token/)).toBeVisible();
});

test('DeepSeek-V4-Pro opens its version-specific model explanation', async ({ page }) => {
  await page.goto('./');
  await choose(page, 'DeepSeek-V4-Pro');
  await expect(
    model(page).getByRole('heading', { name: 'DeepSeek-V4-Pro', level: 1 }),
  ).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  await expect(model(page).getByText(/^报告列出 Pro 共有 61 层/)).toBeVisible();
});

test('timeline combines family, architecture and modalities and links a version to its own page', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await page.getByRole('combobox', { name: '系列' }).selectOption('Qwen');
  await page.getByRole('combobox', { name: '结构' }).selectOption('decoder');
  await page.getByRole('button', { name: '模态：全部模态' }).click();
  await page.getByLabel('文字', { exact: true }).check();
  await expect(modelButton(page, 'Qwen2.5')).toBeVisible();
  await expect(modelButton(page, 'BERT')).toHaveCount(0);
  await modelButton(page, 'Qwen2.5').click();
  await expect(page.getByText(/同系列的先后版本/).first()).toBeVisible();
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  await expect(model(page).getByRole('heading', { name: 'Qwen2.5', level: 1 })).toBeVisible();
  await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
});

test('modality filter supports multiple choices and keyboard dismissal', async ({ page }) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await page.getByRole('button', { name: '模态：全部模态' }).click();
  await page.getByLabel('文字', { exact: true }).check();
  await page.getByLabel('图像', { exact: true }).check();
  const filter = page.getByRole('button', { name: '模态：文字＋图像' });
  await expect(filter).toHaveAttribute('aria-expanded', 'true');
  await expect(modelButton(page, 'Qwen2.5-VL')).toBeVisible();
  await expect(modelButton(page, 'BERT')).toHaveCount(0);
  await page.keyboard.press('Escape');
  await expect(filter).toHaveAttribute('aria-expanded', 'false');
  await expect(filter).toBeFocused();
  await page.getByRole('button', { name: '清除筛选' }).click();
  await expect(page.getByRole('button', { name: '模态：全部模态' })).toBeVisible();
  await expect(modelButton(page, 'BERT')).toBeVisible();
});

test('each early Qwen Audio version opens its own illustrated article', async ({ page }) => {
  for (const [name, id] of [
    ['Qwen-Audio', 'qwen-audio-model'],
    ['Qwen2-Audio', 'qwen2-audio-model'],
  ]) {
    await page.goto('./');
    await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
    await modelButton(page, name!).click();
    await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
    await expect(page).toHaveURL(new RegExp(`/${id}/$`));
    await expect(model(page).getByRole('heading', { name: name!, level: 1 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  }
});

test('early Qwen VL versions open distinct illustrated model articles', async ({ page }) => {
  for (const [name, id] of [
    ['Qwen-VL', 'qwen-vl-first-model'],
    ['Qwen2-VL', 'qwen2-vl-model'],
  ]) {
    await page.goto('./');
    await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
    await modelButton(page, name!).click();
    await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
    await expect(page).toHaveURL(new RegExp(`/${id}/$`));
    await expect(model(page).getByRole('heading', { name: name!, level: 1 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  }
});

test('early Qwen Coder versions open distinct illustrated model articles', async ({ page }) => {
  for (const [name, id] of [
    ['CodeQwen1.5', 'codeqwen15-model'],
    ['Qwen2.5-Coder', 'qwen25-coder-model'],
  ]) {
    await page.goto('./');
    await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
    await modelButton(page, name!).click();
    await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
    await expect(page).toHaveURL(new RegExp(`/${id}/$`));
    await expect(model(page).getByRole('heading', { name: name!, level: 1 })).toBeVisible();
    await expect(model(page).getByTestId('architecture-figure')).toHaveCount(1);
  }
});

test('overview contains models with sourced relationships, readable cards and no unrelated tools', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await expect(modelButton(page, 'Transformer')).toBeVisible();
  await expect(modelButton(page, 'Whisper')).toBeVisible();
  const googleLabel = await graph(page).getByText('Google', { exact: true }).boundingBox();
  const transformerCard = await graph(page).locator('[data-model-id=transformer]').boundingBox();
  // The label text and the card share the same column start.
  expect(googleLabel!.x + 20).toBeCloseTo(transformerCard!.x, 0);
  await expect(
    graph(page).locator('[data-testid=vendor-track][data-organization=Google]'),
  ).toBeVisible();
  const bertBox = await modelButton(page, 'BERT').boundingBox();
  const transformerBox = await modelButton(page, 'Transformer').boundingBox();
  expect(bertBox!.width).toBeLessThan(transformerBox!.width);
  expect(transformerBox!.width).toBeLessThan(120);
  const glmBox = await modelButton(page, 'GLM').boundingBox();
  const swinBox = await modelButton(page, 'Swin').boundingBox();
  expect(glmBox!.y).toBeCloseTo(swinBox!.y, 0);
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
  await modelButton(page, 'BERT').click();
  await expect(page.getByText('BERT 采用 Transformer 编码器。')).toBeVisible();
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

test('search finds model versions with their own article', async ({ page }) => {
  await page.goto('./');
  await search(page).fill('Qwen3.7');
  const results = page.getByRole('listbox', { name: '知识点搜索结果' });
  await expect(results.getByRole('option', { name: /Qwen3.7/ })).toBeVisible();
  await search(page).press('Enter');
  await expect(model(page).getByRole('heading', { name: 'Qwen3.7', level: 1 })).toBeVisible();
  await page.goBack();
  await search(page).fill('Qwen2.5');
  await expect(results.getByRole('option', { name: /^Qwen2\.5\s/ })).toBeVisible();
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

test('training examples load their diagrams in standalone articles', async ({ page }) => {
  for (const [article, asset] of [
    ['ppo', 'ppo-clipping.svg'],
    ['gspo', 'gspo-sequence.svg'],
    ['rloo', 'rloo-baseline.svg'],
    ['dpo', 'dpo-preference.svg'],
    ['dapo', 'dapo-length.svg'],
    ['rlhf', 'rlhf-pipeline.svg'],
    ['contrastive-learning', 'contrastive-pairs.svg'],
    ['diffusion-flow', 'diffusion-flow.svg'],
    ['data-quality', 'data-quality.svg'],
  ]) {
    await page.goto(`./training/${article}/`);
    const diagram = page.locator(`main img[src$="${asset}"]`);
    await expect(diagram).toHaveCount(1);
    await diagram.scrollIntoViewIfNeeded();
    await expect
      .poll(() => diagram.evaluate((image: HTMLImageElement) => image.naturalWidth))
      .toBeGreaterThan(0);
    await expect(diagram).toHaveAttribute('alt', /.+/);
  }
});

test('registered diagrams appear once in the reader and standalone articles', async ({ page }) => {
  for (const [id, article, figure] of [
    ['gpt4-model', 'omni/gpt4-model/', 'gpt4/overview.svg'],
    ['sam2-model', 'cv/sam2-model/', 'sam2/overview.svg'],
    ['llama33-model', 'nlp/llama33-model/', 'llama33/overview.svg'],
  ]) {
    await page.goto(`./?model=${id}`);
    await expect(model(page).locator(`img[src$="${figure}"]:visible`)).toHaveCount(1);
    await page.goto(`./${article}`);
    await expect(page.locator(`main img[src$="${figure}"]`)).toHaveCount(1);
  }
});

test('all canonical articles, fragments and figures resolve under the configured base; formulas and fulltext search work', async ({
  page,
  request,
  baseURL,
}) => {
  const data = (await (await request.get(`${baseURL}data/atlas.json`)).json()) as {
    nodes: { id: string; href: string; readerHref: string }[];
    figures: { asset?: { src: string } }[];
    timeline: { article: string }[];
  };
  const timelineArticles = new Set(data.timeline.map((entry) => entry.article));
  for (const item of data.nodes) {
    const article = await request.get(new URL(item.href, baseURL).href);
    expect(article.status()).toBe(200);
    if (timelineArticles.has(item.id)) {
      const html = await article.text();
      const figureSection = html.match(
        /<section\b[^>]*aria-label="结构图与资料"[^>]*>[\s\S]*?<\/section>/,
      )?.[0];
      expect(figureSection, `${item.id}: missing rendered figure section`).toBeDefined();
      expect(figureSection, `${item.id}: missing rendered image`).toMatch(/<img\b/);
    }
    const fragment = await request.get(new URL(item.readerHref, baseURL).href);
    expect(fragment.status()).toBe(200);
    expect(await fragment.text()).toContain('data-atlas-reader');
  }
  for (const figure of data.figures)
    if (figure.asset)
      expect((await request.get(new URL(figure.asset.src, baseURL).href)).status()).toBe(200);
  await page.goto('./?concept=next-token');
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
  await expect(page.getByRole('link', { name: 'Qwen3-ASR', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: /readers\// })).toHaveCount(0);
});

test('family generations are visible on the timeline and family articles remain readable', async ({
  page,
}) => {
  await page.goto('./');
  await expect(graph(page)).toHaveAttribute('aria-busy', 'false');
  await expect(modelButton(page, 'Qwen3')).toBeVisible();
  await expect(modelButton(page, 'Kimi K2.5')).toBeVisible();
  await expect(modelButton(page, 'GLM-5')).toBeVisible();
  await page.goto('./?model=qwen');
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
  await expect(page).toHaveURL(/\/qwen38\/$/);
  await expect(model(page).getByText(/纯文本、始终思考/)).toBeVisible();
  await page.goto('./?model=qwen');
  await model(page).getByRole('link', { name: 'ASR', exact: true }).click();
  await expect(page).toHaveURL(/\/qwen-asr\/$/);
  await expect(model(page).getByRole('row').filter({ hasText: 'Qwen3-ForcedAligner' })).toHaveCount(
    1,
  );
  await model(page).getByRole('link', { name: 'WER／CER', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'WER / CER', exact: true })).toBeVisible();
  await page.goBack();
  await expect(model(page).getByRole('heading', { name: 'Qwen3-ASR', level: 1 })).toBeVisible();
  for (const [id, version] of [
    ['kimi', 'Kimi K3'],
    ['glm', 'GLM-5.3-Flash'],
  ]) {
    await page.goto(`./?model=${id}`);
    await expect(model(page).getByRole('row').filter({ hasText: version! })).toHaveCount(1);
  }
  for (const [name, id] of [
    ['Qwen3', 'qwen3'],
    ['Qwen3.5', 'qwen35-model'],
    ['Qwen3.6', 'qwen36-model'],
    ['Qwen3.8', 'qwen38'],
  ]) {
    await page.goto('./');
    await choose(page, name!);
    await expect(page).toHaveURL(new RegExp(`/${id}/$`));
  }
});
