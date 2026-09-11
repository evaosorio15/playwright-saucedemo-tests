import { type Page, type Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
    this.errorMessage = page.locator('[data-test="error"]');        //'#' is not needed at the beginning of an attribute because not an ID. 
  }

  async goto(): Promise<void> {
    await this.page.goto('/');
  }

async login(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);                        // 1. fill usernameInput
    await this.passwordInput.fill(password);                        // 2. fill passwordInput
    await this.loginButton.click();                                 // 3. click loginButton
  }

  async loginAsStandardUser(): Promise<void> {
   await this.login('standard_user', 'secret_sauce'); // call this.login(...) with 'standard_user' and 'secret_sauce'
  }

  async expectError(text: string): Promise<void> {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(text);
  }
}