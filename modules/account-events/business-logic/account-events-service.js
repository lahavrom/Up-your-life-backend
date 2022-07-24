const accountEventsDataAccess = require("../data-access/account-events-data-access");
const {
  AccountEventModelToDtoMapper,
} = require("./dto/account-event-model-to-dto-mapper");

const accountEventMapper = new AccountEventModelToDtoMapper();

async function submitAccountEvent(values) {
  const accountEvent = await accountEventsDataAccess.submitAccountEvent(values);
  return accountEventMapper.convert(accountEvent);
}

module.exports = {
  submitAccountEvent,
};
