const express = require("express");

const { validateAuthToken } = require("./middlewares/account-auth-middleware");
const accountsController = require("./accounts-controller");

const accountsRouter = express.Router();

accountsRouter.get(
  "/:accountId",
  validateAuthToken,
  accountsController.fetchUserAccount
);

accountsRouter.get(
  "/:accountId/users",
  validateAuthToken,
  accountsController.fetchAccountUsers
);

module.exports = accountsRouter;
