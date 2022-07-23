const incomesDataAccess = require("../data-access/incomes-data-access");
const { IncomeModelToDtoMapper } = require("./dto/income-model-to-dto-mapper");

const incomeMapper = new IncomeModelToDtoMapper();

async function submitIncome(incomeValues) {
  const income = await incomesDataAccess.submitIncome(incomeValues);
  return incomeMapper.convert(income);
}

module.exports = {
  submitIncome,
};
