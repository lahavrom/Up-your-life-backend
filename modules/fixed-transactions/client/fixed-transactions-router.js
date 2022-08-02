const express = require("express");

const {
  validateSubmitFixedTransactionSchema,
  validateEditFixedTransactionSchema,
  validateChangeFixedTransactionStatusSchema,
} = require("./middlewares/fixed-transaction-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const fixedTransactionsController = require("./fixed-transactions-controller");

const fixedTransactionsRouter = express.Router();

// submit
fixedTransactionsRouter.post(
  "/",
  [validateAuthToken, validateSubmitFixedTransactionSchema()],
  fixedTransactionsController.submitFixedTransaction
);

// edit
fixedTransactionsRouter.put(
  "/:id",
  [validateAuthToken, validateEditFixedTransactionSchema()],
  fixedTransactionsController.editFixedTransaction
);

// change status
fixedTransactionsRouter.patch(
  "/:id",
  [validateAuthToken, validateChangeFixedTransactionStatusSchema()],
  fixedTransactionsController.changeFixedTransactionStatus
);

// fetch all
fixedTransactionsRouter.get(
  "/:accountId",
  validateAuthToken,
  fixedTransactionsController.fetchAllFixedTransactionsByAccountId
);

module.exports = fixedTransactionsRouter;
