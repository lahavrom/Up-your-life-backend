const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitAccountTransactionSchema = {
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
  effectiveDate: {
    exists: {
      errorMessage: "Effective date is required",
    },
    in: ["body"],
  },
};

function validateSubmitAccountTransactionSchema() {
  return validateSchema(submitAccountTransactionSchema);
}

const editAccountTransactionSchema = {
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
  effectiveDate: {
    exists: {
      errorMessage: "Effective date is required",
    },
    in: ["body"],
  },
};

function validateEditAccountTransactionSchema() {
  return validateSchema(editAccountTransactionSchema);
}

module.exports = {
  validateSubmitAccountTransactionSchema,
  validateEditAccountTransactionSchema,
};
