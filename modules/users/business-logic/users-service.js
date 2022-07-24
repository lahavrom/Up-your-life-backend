const usersDataAccess = require("../data-access/users-data-access");
const { UserModelToDtoMapper } = require("./dto/user-model-to-dto-mapper");
const { hashPassword, validatePassword } = require("../helpers/utils");
const { InvalidCredentialsError } = require("../helpers/errors");

const userMapper = new UserModelToDtoMapper();

async function registerUser(values) {
  const hashedPassword = await hashPassword(values.password);
  const user = await usersDataAccess.registerUser({
    ...values,
    password: hashedPassword,
  });
  return userMapper.convert(user);
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
  return userMapper.convert(user);
}

module.exports = {
  registerUser,
  loginUser,
};
