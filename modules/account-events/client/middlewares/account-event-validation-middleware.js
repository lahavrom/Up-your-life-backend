const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitAccountEventSchema = {
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
  effectiveDate: {
    exists: {
      errorMessage: "Effective date is required",
    },
    in: ["body"],
  },
};

function validateSubmitAccountEventSchema() {
  return validateSchema(submitAccountEventSchema);
}

module.exports = {
  validateSubmitAccountEventSchema,
};
