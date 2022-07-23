const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class ExpenseModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["id", "uId", "type", "value", "category", "description", "month"];
  }
}

module.exports = { ExpenseModelToDtoMapper };
