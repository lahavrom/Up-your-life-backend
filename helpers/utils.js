const bcrypt = require("bcrypt");

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

async function validatePassword(password, hashedPassword) {
  return await bcrypt.compare(password, hashedPassword);
}

function generateNowTimestamp() {
  return new Date().valueOf();
}

module.exports = {
  hashPassword,
  validatePassword,
  generateNowTimestamp,
};
