const express = require("express");

const {
  validateSubmitFixedTransactionSchema,
} = require("./middlewares/fixed-transaction-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const fixedTransactionsController = require("./fixed-transactions-controller");

const fixedTransactionsRouter = express.Router();

fixedTransactionsRouter.post(
  "/",
  validateSubmitFixedTransactionSchema(),
  fixedTransactionsController.submitFixedTransaction
);

fixedTransactionsRouter.get(
  "/:accountId",
  validateAuthToken,
  fixedTransactionsController.fetchAllFixedTransactionsByAccountId
);

module.exports = fixedTransactionsRouter;
