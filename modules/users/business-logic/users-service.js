const usersDataAccess = require("../data-access/users-data-access");

async function submitUser(userValues) {
  const user = await usersDataAccess.submitUser(userValues);
  return user;
}

module.exports = {
  submitUser,
};
