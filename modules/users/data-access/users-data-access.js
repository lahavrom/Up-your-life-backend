const { User } = require("../../../storage/database/models");

async function registerUser(userValues) {
  return await User.create(userValues);
}

async function findUserByEmail(email) {
  return await User.findOne({
    where: {
      email,
    },
  });
}

module.exports = {
  registerUser,
  findUserByEmail,
};
