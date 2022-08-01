const fixedTransactionsDataAccess = require("../data-access/fixed-transactions-data-access");
const {
  FixedTransactionModelToDtoMapper,
} = require("./dto/fixed-transaction-model-to-dto-mapper");

const fixedTransactionMapper = new FixedTransactionModelToDtoMapper();

async function submitFixedTransaction(values) {
  const fixedTransaction =
    await fixedTransactionsDataAccess.submitFixedTransaction(values);
  return fixedTransactionMapper.convert(fixedTransaction);
}

async function editFixedTransaction(id, values) {
  await fixedTransactionsDataAccess.editFixedTransaction(id, values);
}

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
};
