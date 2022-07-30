const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitFixedEventSchema = {
  accountId: {
    exists: {
      errorMessage: "Account id is required",
    },
    in: ["body"],
  },
  userId: {
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
  category: {
    exists: {
      errorMessage: "Category is required",
    },
    in: ["body"],
  },
  description: {
    exists: {
      errorMessage: "Description is required",
    },
    in: ["body"],
  },
  value: {
    exists: {
      errorMessage: "Value is required",
    },
    in: ["body"],
  },
  dayOfMonth: {
    exists: {
      errorMessage: "Day of month is required",
    },
    in: ["body"],
  },
};

function validateSubmitFixedEventSchema() {
  return validateSchema(submitFixedEventSchema);
}

module.exports = {
  validateSubmitFixedEventSchema,
};
