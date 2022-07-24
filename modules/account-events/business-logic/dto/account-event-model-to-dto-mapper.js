const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class AccountEventModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["id", "uId", "type", "value", "description", "effectiveDate"];
  }
}

module.exports = { AccountEventModelToDtoMapper };
