const { User } = require("../../../storage/database/models");

async function registerUser(userValues) {
  return await User.create(userValues);
}

module.exports = {
  registerUser,
};
