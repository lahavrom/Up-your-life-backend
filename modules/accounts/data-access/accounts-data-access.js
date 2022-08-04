const { Account } = require("../../../storage/database/models");

async function registerAccount(values) {
  return await Account.create(values);
}

async function findAccountByEmail(email) {
  return await Account.findByPk(email);
}

module.exports = {
  registerAccount,
  findAccountByEmail,
};
