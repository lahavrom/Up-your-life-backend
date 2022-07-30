const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class FixedEventModelToDtoMapper extends BaseModelToDtoMapper {
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

class BareFixedEventModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["accountId", "userId", "type", "category", "description", "value"];
  }
}

module.exports = { FixedEventModelToDtoMapper, BareFixedEventModelToDtoMapper };
