const { DataTypes, Sequelize } = require("sequelize");
const sequelize = require("../database");

class Question extends Sequelize.Model {}

Question.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: DataTypes.TEXT,

}, {
    sequelize,
    tableName: "question"
});

module.exports = Question;