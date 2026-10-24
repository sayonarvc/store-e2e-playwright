import { type Page, expect } from '@playwright/test';
import { existingUser } from '../data/users';

export class AuthModal {
  constructor(private page: Page) {
    this.page = page;
  }

  async logInStore(login: string, password: string) {
    await this.page.getByRole('link', { name: 'Log in' }).click();
    await this.page.locator('#loginusername').fill(login);
    await this.page.locator('#loginpassword').fill(password);
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async checkAuthorizedUser(userLogin: string) {
    await expect(this.page.getByRole('link', { name: `Welcome ${userLogin}` })).toBeVisible();
  }
}
