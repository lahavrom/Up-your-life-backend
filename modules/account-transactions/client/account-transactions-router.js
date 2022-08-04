const express = require("express");

const {
  validateSubmitAccountTransactionSchema,
  validateEditAccountTransactionSchema,
  validateChangeAccountTransactionStatusSchema,
} = require("./middlewares/account-transaction-validation-middleware");
const {
  validateAuthentication,
} = require("../../users/client/middlewares/user-auth-middleware");
const accountTransactionsController = require("./account-transactions-controller");

const accountTransactionsRouter = express.Router();

// submit
accountTransactionsRouter.post(
  "/",
  [validateAuthentication, validateSubmitAccountTransactionSchema()],
  accountTransactionsController.submitAccountTransaction
);

// edit
accountTransactionsRouter.put(
  "/:id",
  [validateAuthentication, validateEditAccountTransactionSchema()],
  accountTransactionsController.editAccountTransaction
);

// change status
accountTransactionsRouter.patch(
  "/:id",
  [validateAuthentication, validateChangeAccountTransactionStatusSchema()],
  accountTransactionsController.changeAccountTransactionStatus
);

// fetch all
accountTransactionsRouter.get(
  "/:accountId",
  validateAuthentication,
  accountTransactionsController.fetchAllAccountTransactionsByAccountId
);

module.exports = accountTransactionsRouter;
