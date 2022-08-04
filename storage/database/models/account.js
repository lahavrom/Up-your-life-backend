"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {}
  Account.init(
    {
      accountId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      email: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Account",
      tableName: "accounts",
      timestamps: false,
    }
  );
  Account.removeAttribute("id");
  return Account;
};
