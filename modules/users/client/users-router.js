const express = require("express");

const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
} = require("./middlewares/user-validation-middleware");
const usersController = require("./users-controller");

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateRegisterUserSchema(),
  usersController.registerUser
);

usersRouter.post(
  "/login",
  validateLoginUserSchema(),
  usersController.loginUser
);

module.exports = usersRouter;
