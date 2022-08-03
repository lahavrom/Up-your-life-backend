const { Account } = require("../../../storage/database/models");

async function fetchUserAccount(accountId) {
  return await Account.findByPk(accountId);
}

module.exports = {
  fetchUserAccount,
};
