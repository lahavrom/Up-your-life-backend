const accountTransactionsDataAccess = require("../data-access/account-transactions-data-access");
const {
  AccountTransactionModelToDtoMapper,
} = require("./dto/account-transaction-model-to-dto-mapper");

const accountTransactionMapper = new AccountTransactionModelToDtoMapper();

// submit
async function submitAccountTransaction(values) {
  const accountTransaction =
    await accountTransactionsDataAccess.submitAccountTransaction(values);
  return accountTransactionMapper.convert(accountTransaction);
}

// edit
async function editAccountTransaction(id, value) {
  await accountTransactionsDataAccess.editAccountTransaction(id, value);
}

// change status
async function changeAccountTransactionStatus(id, status) {
  await accountTransactionsDataAccess.changeAccountTransaction(id, status);
}

// fetch all
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
  changeAccountTransactionStatus,
};
