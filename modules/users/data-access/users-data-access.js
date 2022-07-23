const { User } = require("../../../storage/database/models");

async function submitUser(userValues) {
  return await User.create(userValues);
}

module.exports = {
  submitUser,
};
