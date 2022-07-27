const express = require("express");

const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
} = require("./middlewares/user-validation-middleware");
const { validateAuthToken } = require("./middlewares/user-auth-middleware");
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

usersRouter.get("/me", validateAuthToken, usersController.fetchUser);

module.exports = usersRouter;
