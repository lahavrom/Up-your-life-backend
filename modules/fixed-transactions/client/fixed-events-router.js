const express = require("express");

const {
  validateSubmitFixedEventSchema,
} = require("./middlewares/fixed-event-validation-middleware");
const {
  validateAuthToken,
} = require("../../users/client/middlewares/user-auth-middleware");
const fixedEventsController = require("./fixed-events-controller");

const fixedEventsRouter = express.Router();

fixedEventsRouter.post(
  "/",
  validateSubmitFixedEventSchema(),
  fixedEventsController.submitFixedEvent
);

fixedEventsRouter.get(
  "/:uId",
  validateAuthToken,
  fixedEventsController.fetchAllFixedEventsByUserId
);

module.exports = fixedEventsRouter;
