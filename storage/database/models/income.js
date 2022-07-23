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
