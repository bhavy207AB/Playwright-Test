import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.getByLabel('email')
    .fill('test@example.com');

  await page.getByLabel('Password')
    .fill('password123');

  await page.getByRole('button', { name: 'Login' })
    .click();

  await expect(page)
    .toHaveURL(/dashboard/);
});