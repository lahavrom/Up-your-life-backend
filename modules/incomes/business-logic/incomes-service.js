const incomesDataAccess = require("../data-access/incomes-data-access");

async function submitIncome(incomeValues) {
  const income = await incomesDataAccess.submitIncome(incomeValues);
  return income;
}

module.exports = {
  submitIncome,
};
