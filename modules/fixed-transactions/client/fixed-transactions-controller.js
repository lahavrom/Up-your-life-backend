const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const fixedTransactionsService = require("../business-logic/fixed-transactions-service");

async function submitFixedTransaction(req, res) {
  const values = _.pick(req.body, [
    "accountId",
    "userId",
    "type",
    "category",
    "description",
    "value",
    "dayOfMonth",
  ]);
  const fixedTransaction =
    await fixedTransactionsService.submitFixedTransaction(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(fixedTransaction);
}

async function editFixedTransaction(req, res) {
  const { id } = req.params;
  const values = _.pick(req.body, [
    "category",
    "description",
    "value",
    "dayOfMonth",
  ]);
  await fixedTransactionsService.editFixedTransaction(id, values);
  res.status(STATUS_CODES.SUCCESS.OK).json();
}

async function fetchAllFixedTransactionsByAccountId(req, res) {
  const { accountId } = req.params;
  const fixedTransactions =
    await fixedTransactionsService.fetchAllFixedTransactionsByAccountId(
      accountId
    );
  res.status(STATUS_CODES.SUCCESS.OK).json(fixedTransactions);
}

module.exports = {
  submitFixedTransaction,
  editFixedTransaction,
  fetchAllFixedTransactionsByAccountId,
};
