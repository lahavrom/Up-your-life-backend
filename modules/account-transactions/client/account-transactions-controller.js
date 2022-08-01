const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const accountTransactionsService = require("../business-logic/account-transactions-service");

async function submitAccountTransaction(req, res) {
  const values = _.pick(req.body, [
    "accountId",
    "userId",
    "type",
    "category",
    "description",
    "value",
    "effectiveDate",
  ]);
  const accountTransactions =
    await accountTransactionsService.submitAccountTransaction(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(accountTransactions);
}

async function editAccountTransaction(req, res) {
  const { id } = req.params;
  const values = _.pick(req.body, [
    "category",
    "description",
    "value",
    "effectiveDate",
  ]);
  await accountTransactionsService.editAccountTransaction(id, values);
  res.status(STATUS_CODES.SUCCESS.OK).json();
}

async function fetchAllAccountTransactionsByAccountId(req, res) {
  const { accountId } = req.params;
  const accountTransactions =
    await accountTransactionsService.fetchAllAccountTransactionsByAccountId(
      accountId
    );
  res.status(STATUS_CODES.SUCCESS.OK).json(accountTransactions);
}

module.exports = {
  submitAccountTransaction,
  editAccountTransaction,
  fetchAllAccountTransactionsByAccountId,
};
