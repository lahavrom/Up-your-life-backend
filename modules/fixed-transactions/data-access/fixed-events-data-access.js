const { FixedEvent } = require("../../../storage/database/models");

async function fetchAllFixedEventByDayOfMonth(dayOfMonth) {
  return await FixedEvent.findAll({
    where: {
      dayOfMonth,
    },
  });
}

async function fetchAllFixedEventsByUserId(userId) {
  return await FixedEvent.findAll({
    where: {
      userId,
    },
  });
}

async function submitFixedEvent(values) {
  return await FixedEvent.create(values);
}

module.exports = {
  fetchAllFixedEventByDayOfMonth,
  fetchAllFixedEventsByUserId,
  submitFixedEvent,
};
