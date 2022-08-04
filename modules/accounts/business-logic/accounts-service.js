const usersService = require("../../users/business-logic/users-service");
const accountsDataAccess = require("../data-access/accounts-data-access");

async function fetchAccountUsers(accountId) {
  return await usersService.findUsersByAccountId(accountId);
}

async function registerMultipleAccounts(values) {
  const { accountId, email } = values;
  const accountsArray = email.map((currEmail) => ({
    accountId,
    email: currEmail,
  }));
  return await accountsDataAccess.registerMultipleAccounts(accountsArray);
}

module.exports = {
  fetchAccountUsers,
  registerMultipleAccounts,
};
