const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const incomesService = require("../business-logic/incomes-service");

async function submitIncome(req, res) {
  const incomeValues = _.pick(req.body, [
    "uId",
    "type",
    "amount",
    "category",
    "description",
    "month",
    "year",
  ]);
  const income = await incomesService.submitIncome(incomeValues);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(income);
}

module.exports = {
  submitIncome,
};
