const express = require("express");

const {
  validateAuthentication,
} = require("../../users/client/middlewares/user-auth-middleware");
const {
  validateAuthorization,
} = require("./middlewares/account-auth-middleware");
const {
  validateRegisterAccountSchema,
} = require("./middlewares/acount-validation-middleware");
const accountsController = require("./accounts-controller");

const accountsRouter = express.Router();

accountsRouter.post(
  "/",
  [validateAuthentication, validateRegisterAccountSchema()],
  accountsController.registerMultipleAccounts
);

accountsRouter.get(
  "/:accountId/users",
  [validateAuthentication, validateAuthorization],
  accountsController.fetchAccountUsers
);

module.exports = accountsRouter;
