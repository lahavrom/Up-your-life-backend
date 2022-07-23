require("express-async-errors");
const bodyParser = require("body-parser");
const express = require("express");

// middlewares
const requestLogger = require("./middlewares/request-logger-middleware");
const errorHandler = require("./middlewares/error-handler-middleware");
// routes

const app = express();

process.on("unhandledRejection", (reason, _) => {
  console.error("Unhandled Rejection", reason.message);
  throw reason;
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception", error.message);
  throw error;
});

app.use(requestLogger);
app.use(bodyParser.json());
app.use(errorHandler);

module.exports = app;
