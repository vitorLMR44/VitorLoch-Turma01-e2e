import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: 'src/scenarios',
  timeout: 120000,
  retries: 0,
  use: {
    trace: 'on',
    locale: 'pt-BR',
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on'
  },
  expect: {
    timeout: 30000
  },
  reporter: [
    [
      'html',
      {
        outputFolder: 'artifacts/report',
        open: 'never'
      }
    ]
  ]
};
export default config;
