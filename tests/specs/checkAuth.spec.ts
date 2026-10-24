import { AuthorizedUser as test } from '../fixtures/app.fixture';
import { existingUser } from '../pom/data/users';

test('Проверка приветствия авторизованного пользователя по login', async ({
  homePage,
  authModal,
}) => {
  await homePage.openHomePage();

  await authModal.checkAuthorizedUser(existingUser.login);
});
