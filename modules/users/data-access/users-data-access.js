const { User, sequelize } = require("../../../storage/database/models");
const { EmailAddressAlreadyInUseError } = require("../helpers/errors");

const SEQUELIZE_UNIQUE_ERROR = "SequelizeUniqueConstraintError";

async function registerUser(values) {
  try {
    return await sequelize.transaction(async () => await User.create(values));
  } catch (error) {
    throw error.name === SEQUELIZE_UNIQUE_ERROR
      ? new EmailAddressAlreadyInUseError()
      : error;
  }
}

async function findUserByEmail(email) {
  return await User.findOne({
    where: {
      email,
    },
  });
}

async function findUserByUserId(userId) {
  return await User.findOne({
    where: {
      userId,
    },
  });
}

async function findUsersByAccountId(accountId) {
  return await User.findAll({
    where: {
      accountId,
    },
  });
}

async function updateUserProfileImage(userId, isProfileImage) {
  await User.update(
    {
      isProfileImage,
    },
    {
      where: {
        userId,
      },
    }
  );
}

module.exports = {
  registerUser,
  findUserByEmail,
  findUserByUserId,
  findUsersByAccountId,
  updateUserProfileImage,
};
