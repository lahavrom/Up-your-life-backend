const { STATUS_CODES } = require("../../../helpers/constants");

class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
  }
}

class EmailAddressAlreadyInUseError extends Error {
  constructor() {
    super("User with this email address is already registered");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
  }
}

module.exports = { InvalidCredentialsError, EmailAddressAlreadyInUseError };
