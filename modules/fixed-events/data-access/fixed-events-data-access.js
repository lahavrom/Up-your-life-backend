const { FixedEvent } = require("../../../storage/database/models");

async function fetchAllFixedEventByDayOfMonth(dayOfMonth) {
  return await FixedEvent.findAll({
    where: {
      dayOfMonth,
    },
  });
}

async function submitFixedEvent(values) {
  return await FixedEvent.create(values);
}

module.exports = {
  fetchAllFixedEventByDayOfMonth,
  submitFixedEvent,
};
