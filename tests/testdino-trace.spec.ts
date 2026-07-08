import { test, expect } from '@playwright/test';

test('TestDino trace upload check', async ({ page }, testInfo) => {
  await page.setContent(`
    <main>
      <h1>TestDino trace check</h1>
      <button type="button">Generate trace</button>
      <p id="status">ready</p>
    </main>
  `);

  await page.getByRole('button', { name: 'Generate trace' }).click();
  await expect(page.getByText('TestDino trace check')).toBeVisible();

  // Fail once in CI so Playwright records a trace on the retry.
  if (process.env.CI && testInfo.retry === 0) {
    await expect(page.getByText('force first CI attempt to fail')).toBeVisible({
      timeout: 500,
    });
  }

  await expect(page.locator('#status')).toHaveText('ready');
});
