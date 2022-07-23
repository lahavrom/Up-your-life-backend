const express = require("express");

const {
  validateSubmitExpenseSchema,
} = require("./middlewares/expense-validation-middleware");
const expensesController = require("./expenses-controller");

const expensesRouter = express.Router();

expensesRouter.post(
  "/",
  validateSubmitExpenseSchema(),
  expensesController.submitExpense
);

module.exports = expensesRouter;
