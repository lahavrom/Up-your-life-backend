const express = require("express");

const {
  validateRegisterUserSchema,
  validateLoginUserSchema,
} = require("./middlewares/user-validation-middleware");
const {
  validateAuthentication,
} = require("./middlewares/user-auth-middleware");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadImage } = require("../../../s3");

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

usersRouter.get("/me", validateAuthentication, usersController.fetchUser);

usersRouter.post(
  "/upload-image",
  upload.single("image"),
  async (req, res, next) => {
    const file = req.file;
    const result = await uploadImage(file);
    res.send(200).json({ imagePath: `/images/${result.Key}` });
  }
);

module.exports = usersRouter;
