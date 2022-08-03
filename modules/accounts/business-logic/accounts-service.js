const accountsDataAccess = require("../data-access/accounts-data-access");
const usersService = require("../../users/business-logic/users-service");

async function fetchUserAccount(accountId) {
  return await accountsDataAccess.fetchUserAccount(accountId);
}

async function fetchAccountUsers(accountId) {
  return await usersService.findUsersByAccountId(accountId);
}

module.exports = {
  fetchUserAccount,
  fetchAccountUsers,
};
