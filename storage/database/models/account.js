"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    static associate(models) {
      Account.hasMany(models.User);
      Account.hasMany(models.AccountTransaction);
      Account.hasMany(models.FixedTransaction);
    }
  }
  Account.init(
    {
      accountId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
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
