const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitTodoSchema = {
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
  return validateSchema(submitTodoSchema);
}

module.exports = {
  validateSubmitUserSchema,
};
