const { STATUS_CODES } = require("../../../helpers/constants");
const accountsService = require("../business-logic/accounts-service");

async function fetchUserAccount(req, res) {
  const { accountId } = req.params;
  const account = await accountsService.fetchUserAccount(accountId);
  res.status(STATUS_CODES.SUCCESS.OK).json(account);
}

async function fetchAccountUsers(req, res) {
  const { accountId } = req.params;
  const users = await accountsService.fetchAccountUsers(accountId);
  res.status(STATUS_CODES.SUCCESS.OK).json(users);
}

module.exports = {
  fetchUserAccount,
  fetchAccountUsers,
};
