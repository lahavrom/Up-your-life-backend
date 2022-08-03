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

class NoTokenProvidedError extends Error {
  constructor() {
    super("Access denied. No token provided");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.UNAUTHORIZED;
  }
}

class UnauthorizedUserError extends Error {
  constructor() {
    super("Access denied. Unauthorized user");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.UNAUTHORIZED;
  }
}

class InvalidTokenError extends Error {
  constructor() {
    super("Invalid token");
    this.statusCode = STATUS_CODES.ERROR.CLIENT.BAD_REQUEST;
  }
}

module.exports = {
  InvalidCredentialsError,
  EmailAddressAlreadyInUseError,
  NoTokenProvidedError,
  InvalidTokenError,
  UnauthorizedUserError,
};
