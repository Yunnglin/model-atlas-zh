import { defineConfig, devices } from '@playwright/test';

const basePath = process.env.ATLAS_BASE ?? '/';
export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: false,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: { baseURL: `http://127.0.0.1:4392${basePath}`, trace: 'retain-on-failure' },
  projects: [
    {
      name: 'desktop',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1440, height: 1024 } },
    },
    {
      name: 'mobile',
      testMatch: /mobile/,
      use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' },
    },
  ],
  webServer: {
    command: 'pnpm preview --ignore-lock --host 127.0.0.1 --port 4392',
    url: `http://127.0.0.1:4392${basePath}`,
    reuseExistingServer: false,
    timeout: 60_000,
  },
});
