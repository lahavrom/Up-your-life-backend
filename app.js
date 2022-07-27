require("express-async-errors");
const express = require("express");
const cron = require("node-cron");
const cors = require("cors");

const corsOptions = {
  exposedHeaders: "x-auth-token",
};

// middlewares
const requestLogger = require("./middlewares/request-logger-middleware");
const errorHandler = require("./middlewares/error-handler-middleware");
// routes
const usersRouter = require("./modules/users/client/users-router");
const accountEventsRouter = require("./modules/account-events/client/account-events-router");
const fixedEventsRouter = require("./modules/fixed-events/client/fixed-events-router");
//
const eventsService = require("./eventsService");

const app = express();

process.on("unhandledRejection", (reason, _) => {
  console.error("Unhandled Rejection", reason.message);
  throw reason;
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception", error.message);
  throw error;
});

cron.schedule("0 0 * * *", () => {
  eventsService.checkForNewAccountEvents();
});

app.use(cors(corsOptions));
app.use(requestLogger);
app.use(express.json());

app.use("/users", usersRouter);
app.use("/account-events", accountEventsRouter);
app.use("/fixed-events", fixedEventsRouter);

app.use(errorHandler);

module.exports = app;
