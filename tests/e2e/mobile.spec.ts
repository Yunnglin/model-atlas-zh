import { expect, test } from '@playwright/test';

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

test('mobile modality filter stays within the screen and accepts multiple choices', async ({
  page,
}) => {
  await page.goto('./');
  await page.getByRole('button', { name: '模态：全部模态' }).click();
  const options = page.getByRole('group', { name: '同时涉及所选模态' });
  await expect(options).toBeVisible();
  await options.getByLabel('文字', { exact: true }).check();
  await options.getByLabel('图像', { exact: true }).check();
  await expect(page.getByRole('button', { name: '模态：文字＋图像' })).toBeVisible();
  const bounds = await options.boundingBox();
  expect(bounds).not.toBeNull();
  expect(bounds!.x).toBeGreaterThanOrEqual(0);
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  await page.getByRole('button', { name: '模态：文字＋图像' }).click();
  await page.getByRole('button', { name: '清除筛选' }).click();
  await expect(page.getByRole('button', { name: '模态：全部模态' })).toBeVisible();
});
