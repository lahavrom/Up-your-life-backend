const express = require("express");

const { validateAuthToken } = require("./middlewares/account-auth-middleware");
const {
  validateRegisterAccountSchema,
} = require("./middlewares/acount-validation-middleware");
const accountsController = require("./accounts-controller");

const accountsRouter = express.Router();

accountsRouter.post(
  "/",
  validateRegisterAccountSchema(),
  accountsController.registerAccount
);

accountsRouter.get(
  "/:accountId/users",
  validateAuthToken,
  accountsController.fetchAccountUsers
);

module.exports = accountsRouter;
