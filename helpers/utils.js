function generateNowTimestamp() {
  return new Date().valueOf();
}

function getCurrentDayOfMonth() {
  return new Date().getDate();
}

module.exports = {
  generateNowTimestamp,
  getCurrentDayOfMonth,
};
