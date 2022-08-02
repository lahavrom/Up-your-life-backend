const STATUS_CODES = {
  ERROR: {
    CLIENT: {
      BAD_REQUEST: 400,
      UNAUTHORIZED: 401,
      NOT_FOUND: 404,
    },
    SERVER: {
      INTERNAL: 500,
    },
  },
  SUCCESS: {
    OK: 200,
    CREATED: 201,
  },
};

const TRANSACTIONS_STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  DELETED: "deleted",
};

module.exports = {
  STATUS_CODES,
  TRANSACTIONS_STATUS,
};
