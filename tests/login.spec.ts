import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.getByLabel('Username')
    .fill('student');

  await page.getByLabel('Password')
    .fill('Password123');

  await page.getByRole('button', { name: 'Submit' })
    .click();

  
});