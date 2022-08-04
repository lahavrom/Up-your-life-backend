const { v4: uuidv4 } = require("uuid");

const usersDataAccess = require("../data-access/users-data-access");
const accountsDataAccess = require("../../accounts/data-access/accounts-data-access");
const { UserModelToDtoMapper } = require("./dto/user-model-to-dto-mapper");
const {
  hashPassword,
  validatePassword,
  generateAuthToken,
} = require("../helpers/utils");
const { InvalidCredentialsError } = require("../helpers/errors");

const userMapper = new UserModelToDtoMapper();

async function registerUser(values) {
  const account = await accountsDataAccess.findAccountByEmail(values.email);
  const accountId = account ? account.accountId : uuidv4();
  const password = await hashPassword(values.password);
  const user = await usersDataAccess.registerUser({
    ...values,
    accountId,
    password,
  });
  if (!account) {
    await accountsDataAccess.registerAccount({
      accountId,
      email: user.email,
    });
  }
  const token = generateAuthToken(user.accountId, user.userId);
  return { token, user: userMapper.convert(user) };
}

async function loginUser(values) {
  const { email, password } = values;
  const user = await usersDataAccess.findUserByEmail(email);
  if (!user) {
    throw new InvalidCredentialsError();
  }
  const isValidPassword = await validatePassword(password, user.password);
  if (!isValidPassword) {
    throw new InvalidCredentialsError();
  }
  const token = generateAuthToken(user.accountId, user.userId);
  return { token, user: userMapper.convert(user) };
}

async function fetchUser(userId) {
  const user = await usersDataAccess.findUserByUserId(userId);
  return userMapper.convert(user);
}

async function findUsersByAccountId(accountId) {
  const users = await usersDataAccess.findUsersByAccountId(accountId);
  return users.map((user) => userMapper.convert(user));
}

async function updateUserProfileImage(userId, profileImage) {
  await usersDataAccess.updateUserProfileImage(userId, profileImage);
}

module.exports = {
  registerUser,
  loginUser,
  fetchUser,
  findUsersByAccountId,
  updateUserProfileImage,
};
