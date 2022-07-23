const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitUserSchema = {
  firstName: {
    exists: {
      errorMessage: "First name is required",
    },
    in: ["body"],
  },
  lastName: {
    exists: {
      errorMessage: "Last name is required",
    },
    in: ["body"],
  },
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Please provide valid email",
    },
    in: ["body"],
  },
};

function validateSubmitUserSchema() {
  return validateSchema(submitUserSchema);
}

module.exports = {
  validateSubmitUserSchema,
};
