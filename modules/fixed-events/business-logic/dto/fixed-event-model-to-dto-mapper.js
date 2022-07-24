const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class FixedEventModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["id", "uId", "type", "value", "description", "dayOfMonth"];
  }
}

module.exports = { FixedEventModelToDtoMapper };
