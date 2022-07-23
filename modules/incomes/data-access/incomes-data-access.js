const { Income } = require("../../../storage/database/models");

async function submitIncome(incomeValues) {
	return await Income.create(incomeValues);
}

module.exports = {
	submitIncome,
};
