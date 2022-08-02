const express = require("express");

const {
  validateSubmitAccountTransactionSchema,
  validateEditAccountTransactionSchema,
  validateChangeAccountTransactionStatusSchema,
} = require("./middlewares/account-transaction-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const accountTransactionsController = require("./account-transactions-controller");

const accountTransactionsRouter = express.Router();

// submit
accountTransactionsRouter.post(
  "/",
  [validateAuthToken, validateSubmitAccountTransactionSchema()],
  accountTransactionsController.submitAccountTransaction
);

// edit
accountTransactionsRouter.put(
  "/:id",
  [validateAuthToken, validateEditAccountTransactionSchema()],
  accountTransactionsController.editAccountTransaction
);

// change status
accountTransactionsRouter.patch(
  "/:id",
  [validateAuthToken, validateChangeAccountTransactionStatusSchema()],
  accountTransactionsController.changeAccountTransactionStatus
);

// fetch all
accountTransactionsRouter.get(
  "/:accountId",
  validateAuthToken,
  accountTransactionsController.fetchAllAccountTransactionsByAccountId
);

module.exports = accountTransactionsRouter;
