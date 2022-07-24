const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const fixedEventsService = require("../business-logic/fixed-events-service");

async function submitFixedEvent(req, res) {
  const values = _.pick(req.body, [
    "uId",
    "type",
    "value",
    "description",
    "dayOfMonth",
  ]);
  const fixedEvent = await fixedEventsService.submitFixedEvent(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(fixedEvent);
}

module.exports = {
  submitFixedEvent,
};
