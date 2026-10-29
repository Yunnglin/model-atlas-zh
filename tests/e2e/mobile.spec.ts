import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('mobile model reading and concept return keep chapters accessible without horizontal overflow', async ({
  page,
}) => {
  await page.goto('./?model=whisper');
  const model = page.getByTestId('model-learning');
  await expect(model.getByRole('heading', { name: '模型卡', level: 2 })).toBeVisible();
  await expect(model.getByRole('heading', { name: '结构与数据流', level: 2 })).toBeVisible();
  await model.getByRole('link', { name: '数据与训练', exact: true }).click();
  await model.getByRole('link', { name: 'SFT', exact: true }).click();
  const position = await model.evaluate((element) => element.scrollTop);
  const reader = page.getByTestId('knowledge-reader');
  await expect(reader.getByRole('heading', { name: 'SFT · 示范学习', exact: true })).toBeVisible();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await reader.getByRole('button', { name: '关闭阅读区' }).click();
  await expect.poll(() => model.evaluate((element) => element.scrollTop)).toBeCloseTo(position, 0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button', { name: '模型知识地图，返回全景' }).click();
  await expect(page.getByTestId('map-canvas')).toBeVisible();
});

test('mobile architecture modal fits the screen and the map remains navigable by keyboard', async ({
  page,
}) => {
  await page.goto('./');
  const map = page.getByTestId('map-canvas');
  await expect(map).toHaveAttribute('aria-busy', 'false');
  await page.setViewportSize({ width: 390, height: 844 });
  await expect
    .poll(async () => {
      return map
        .getByRole('button', { name: 'Transformer', exact: true })
        .evaluate((element) => element.scrollWidth <= element.clientWidth);
    })
    .toBe(true);
  const whisper = map.getByRole('button', { name: 'Whisper', exact: true });
  await whisper.focus();
  await whisper.press('Enter');
  await page.getByRole('button', { name: '阅读模型讲解 →' }).click();
  const figure = page.getByTestId('architecture-figure');
  await figure.getByRole('button', { name: /^放大查看原图/ }).click();
  const dialog = page.getByRole('dialog', { name: 'Whisper 官方架构与任务示意放大视图' });
  await expect(dialog).toBeVisible();
  const box = await dialog.boundingBox();
  expect(box!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  await dialog.getByRole('button', { name: '关闭架构图' }).click();
  await expect(dialog).not.toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});

test('family comparison tables scroll locally on phones without widening the page', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./?model=qwen');
  const model = page.getByTestId('model-learning');
  await model.getByRole('link', { name: '结构与数据流', exact: true }).click();
  const table = model.getByRole('table').first();
  await expect(table).toHaveAttribute('tabindex', '0');
  await table.focus();
  await table.press('ArrowRight');
  await expect.poll(() => table.evaluate((element) => element.scrollLeft)).toBeGreaterThan(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test('mobile Qwen official diagrams and dense chapter tables stay inside the reading viewport', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./?model=qwen-tts');
  const model = page.getByTestId('model-learning');
  await model.getByRole('link', { name: '先把声音变成编号', exact: true }).click();
  const figure = model.getByTestId('architecture-figure').nth(1);
  await figure.getByRole('button', { name: /^放大查看原图/ }).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toBeVisible();
  expect((await dialog.boundingBox())!.width).toBeLessThanOrEqual(390);
  await dialog.getByRole('button', { name: '放大架构图', exact: true }).click();
  await expect(dialog.locator('img')).toHaveAttribute('style', /150%/);
  await dialog.getByRole('button', { name: '关闭架构图' }).click();
  await model.getByRole('link', { name: '评测怎么看', exact: true }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
});

test('DeepSeek update diagrams can be enlarged on mobile', async ({ page }) => {
  for (const [modelId, title] of [
    ['deepseek-v3-0324-model', 'DeepSeek-V3-0324 的 MLA 与专家前馈'],
    ['deepseek-r1-0528-model', 'DeepSeek-R1-0528 的 MLA 与专家前馈'],
  ]) {
    await page.goto(`./?model=${modelId}`);
    const figure = page.getByTestId('architecture-figure').filter({ hasText: title });
    await figure.scrollIntoViewIfNeeded();
    await expect(figure.locator('img').first()).toHaveJSProperty('complete', true);
    await expect
      .poll(() =>
        figure
          .locator('img')
          .first()
          .evaluate((img: HTMLImageElement) => img.naturalWidth),
      )
      .toBeGreaterThan(0);
    await figure.getByRole('button', { name: `放大查看原图：${title}` }).click();
    const dialog = page.getByRole('dialog', { name: `${title}放大视图` });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: '放大架构图', exact: true }).click();
    await expect(dialog.locator('img')).toHaveAttribute('style', /150%/);
    await dialog.getByRole('button', { name: '关闭架构图' }).click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
  }
});

test('standalone model figures appear in their chapter and fit a phone', async ({ page }) => {
  for (const path of [
    './omni/deepseek-vl-first-model/',
    './audio/qwen3-omni-captioner-model/',
    './omni/glm45v-model/',
    './nlp/minimax-text-01-model/',
    './omni/minimax-vl01-model/',
  ]) {
    await page.goto(path);
    const figure = page.getByRole('region', { name: '结构图与资料' });
    await expect(figure).toBeVisible();
    await expect(figure.locator('xpath=preceding-sibling::*[1]')).toContainText('结构与数据流');
    const image = figure.getByRole('img');
    await expect(image).toHaveJSProperty('complete', true);
    const original = figure.getByRole('link', { name: /^查看原图：/ });
    const source = await image.getAttribute('src');
    expect(source).not.toBeNull();
    await expect(original).toHaveAttribute('href', source ?? '');
    await expect(original).toHaveAttribute('target', '_blank');
    if (path === './omni/deepseek-vl-first-model/') {
      const [popup] = await Promise.all([page.waitForEvent('popup'), original.click()]);
      await popup.waitForLoadState();
      expect(new URL(popup.url()).pathname).toBe(source);
      await popup.close();
    }
    expect(
      await image.evaluate((element: HTMLImageElement) => element.naturalWidth),
    ).toBeGreaterThan(0);
    const bounds = await figure.boundingBox();
    expect(bounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
  }
});
