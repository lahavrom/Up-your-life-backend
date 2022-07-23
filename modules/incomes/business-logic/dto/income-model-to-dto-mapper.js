const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class IncomeModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["id", "uId", "type", "value", "description", "month"];
  }
}

module.exports = { IncomeModelToDtoMapper };
