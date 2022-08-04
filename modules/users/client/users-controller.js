const _ = require("lodash");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadImage, S3 } = require("../../../s3");

const { STATUS_CODES } = require("../../../helpers/constants");
const usersService = require("../business-logic/users-service");

async function registerUser(req, res) {
  const values = _.pick(req.body, [
    "firstName",
    "lastName",
    "email",
    "password",
  ]);
  const { token, user } = await usersService.registerUser(values);
  res
    .status(STATUS_CODES.SUCCESS.CREATED)
    .header("x-auth-token", token)
    .json(user);
}

async function loginUser(req, res) {
  const values = _.pick(req.body, ["email", "password"]);
  const { token, user } = await usersService.loginUser(values);
  res.status(STATUS_CODES.SUCCESS.OK).header("x-auth-token", token).json(user);
}

async function fetchUser(req, res) {
  const { userId } = req.user;
  const user = await usersService.fetchUser(userId);
  res.status(STATUS_CODES.SUCCESS.OK).json(user);
}

async function updateUserProfileImage(req, res) {
  upload.single("image");
  const file = req.file;
  const result = await uploadImage(file);
  const { userId } = req.user;
  const profileImage = S3.getSignedUrl("getObject", {
    Key: `images/${file.originalname}`,
  });
  await usersService.updateUserProfileImage(userId, profileImage);
  res
    .send(STATUS_CODES.SUCCESS.OK)
    .json({ imagePath: `/images/${result.Key}` });
}

module.exports = {
  registerUser,
  loginUser,
  fetchUser,
  updateUserProfileImage,
};
