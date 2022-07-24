"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class FixedEvent extends Model {}
  FixedEvent.init(
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
      dayOfMonth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "FixedEvent",
      tableName: "fixedEvents",
      timestamps: false,
    }
  );
  return FixedEvent;
};
