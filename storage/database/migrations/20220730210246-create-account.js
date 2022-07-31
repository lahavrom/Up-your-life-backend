"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("accounts", {
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
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("accounts");
  },
};
