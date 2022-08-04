const { STATUS_CODES } = require("../../../helpers/constants");

class UnauthorizedUserError extends Error {
  constructor() {
    super("Access denied. Unauthorized user");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.UNAUTHORIZED;
  }
}

module.exports = {
  UnauthorizedUserError,
};
