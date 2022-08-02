const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const fixedTransactionsService = require("../business-logic/fixed-transactions-service");

// submit
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

// edit
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

// change status
async function changeFixedTransactionStatus(req, res) {
  const { id } = req.params;
  const { status } = req.body;
  await fixedTransactionsService.changeFixedTransactionStatus(id, status);
  res.status(STATUS_CODES.SUCCESS.OK).json();
}

// fetch all
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
  changeFixedTransactionStatus,
};
