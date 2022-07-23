const express = require("express");

const {
  validateSubmitUserSchema,
} = require("./middlewares/user-validation-middleware");
const usersController = require("./users-controller");

const usersRouter = express.Router();

usersRouter.post("/", validateSubmitUserSchema(), usersController.submitUser);

module.exports = usersRouter;
