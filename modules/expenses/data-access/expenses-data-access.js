const { Expense } = require("../../../storage/database/models");

async function submitExpense(expenseValues) {
  return await Expense.create(expenseValues);
}

module.exports = {
  submitExpense,
};
