import { NotAuthorizedUser as test } from '../fixtures/app.fixture';
import { existingUser } from '../pom/data/users';

test('Проверка приветствия пользователя по login после авторизации', async ({
  homePage,
  authModal,
}) => {
  await homePage.openHomePage();

  await authModal.logInStore(existingUser.login, existingUser.password);
  await authModal.checkAuthorizedUser(existingUser.login);
});
