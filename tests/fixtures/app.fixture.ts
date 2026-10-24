/* eslint-disable react-hooks/rules-of-hooks */
import { test as base } from '@playwright/test';
import { AuthModal } from '../pom/pages/AuthModal';
import { HomePage } from '../pom/pages/HomePage';

// Declare the types of your fixtures.
type MyFixtures = {
  homePage: HomePage;
  authModal: AuthModal;
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

export const test = appTest;
export { expect } from '@playwright/test';
