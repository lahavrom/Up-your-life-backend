const usersDataAccess = require("../data-access/users-data-access");

async function registerUser(userValues) {
  const user = await usersDataAccess.registerUser(userValues);
  return user;
}

module.exports = {
  registerUser,
};
