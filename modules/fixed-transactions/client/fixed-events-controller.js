const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const fixedEventsService = require("../business-logic/fixed-events-service");

async function submitFixedEvent(req, res) {
  const values = _.pick(req.body, [
    "accountId",
    "userId",
    "type",
    "category",
    "description",
    "value",
    "dayOfMonth",
  ]);
  const fixedEvent = await fixedEventsService.submitFixedEvent(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(fixedEvent);
}

async function fetchAllFixedEventsByUserId(req, res) {
  const { userId } = req.params;
  const fixedEvents = await fixedEventsService.fetchAllFixedEventsByUserId(
    userId
  );
  res.status(STATUS_CODES.SUCCESS.OK).json(fixedEvents);
}

module.exports = {
  submitFixedEvent,
  fetchAllFixedEventsByUserId,
};
