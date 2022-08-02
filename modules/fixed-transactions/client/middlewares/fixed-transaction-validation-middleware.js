const {
  validateSchema,
} = require("../../../../middlewares/input-validation-middleware");

const submitFixedTransactionSchema = {
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

function validateSubmitFixedTransactionSchema() {
  return validateSchema(submitFixedTransactionSchema);
}

const editFixedTransactionSchema = {
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

function validateEditFixedTransactionSchema() {
  return validateSchema(editFixedTransactionSchema);
}

const changeFixedTransactionStatusSchema = {
  status: {
    exists: {
      errorMessage: "Status is required",
    },
    in: ["body"],
  },
};

function validateChangeFixedTransactionStatusSchema() {
  return validateSchema(changeFixedTransactionStatusSchema);
}

module.exports = {
  validateSubmitFixedTransactionSchema,
  validateEditFixedTransactionSchema,
  validateChangeFixedTransactionStatusSchema,
};
