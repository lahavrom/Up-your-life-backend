const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

function generateAuthToken(uId) {
  return jwt.sign({ uId }, process.env.JWT_PRIVATE_KEY);
}

module.exports = {
  hashPassword,
  validatePassword,
  generateAuthToken,
};
