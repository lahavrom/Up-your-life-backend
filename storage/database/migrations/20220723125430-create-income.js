"use strict";
module.exports = {
	async up(queryInterface, DataTypes) {
		await queryInterface.createTable("incomes", {
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
			amount: {
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
		});
	},
	async down(queryInterface, DataTypes) {
		await queryInterface.dropTable("incomes");
	},
};
