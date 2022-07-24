const express = require("express");

const {
  validateSubmitFixedEventSchema,
} = require("./middlewares/fixed-event-validation-middleware");
const fixedEventsController = require("./fixed-events-controller");

const fixedEventsRouter = express.Router();

fixedEventsRouter.post(
  "/",
  validateSubmitFixedEventSchema(),
  fixedEventsController.submitFixedEvent
);

module.exports = fixedEventsRouter;
