const expensesDataAccess = require("../data-access/expenses-data-access");

async function submitExpense(expenseValues) {
  const expense = await expensesDataAccess.submitExpense(expenseValues);
  return expense;
}

module.exports = {
  submitExpense,
};
