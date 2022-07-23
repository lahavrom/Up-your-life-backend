"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    static associate(models) {
      Income.belongsTo(models.User, {
        foreignKey: "uId",
      });
    }
  }
  Income.init(
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
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      month: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      year: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        defaultValue: DataTypes.NOW,
        type: DataTypes.DATE,
      },
      editedAt: {
        defaultValue: null,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Income",
      tableName: "incomes",
      timestamps: false,
    }
  );
  return Income;
};
