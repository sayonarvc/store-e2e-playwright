/* eslint-disable react-hooks/rules-of-hooks */
import { test as base } from '@playwright/test';
import { AuthModal } from '../pom/pages/AuthModal';
import { HomePage } from '../pom/pages/HomePage';
import path from 'path';
import process from 'process';

export const authFile = path.join(process.cwd(), 'playwright/.auth/exsisting-user.json');
// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  authModal: AuthModal;
};

type AppOptions = {
  storageState: string | undefined;
};

// Extend base test by providing "todoPage" and "settingsPage".
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
const appTest = base.extend<MyFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  authModal: async ({ page }, use) => {
    const authModal = new AuthModal(page);
    await use(authModal);
  },
});

export const NotAuthorizedUser = appTest;
export const AuthorizedUser = appTest.extend<AppOptions>({
  storageState: authFile,
});
export { expect } from '@playwright/test';
