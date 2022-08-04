const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const accountsService = require("../business-logic/accounts-service");

async function fetchAccountUsers(req, res) {
  const { accountId } = req.params;
  const users = await accountsService.fetchAccountUsers(accountId);
  res.status(STATUS_CODES.SUCCESS.OK).json(users);
}

async function registerMultipleAccounts(req, res) {
  const values = _.pick(req.body, ["accountId", "email"]);
  const account = await accountsService.registerMultipleAccounts(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(account);
}

module.exports = {
  fetchAccountUsers,
  registerMultipleAccounts,
};
