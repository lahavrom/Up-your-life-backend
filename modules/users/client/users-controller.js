const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const usersService = require("../business-logic/users-service");

async function registerUser(req, res) {
  const userValues = _.pick(req.body, [
    "firstName",
    "lastName",
    "email",
    "password",
  ]);
  const user = await usersService.registerUser(userValues);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(user);
}

module.exports = {
  registerUser,
};
