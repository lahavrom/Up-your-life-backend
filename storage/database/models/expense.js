"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {}
  Expense.init(
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
        references: {
          model: {
            tableName: "users",
            schema: "schema",
          },
          key: "id",
        },
      },
      type: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      category: {
        allowNull: false,
        type: DataTypes.STRING,
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
      modelName: "Expense",
      tableName: "expenses",
      timestamps: false,
    }
  );
  return Expense;
};
