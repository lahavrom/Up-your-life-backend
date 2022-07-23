const express = require("express");

const {
  validateRegisterUserSchema,
} = require("./middlewares/user-validation-middleware");
const usersController = require("./users-controller");

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateRegisterUserSchema(),
  usersController.registerUser
);

module.exports = usersRouter;
