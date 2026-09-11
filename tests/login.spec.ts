import { test, expect } from './fixtures';

test.describe('Login', () => {
  test('standard user can log in', async ({ loginPage, page }) => {
    await loginPage.loginAsStandardUser();
    await expect(page).toHaveURL(/inventory/);
  });

  test('locked-out user sees an error', async ({ loginPage }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectError('locked out');
  });

  test('wrong password is rejected', async ({ loginPage }) => {
    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.expectError('do not match');
  });
});