const { FixedEvent } = require("../../../storage/database/models");

async function submitFixedEvent(values) {
  return await FixedEvent.create(values);
}

module.exports = {
  submitFixedEvent,
};
