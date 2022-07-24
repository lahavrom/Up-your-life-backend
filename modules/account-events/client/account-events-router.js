const express = require("express");

const {
  validateSubmitAccountEventSchema,
} = require("./middlewares/account-event-validation-middleware");
const accountEventsController = require("./account-events-controller");

const accountEventsRouter = express.Router();

accountEventsRouter.post(
  "/",
  validateSubmitAccountEventSchema(),
  accountEventsController.submitAccountEvent
);

module.exports = accountEventsRouter;
