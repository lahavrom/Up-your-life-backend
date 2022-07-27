const jwt = require("jsonwebtoken");

const {
  NoTokenProvidedError,
  InvalidTokenError,
} = require("../../helpers/errors");

function validateAuthToken(req, _, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    throw new NoTokenProvidedError();
  }
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decodedToken;
    next();
  } catch (error) {
    throw new InvalidTokenError();
  }
}

module.exports = { validateAuthToken };
