const { AccountEvent } = require("../../../storage/database/models");

async function submitAccountEvent(values) {
  return await AccountEvent.create(values);
}

async function submitMultipleAccountEvents(values) {
  return await AccountEvent.bulkCreate(values);
}

module.exports = {
  submitAccountEvent,
  submitMultipleAccountEvents,
};
