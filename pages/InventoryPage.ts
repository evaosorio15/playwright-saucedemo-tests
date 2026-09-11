import { type Page, type Locator, expect } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly cartBadge: Locator;
  readonly addBackpackButton: Locator;


  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
    this.addBackpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');

  }

    async addBackpackToCart(): Promise<void> {
      await this.addBackpackButton.click();                                      // click addBackpackButton
  }

async expectLoaded(): Promise<void> {
    await expect(this.title).toHaveText('Products');
  }

  async expectCartCount(count: string): Promise<void> {
    await expect(this.cartBadge).toHaveText(count);
  }
}