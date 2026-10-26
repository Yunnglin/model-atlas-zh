import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('mobile readers explore, fill a prerequisite gap and return without overflow or hidden controls', async ({
  page,
}) => {
  await page.goto('./');
  const search = page.getByRole('combobox', { name: '搜索知识点' });
  await search.fill('Whisper');
  await search.press('Enter');
  const reader = page.getByTestId('knowledge-reader');
  await expect(reader.getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  const body = page.getByTestId('reader-body');
  await expect(body.getByRole('heading', { name: '用大白话理解' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await body.getByRole('link', { name: '预测下一个文字片段', exact: true }).click();
  await expect(reader.getByRole('heading', { name: '下一 token 预测', exact: true })).toBeVisible();
  await reader.getByRole('button', { name: '返回 Whisper', exact: true }).click();
  await expect(reader.getByRole('heading', { name: 'Whisper', exact: true })).toBeVisible();
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await reader.getByRole('button', { name: '关闭阅读区' }).click();
  await expect(reader).toHaveCount(0);
  await page.getByRole('button', { name: '收起全部', exact: true }).click();
  await expect(page).not.toHaveURL(/node=/);
});

test('tree disclosure keeps the current branch and next layer reachable on a narrow screen', async ({
  page,
}) => {
  await page.goto('./');
  const map = page.getByTestId('map-canvas');
  await expect(map).toHaveAttribute('aria-busy', 'false');
  await map.getByRole('button', { name: '编码器＋解码器 · 展开', exact: true }).click();
  await expect(map.getByRole('button', { name: 'Whisper', exact: true })).toBeVisible();
  await map.getByRole('button', { name: '展开 · 4 项：Whisper', exact: true }).click();
  await map.getByRole('button', { name: '训练 · 展开', exact: true }).click();
  await expect(map).toHaveAttribute('aria-busy', 'false');
  const next = map.getByRole('button', { name: '下一 token 预测', exact: true });
  const box = await next.boundingBox();
  expect(box!.x).toBeGreaterThanOrEqual(0);
  expect(box!.x + box!.width).toBeLessThanOrEqual(page.viewportSize()!.width);
  await next.click();
  await expect(
    page
      .getByTestId('knowledge-reader')
      .getByRole('heading', { name: '下一 token 预测', exact: true }),
  ).toBeVisible();
  await page.getByRole('button', { name: '关闭阅读区', exact: true }).click();
  await expect(map.getByRole('button', { name: '训练 · 收起', exact: true })).toHaveAttribute(
    'aria-expanded',
    'true',
  );
  await map.getByRole('button', { name: '评测 · 展开', exact: true }).click();
  await expect(map.getByRole('button', { name: 'WER / CER', exact: true })).toBeVisible();
  await expect(map.getByRole('button', { name: '下一 token 预测', exact: true })).toHaveCount(0);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
