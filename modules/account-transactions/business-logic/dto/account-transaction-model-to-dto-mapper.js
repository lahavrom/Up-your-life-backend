const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class AccountTransactionModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return [
      "id",
      "accountId",
      "userId",
      "type",
      "category",
      "description",
      "value",
      "effectiveDate",
    ];
  }
}

module.exports = { AccountTransactionModelToDtoMapper };
