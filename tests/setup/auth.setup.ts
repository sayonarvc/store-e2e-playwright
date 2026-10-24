import { test as setup } from '@playwright/test';
import { HomePage } from '../pom/pages/HomePage';
import { AuthModal } from '../pom/pages/AuthModal';
import { existingUser } from '../pom/data/users';
import { authFile } from '../fixtures/app.fixture';

setup('authenticate existing user', async ({ page }) => {
  const homePage = new HomePage(page);
  const authModal = new AuthModal(page);

  await homePage.openHomePage();

  await authModal.logInStore(existingUser.login, existingUser.password);
  await authModal.checkAuthorizedUser(existingUser.login);

  await page.context().storageState({ path: authFile });
});
