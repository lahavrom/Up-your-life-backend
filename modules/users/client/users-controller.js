const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const usersService = require("../business-logic/users-service");

async function registerUser(req, res) {
  const values = _.pick(req.body, [
    "firstName",
    "lastName",
    "email",
    "password",
  ]);
  const { token, user } = await usersService.registerUser(values);
  res
    .status(STATUS_CODES.SUCCESS.CREATED)
    .header("x-auth-token", token)
    .json(user);
}

async function loginUser(req, res) {
  const values = _.pick(req.body, ["email", "password"]);
  const { token, user } = await usersService.loginUser(values);
  res.status(STATUS_CODES.SUCCESS.OK).header("x-auth-token", token).json(user);
}

async function fetchUser(req, res) {
  const { uId } = req.user;
  const user = await usersService.fetchUser(uId);
  res.status(STATUS_CODES.SUCCESS.OK).json(user);
}

module.exports = {
  registerUser,
  loginUser,
  fetchUser,
};
