const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class FixedEventModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["id", "uId", "type", "value", "description", "dayOfMonth"];
  }
}

class BareFixedEventModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["uId", "type", "value", "description"];
  }
}

module.exports = { FixedEventModelToDtoMapper, BareFixedEventModelToDtoMapper };
