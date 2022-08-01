const accountTransactionsDataAccess = require("../data-access/account-transactions-data-access");
const {
  AccountTransactionModelToDtoMapper,
} = require("./dto/account-transaction-model-to-dto-mapper");

const accountTransactionMapper = new AccountTransactionModelToDtoMapper();

async function submitAccountTransaction(values) {
  const accountTransaction =
    await accountTransactionsDataAccess.submitAccountTransaction(values);
  return accountTransactionMapper.convert(accountTransaction);
}

async function editAccountTransaction(id, value) {
  await accountTransactionsDataAccess.editAccountTransaction(id, value);
}

async function fetchAllAccountTransactionsByAccountId(accountId) {
  const accountTransaction =
    await accountTransactionsDataAccess.fetchAllAccountTransactionsByAccountId(
      accountId
    );
  return accountTransaction.map((accountTransaction) =>
    accountTransactionMapper.convert(accountTransaction)
  );
}

module.exports = {
  submitAccountTransaction,
  editAccountTransaction,
  fetchAllAccountTransactionsByAccountId,
};
