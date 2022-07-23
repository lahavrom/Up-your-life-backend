const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const expensesService = require("../business-logic/expenses-service");

async function submitExpense(req, res) {
  const expenseValues = _.pick(req.body, [
    "uId",
    "type",
    "cost",
    "category",
    "description",
    "month",
    "year",
  ]);
  const expense = await expensesService.submitExpense(expenseValues);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(expense);
}

module.exports = {
  submitExpense,
};
