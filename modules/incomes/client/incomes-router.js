const express = require("express");

const {
  validateSubmitIncomeSchema,
} = require("./middlewares/income-validation-middleware");
const incomesController = require("./incomes-controller");

const incomesRouter = express.Router();

incomesRouter.post(
  "/",
  validateSubmitIncomeSchema(),
  incomesController.submitIncome
);

module.exports = incomesRouter;
