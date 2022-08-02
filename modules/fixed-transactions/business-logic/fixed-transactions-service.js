const fixedTransactionsDataAccess = require("../data-access/fixed-transactions-data-access");
const {
  FixedTransactionModelToDtoMapper,
} = require("./dto/fixed-transaction-model-to-dto-mapper");

const fixedTransactionMapper = new FixedTransactionModelToDtoMapper();

// submit
async function submitFixedTransaction(values) {
  const fixedTransaction =
    await fixedTransactionsDataAccess.submitFixedTransaction(values);
  return fixedTransactionMapper.convert(fixedTransaction);
}

// edit
async function editFixedTransaction(id, values) {
  await fixedTransactionsDataAccess.editFixedTransaction(id, values);
}

// change status
async function changeFixedTransactionStatus(id, status) {
  await fixedTransactionsDataAccess.changeFixedTransactionStatus(id, status);
}

// fetch all
async function fetchAllFixedTransactionsByAccountId(accountId) {
  const fixedTransactions =
    await fixedTransactionsDataAccess.fetchAllFixedTransactionsByAccountId(
      accountId
    );
  return fixedTransactions.map((fixedTransaction) =>
    fixedTransactionMapper.convert(fixedTransaction)
  );
}

module.exports = {
  submitFixedTransaction,
  editFixedTransaction,
  fetchAllFixedTransactionsByAccountId,
  changeFixedTransactionStatus,
};
