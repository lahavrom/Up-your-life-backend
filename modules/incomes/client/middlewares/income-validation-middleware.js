const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitIncomeSchema = {
  uId: {
    exists: {
      errorMessage: "User id is required",
    },
    in: ["body"],
  },
  type: {
    exists: {
      errorMessage: "Type is required",
    },
    in: ["body"],
  },
  value: {
    exists: {
      errorMessage: "Value is required",
    },
    in: ["body"],
  },
  description: {
    exists: {
      errorMessage: "Description is required",
    },
    in: ["body"],
  },
  month: {
    exists: {
      errorMessage: "Month is required",
    },
    in: ["body"],
  },
  year: {
    exists: {
      errorMessage: "Year is required",
    },
    in: ["body"],
  },
};

function validateSubmitIncomeSchema() {
  return validateSchema(submitIncomeSchema);
}

module.exports = {
  validateSubmitIncomeSchema,
};
