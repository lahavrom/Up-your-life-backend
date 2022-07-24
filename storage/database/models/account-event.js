"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AccountEvent extends Model {
    static associate(models) {
      AccountEvent.belongsTo(models.User, {
        foreignKey: "uId",
      });
    }
  }
  AccountEvent.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      uId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      effectiveDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "AccountEvent",
      tableName: "accountEvents",
      timestamps: false,
    }
  );
  return AccountEvent;
};
