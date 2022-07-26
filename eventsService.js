const fixedEventsDataAccess = require("./modules/fixed-events/data-access/fixed-events-data-access");
const accountEventsDataAccess = require("./modules/account-events/data-access/account-events-data-access");
const {
  BareFixedEventModelToDtoMapper,
} = require("./modules/fixed-events/business-logic/dto/fixed-event-model-to-dto-mapper");
const {
  getCurrentDayOfMonth,
  generateNowTimestamp,
} = require("./helpers/utils");

const bareFixedEventMapper = new BareFixedEventModelToDtoMapper();

async function checkForNewAccountEvents() {
  const today = getCurrentDayOfMonth();
  const fixedEvents =
    await fixedEventsDataAccess.fetchAllFixedEventByDayOfMonth(today);
  if (!fixedEvents.length) {
    return;
  }
  createAndSubmitAccountEvents(fixedEvents);
}

async function createAndSubmitAccountEvents(fixedEvents) {
  const nowTimestamp = generateNowTimestamp();
  const accountEvents = fixedEvents.map((fixedEvent) => ({
    ...bareFixedEventMapper.convert(fixedEvent),
    effectiveDate: nowTimestamp,
  }));
  await accountEventsDataAccess.submitMultipleAccountEvents(accountEvents);
}

module.exports = {
  checkForNewAccountEvents,
};
