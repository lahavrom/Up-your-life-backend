const fixedEventsDataAccess = require("./modules/fixed-events/data-access/fixed-events-data-access");
const accountEventsDataAccess = require("./modules/account-events/data-access/account-events-data-access");
const {
  BareFixedEventModelToDtoMapper,
} = require("./modules/fixed-events/business-logic/dto/fixed-event-model-to-dto-mapper");
const { generateNowTimestamp } = require("./helpers/utils");

const bareFixedEventMapper = new BareFixedEventModelToDtoMapper();

async function checkForNewAccountEvents() {
  const day = new Date().getDate();
  const fixedEvents =
    await fixedEventsDataAccess.fetchAllFixedEventByDayOfMonth(day);
  if (!fixedEvents.length) {
    return;
  }
  createAndSubmitAccountEvents(fixedEvents);
}

async function createAndSubmitAccountEvents(fixedEvents) {
  const nowTimestamp = generateNowTimestamp();
  const newAccountEvents = fixedEvents
    .map((fixedEvent) => bareFixedEventMapper.convert(fixedEvent))
    .map((bareFixedEvent) => ({
      ...bareFixedEvent,
      effectiveDate: nowTimestamp,
    }));
  await accountEventsDataAccess.submitMultipleAccountEvents(newAccountEvents);
}

module.exports = {
  checkForNewAccountEvents,
};
