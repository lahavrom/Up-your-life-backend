const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const registerAccountSchema = {
  accountId: {
    exists: {
      errorMessage: "Account id is required",
    },
    in: ["body"],
  },
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    in: ["body"],
  },
};

function validateRegisterAccountSchema() {
  return validateSchema(registerAccountSchema);
}

module.exports = {
  validateRegisterAccountSchema,
};
