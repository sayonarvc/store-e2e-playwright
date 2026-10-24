interface INewUser {
  login: string;
  password: string;
}

export const existingUser: INewUser = {
  login: 'usernameOne1',
  password: '123',
};

export const newUser: INewUser = {
  login: `userName${Date.now()}`,
  password: 'qwerty123',
};
