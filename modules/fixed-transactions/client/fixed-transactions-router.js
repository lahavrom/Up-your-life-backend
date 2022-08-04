const express = require("express");

const {
  validateSubmitFixedTransactionSchema,
  validateEditFixedTransactionSchema,
  validateChangeFixedTransactionStatusSchema,
} = require("./middlewares/fixed-transaction-validation-middleware");
const {
  validateAuthentication,
} = require("../../users/client/middlewares/user-auth-middleware");
const fixedTransactionsController = require("./fixed-transactions-controller");

const fixedTransactionsRouter = express.Router();

// submit
fixedTransactionsRouter.post(
  "/",
  [validateAuthentication, validateSubmitFixedTransactionSchema()],
  fixedTransactionsController.submitFixedTransaction
);

// edit
fixedTransactionsRouter.put(
  "/:id",
  [validateAuthentication, validateEditFixedTransactionSchema()],
  fixedTransactionsController.editFixedTransaction
);

// change status
fixedTransactionsRouter.patch(
  "/:id",
  [validateAuthentication, validateChangeFixedTransactionStatusSchema()],
  fixedTransactionsController.changeFixedTransactionStatus
);

// fetch all
fixedTransactionsRouter.get(
  "/:accountId",
  validateAuthentication,
  fixedTransactionsController.fetchAllFixedTransactionsByAccountId
);

module.exports = fixedTransactionsRouter;
