const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const registerUserSchema = {
  accountId: {
    exists: {
      errorMessage: "Account id is required",
    },
    in: ["body"],
  },
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
  password: {
    exists: {
      errorMessage: "Password is required",
    },
    in: ["body"],
  },
};

const loginUserSchema = {
  email: {
    exists: {
      errorMessage: "Email is required",
    },
    isEmail: {
      errorMessage: "Please provide valid email",
    },
    in: ["body"],
  },
  password: {
    exists: {
      errorMessage: "Password is required",
    },
    in: ["body"],
  },
};

function validateRegisterUserSchema() {
  return validateSchema(registerUserSchema);
}

function validateLoginUserSchema() {
  return validateSchema(loginUserSchema);
}

module.exports = {
  validateRegisterUserSchema,
  validateLoginUserSchema,
};
