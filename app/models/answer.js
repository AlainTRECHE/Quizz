const { Model, DataTypes } = require("sequelize");
const sequelize = require("../database");

class Answer extends Model {}

Answer.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: DataTypes.TEXT,

}, {
    sequelize,
    tableName: "answer"
});

module.exports = Answer;