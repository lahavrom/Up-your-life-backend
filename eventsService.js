const _ = require("lodash");

const fixedEventsDataAccess = require("./modules/fixed-events/data-access/fixed-events-data-access");
const accountEventsDataAccess = require("./modules/account-events/data-access/account-events-data-access");
const {
  FixedEventModelToDtoMapper,
} = require("./modules/fixed-events/business-logic/dto/fixed-event-model-to-dto-mapper");
const { generateNowTimestamp } = require("./helpers/utils");

const fixedEventMapper = new FixedEventModelToDtoMapper();

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
    .map((fixedEvent) => fixedEventMapper.convert(fixedEvent))
    .map((mappedFixedEvent) => _.omit(mappedFixedEvent, "dayOfMonth"))
    .map((obj) => ({ ...obj, effectiveDate: nowTimestamp }));
  await accountEventsDataAccess.submitMultipleAccountEvents(newAccountEvents);
}

module.exports = {
  checkForNewAccountEvents,
};
