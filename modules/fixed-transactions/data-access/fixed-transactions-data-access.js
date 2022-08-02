const { FixedTransaction } = require("../../../storage/database/models");
const { generateNowTimestamp } = require("../../../helpers/utils");
const { TRANSACTIONS_STATUS } = require("../../../helpers/constants");

// fetch all by day of month
async function fetchAllFixedTransactionsByDayOfMonth(dayOfMonth) {
  return await FixedTransaction.findAll({
    where: {
      dayOfMonth,
      status: TRANSACTIONS_STATUS.ACTIVE,
    },
  });
}

// fetch all by account id
async function fetchAllFixedTransactionsByAccountId(accountId) {
  return await FixedTransaction.findAll({
    where: {
      accountId,
      status: TRANSACTIONS_STATUS.ACTIVE,
    },
  });
}

// submit
async function submitFixedTransaction(values) {
  return await FixedTransaction.create(values);
}

// edit
async function editFixedTransaction(id, values) {
  await FixedTransaction.update(
    { ...values },
    {
      where: { id },
    }
  );
}

// change status
async function changeFixedTransactionStatus(id, status) {
  await FixedTransaction.update(
    {
      status,
      statusChangedAt: generateNowTimestamp(),
    },
    { where: { id } }
  );
}

module.exports = {
  fetchAllFixedTransactionsByDayOfMonth,
  fetchAllFixedTransactionsByAccountId,
  submitFixedTransaction,
  editFixedTransaction,
  changeFixedTransactionStatus,
};
