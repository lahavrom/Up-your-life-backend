const { AccountEvent } = require("../../../storage/database/models");

async function submitAccountEvent(values) {
  return await AccountEvent.create(values);
}

async function submitMultipleAccountEvents(values) {
  return await AccountEvent.bulkCreate(values);
}

async function fetchAllAccountEventsByUserId(uId) {
  return await AccountEvent.findAll({
    where: {
      uId,
    },
  });
}

module.exports = {
  submitAccountEvent,
  submitMultipleAccountEvents,
  fetchAllAccountEventsByUserId,
};
