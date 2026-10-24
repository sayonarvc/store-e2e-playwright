import { test } from '../tests/fixtures/app.fixture';
import { existingUser } from './pom/data/users';

test('Проверка приветствия авторизованного пользователя по login', async ({
  homePage,
  authModal,
}) => {
  await homePage.openHomePage();

  await authModal.logInStore(existingUser.login, existingUser.password);
  await authModal.checkAuthorizedUser(existingUser.login);
});
