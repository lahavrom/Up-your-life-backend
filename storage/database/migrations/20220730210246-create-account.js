"use strict";
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable("accounts", {
      accountId: {
        allowNull: false,
        type: DataTypes.UUID,
      },
      email: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable("accounts");
  },
};
