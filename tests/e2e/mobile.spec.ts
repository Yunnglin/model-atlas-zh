import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('mobile model reading and concept return keep chapters accessible without horizontal overflow', async ({
  page,
}) => {
  await page.goto('./?model=whisper');
  const model = page.getByTestId('model-learning');
  await expect(model.getByTestId('model-chapter')).toHaveCount(7);
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
      const box = await map.locator('[data-model-id=transformer]').boundingBox();
      return box!.width;
    })
    .toBeGreaterThan(120);
  const whisper = map.getByRole('button', { name: 'Whisper', exact: true });
  await whisper.focus();
  await whisper.press('Enter');
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
