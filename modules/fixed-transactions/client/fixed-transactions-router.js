const express = require("express");

const {
  validateSubmitFixedTransactionSchema,
  validateEditFixedTransactionSchema,
} = require("./middlewares/fixed-transaction-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const fixedTransactionsController = require("./fixed-transactions-controller");

const fixedTransactionsRouter = express.Router();

fixedTransactionsRouter.post(
  "/",
  [validateAuthToken, validateSubmitFixedTransactionSchema()],
  fixedTransactionsController.submitFixedTransaction
);

fixedTransactionsRouter.put(
  "/:id",
  [validateAuthToken, validateEditFixedTransactionSchema()],
  fixedTransactionsController.editFixedTransaction
);

fixedTransactionsRouter.get(
  "/:accountId",
  validateAuthToken,
  fixedTransactionsController.fetchAllFixedTransactionsByAccountId
);

module.exports = fixedTransactionsRouter;
