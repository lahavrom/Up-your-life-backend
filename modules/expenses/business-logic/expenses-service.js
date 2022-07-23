const expensesDataAccess = require("../data-access/expenses-data-access");
const {
  ExpenseModelToDtoMapper,
} = require("./dto/expense-model-to-dto-mapper");

const expenseMapper = new ExpenseModelToDtoMapper();

async function submitExpense(expenseValues) {
  const expense = await expensesDataAccess.submitExpense(expenseValues);
  return expenseMapper.convert(expense);
}

module.exports = {
  submitExpense,
};
