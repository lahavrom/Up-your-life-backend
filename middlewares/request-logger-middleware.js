const { generateNowTimestamp } = require("../helpers/utils");

function requestLogger(req, _, next) {
  console.log(`${req.method} ${req.path} at ${generateNowTimestamp()}`);
  next();
}

module.exports = requestLogger;
