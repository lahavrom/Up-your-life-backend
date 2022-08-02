const { AccountTransaction } = require("../../../storage/database/models");
const { generateNowTimestamp } = require("../../../helpers/utils");
const { TRANSACTIONS_STATUS } = require("../../../helpers/constants");

// submit
async function submitAccountTransaction(values) {
  return await AccountTransaction.create(values);
}

// submit multiple
async function submitMultipleAccountTransactions(values) {
  return await AccountTransaction.bulkCreate(values);
}

// fetch all by account id
async function fetchAllAccountTransactionsByAccountId(accountId) {
  return await AccountTransaction.findAll({
    where: {
      accountId,
      status: TRANSACTIONS_STATUS.ACTIVE,
    },
  });
}

// edit
async function editAccountTransaction(id, values) {
  await AccountTransaction.update(
    { ...values },
    {
      where: { id },
    }
  );
}

// change status
async function changeAccountTransaction(id, status) {
  await AccountTransaction.update(
    {
      status,
      statusChangedAt: generateNowTimestamp(),
    },
    {
      where: { id },
    }
  );
}

module.exports = {
  submitAccountTransaction,
  submitMultipleAccountTransactions,
  editAccountTransaction,
  fetchAllAccountTransactionsByAccountId,
  changeAccountTransaction,
};
