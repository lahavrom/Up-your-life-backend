const { AccountEvent } = require("../../../storage/database/models");

async function submitAccountEvent(values) {
  return await AccountEvent.create(values);
}

module.exports = {
  submitAccountEvent,
};
