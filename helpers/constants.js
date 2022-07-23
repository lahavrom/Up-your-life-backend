const STATUS_CODES = {
  ERROR: {
    CLIENT: {
      BAD_REQUEST: 400,
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

module.exports = {
  STATUS_CODES,
};
