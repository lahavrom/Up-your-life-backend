const { FixedTransaction } = require("../../../storage/database/models");

async function fetchAllFixedTransactionsByDayOfMonth(dayOfMonth) {
  return await FixedTransaction.findAll({ where: { dayOfMonth } });
}

async function fetchAllFixedTransactionsByAccountId(accountId) {
  return await FixedTransaction.findAll({ where: { accountId } });
}

async function submitFixedTransaction(values) {
  return await FixedTransaction.create(values);
}

async function editFixedTransaction(id, values) {
  await FixedTransaction.update({ ...values }, { where: { id } });
}

module.exports = {
  fetchAllFixedTransactionsByDayOfMonth,
  fetchAllFixedTransactionsByAccountId,
  submitFixedTransaction,
  editFixedTransaction,
};
