const fixedTransactionsDataAccess = require("./modules/fixed-transactions/data-access/fixed-transactions-data-access");
const accountTransactionsDataAccess = require("./modules/account-transactions/data-access/account-transactions-data-access");
const {
  BareFixedTransactionModelToDtoMapper,
} = require("./modules/fixed-transactions/business-logic/dto/fixed-transaction-model-to-dto-mapper");
const {
  getCurrentDayOfMonth,
  generateNowTimestamp,
} = require("./helpers/utils");

const bareFixedTransactionMapper = new BareFixedTransactionModelToDtoMapper();

async function checkForNewAccountTransactions() {
  const today = getCurrentDayOfMonth();
  const fixedTransactions =
    await fixedTransactionsDataAccess.fetchAllFixedTransactionsByDayOfMonth(
      today
    );
  if (!fixedTransactions.length) {
    return;
  }
  createAndSubmitAccountTransactions(fixedTransactions);
}

async function createAndSubmitAccountTransactions(fixedTransactions) {
  const nowTimestamp = generateNowTimestamp();
  const accountTransactions = fixedTransactions.map((fixedTransaction) => ({
    ...bareFixedTransactionMapper.convert(fixedTransaction),
    effectiveDate: nowTimestamp,
  }));
  await accountTransactionsDataAccess.submitMultipleAccountTransactions(
    accountTransactions
  );
}

module.exports = {
  checkForNewAccountTransactions,
};
