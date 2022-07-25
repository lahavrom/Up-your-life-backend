"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("fixedEvents", {
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
      category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      value: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      dayOfMonth: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("fixedEvents");
  },
};
