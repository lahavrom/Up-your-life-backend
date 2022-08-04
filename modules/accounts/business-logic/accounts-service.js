const usersService = require("../../users/business-logic/users-service");
const accountsDataAccess = require("../data-access/accounts-data-access");

async function fetchAccountUsers(accountId) {
  return await usersService.findUsersByAccountId(accountId);
}

async function registerAccount(values) {
  return await accountsDataAccess.registerAccount(values);
}

module.exports = {
  fetchAccountUsers,
  registerAccount,
};
