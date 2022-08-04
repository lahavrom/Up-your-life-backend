const jwt = require("jsonwebtoken");

const {
  NoTokenProvidedError,
  InvalidTokenError,
  UnauthorizedUserError,
} = require("../../../users/helpers/errors");

function validateAuthToken(req, _, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    throw new NoTokenProvidedError();
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decodedToken;
    const { accountId } = req.user;
    if (accountId !== req.params.accountId) {
      throw new UnauthorizedUserError();
    }
    next();
  } catch (error) {
    throw error instanceof UnauthorizedUserError
      ? error
      : new InvalidTokenError();
  }
}

module.exports = { validateAuthToken };
