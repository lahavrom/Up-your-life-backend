const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const usersService = require("../business-logic/users-service");

async function submitUser(req, res) {
  const userValues = _.pick(req.body, ["firstName", "lastName", "email"]);
  const user = await usersService.submitUser(userValues);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(user);
}

module.exports = {
  submitUser,
};
