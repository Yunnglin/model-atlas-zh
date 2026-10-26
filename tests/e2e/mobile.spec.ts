import { expect, test } from '@playwright/test';

test('mobile readers can find a node, read it and enter self-test without horizontal overflow', async ({
  page,
}) => {
  await page.goto('./?node=whisper');
  await expect(
    page.getByTestId('node-inspector').getByRole('heading', { name: 'Whisper', exact: true }),
  ).toBeVisible();
  await expect
    .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1))
    .toBe(true);
  await page.getByTestId('node-inspector').getByRole('link', { name: '读懂原理与例子' }).click();
  await expect(page.getByRole('heading', { name: 'Whisper', level: 1, exact: true })).toBeVisible();
  await page.getByRole('link', { name: '← 返回知识地图', exact: true }).click();
  await page.getByRole('button', { name: '面试自测', exact: true }).click();
  await expect(page.getByRole('heading', { name: '把“看过”变成“能讲清楚”' })).toBeVisible();
});
