import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('has title123', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  await page.getByRole('link', { name: 'Phones' }).click();
});
