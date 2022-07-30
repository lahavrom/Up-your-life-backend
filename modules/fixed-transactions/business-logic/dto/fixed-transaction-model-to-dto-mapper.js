const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class FixedTransactionModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return [
      "id",
      "accountId",
      "userId",
      "type",
      "category",
      "description",
      "value",
      "dayOfMonth",
    ];
  }
}

class BareFixedTransactionModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["accountId", "userId", "type", "category", "description", "value"];
  }
}

module.exports = {
  FixedTransactionModelToDtoMapper,
  BareFixedTransactionModelToDtoMapper,
};
