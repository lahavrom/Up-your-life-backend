const express = require("express");

const {
  validateSubmitAccountEventSchema,
} = require("./middlewares/account-event-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const accountEventsController = require("./account-events-controller");

const accountEventsRouter = express.Router();

accountEventsRouter.post(
  "/",
  validateSubmitAccountEventSchema(),
  accountEventsController.submitAccountEvent
);

accountEventsRouter.get(
  "/:uId",
  validateAuthToken,
  accountEventsController.fetchAllAccountEventsByUserId
);

module.exports = accountEventsRouter;
