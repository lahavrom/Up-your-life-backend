const express = require("express");

const {
  validateSubmitAccountTransactionSchema,
} = require("./middlewares/account-transaction-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const accountTransactionsController = require("./account-transactions-controller");

const accountTransactionsRouter = express.Router();

accountTransactionsRouter.post(
  "/",
  validateSubmitAccountTransactionSchema(),
  accountTransactionsController.submitAccountTransaction
);

accountTransactionsRouter.get(
  "/:accountId",
  validateAuthToken,
  accountTransactionsController.fetchAllAccountTransactionsByAccountId
);

module.exports = accountTransactionsRouter;
