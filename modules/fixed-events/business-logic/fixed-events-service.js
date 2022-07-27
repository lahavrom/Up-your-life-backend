const fixedEventsDataAccess = require("../data-access/fixed-events-data-access");
const {
  FixedEventModelToDtoMapper,
} = require("./dto/fixed-event-model-to-dto-mapper");

const fixedEventMapper = new FixedEventModelToDtoMapper();

async function submitFixedEvent(values) {
  const fixedEvent = await fixedEventsDataAccess.submitFixedEvent(values);
  return fixedEventMapper.convert(fixedEvent);
}

async function fetchAllFixedEventsByUserId(uId) {
  const fixedEvents = await fixedEventsDataAccess.fetchAllFixedEventsByUserId(
    uId
  );
  return fixedEvents.map((fixedEvent) => fixedEventMapper.convert(fixedEvent));
}

module.exports = {
  submitFixedEvent,
  fetchAllFixedEventsByUserId,
};
