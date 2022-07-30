const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class UserModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return [
      "userId",
      "accountId",
      "firstName",
      "lastName",
      "email",
      "department",
    ];
  }
}

module.exports = { UserModelToDtoMapper };
