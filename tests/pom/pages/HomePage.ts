import { type Page, expect } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {
    this.page = page;
  }

  async openHomePage() {
    await this.page.goto('/');
  }

  async checkNameStore() {
    expect(this.page.getByRole('link', { name: 'PRODUCT STORE' })).toBeVisible();
  }
}
