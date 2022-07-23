const usersDataAccess = require("../data-access/users-data-access");
const { UserModelToDtoMapper } = require("./dto/user-model-to-dto-mapper");

const userMapper = new UserModelToDtoMapper();

async function registerUser(userValues) {
  const user = await usersDataAccess.registerUser(userValues);
  return userMapper.convert(user);
}

module.exports = {
  registerUser,
};
