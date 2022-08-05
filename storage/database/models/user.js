"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Account, {
        foreignKey: "accountId",
      });
    }
  }
  User.init(
    {
      userId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      accountId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      firstName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      isProfileImage: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );
  User.removeAttribute("id");
  return User;
};
