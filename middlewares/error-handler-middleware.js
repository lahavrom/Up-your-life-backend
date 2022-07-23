const { STATUS_CODES } = require("../helpers/constants");

function errorHandler(err, _, res, _) {
  const status = err.statusCode || STATUS_CODES.ERROR.SERVER.INTERNAL;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message });
}

module.exports = errorHandler;
