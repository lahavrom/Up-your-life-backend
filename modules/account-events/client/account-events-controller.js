const _ = require("lodash");

const { STATUS_CODES } = require("../../../helpers/constants");
const accountEventsService = require("../business-logic/account-events-service");

async function submitAccountEvent(req, res) {
  const values = _.pick(req.body, [
    "uId",
    "type",
    "category",
    "description",
    "value",
    "effectiveDate",
  ]);
  const accountEvent = await accountEventsService.submitAccountEvent(values);
  res.status(STATUS_CODES.SUCCESS.CREATED).json(accountEvent);
}

module.exports = {
  submitAccountEvent,
};
