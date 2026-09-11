import { test, expect } from '@playwright/test';

/**
 * WEEK 5 — EXERCISE 2: Fix the flaky test
 * ----------------------------------------
 * This file is DELIBERATELY BROKEN. It uses the anti-patterns from the guide:
 * hard waits (waitForTimeout), a "read once" assertion, and a brittle locator.
 * It may pass on a fast machine and fail on a slow one (or with the
 * performance_glitch_user) — that is exactly what flaky means.
 *
 * Your job: make all three tests reliable WITHOUT using waitForTimeout.
 * Replace every hard wait with a web-first (auto-retrying) assertion or a poll.
 * The reference solution is at the bottom of WEEK5-EXERCISES.md — try it
 * yourself first.
 *
 * Run it:   npx playwright test tests/flaky-login.spec.ts --project=chromium
 * Hunt flakiness:   npx playwright test tests/flaky-login.spec.ts --repeat-each=10
 */

const URL = 'https://www.saucedemo.com';

test('FLAKY: standard user lands on inventory', async ({ page }) => {
  await page.goto(URL);

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL(/inventory/);

});

test('FLAKY: performance_glitch_user (intentionally slow) still logs in', async ({ page }) => {
  await page.goto(URL);

  await page.getByPlaceholder('Username').fill('performance_glitch_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveURL(/inventory/, { timeout: 15_000 });
});

test('FLAKY: locked_out_user sees an error', async ({ page }) => {
  await page.goto(URL);

  await page.getByPlaceholder('Username').fill('locked_out_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.locator('[data-test="error"]')).toContainText('locked out');
});
