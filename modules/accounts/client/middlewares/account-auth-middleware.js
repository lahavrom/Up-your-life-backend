const { UnauthorizedUserError } = require("../../helpers/errors");

function validateAuthorization(req, _, next) {
  const { accountId } = req.user;
  if (accountId !== req.params.accountId) {
    throw new UnauthorizedUserError();
  }
  next();
}

module.exports = { validateAuthorization };
