const {
  BaseModelToDtoMapper,
} = require("../../../../dto/base-model-to-dto-mapper");

class UserModelToDtoMapper extends BaseModelToDtoMapper {
  dtoKeys() {
    return ["uId", "firstName", "lastName", "email"];
  }
}

module.exports = { UserModelToDtoMapper };
