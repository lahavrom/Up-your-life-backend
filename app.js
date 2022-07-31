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
const accountTransactionsRouter = require("./modules/account-transactions/client/account-transactions-router");
const fixedTransactionsRouter = require("./modules/fixed-transactions/client/fixed-transactions-router");
//
const transactionsService = require("./transactionsService");

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
  transactionsService.checkForNewAccountTransactions();
});

app.use(cors(corsOptions));
app.use(requestLogger);
app.use(express.json());

app.use("/users", usersRouter);
app.use("/account-transactions", accountTransactionsRouter);
app.use("/fixed-transactions", fixedTransactionsRouter);

app.use(errorHandler);

module.exports = app;
