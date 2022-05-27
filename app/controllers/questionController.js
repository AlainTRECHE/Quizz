
const Question = require("../models/question");


const questionController = {

    findAll: async function (req, res) {
        try {
            const questions = await Question.findAll();

            res.render("index.ejs",{ questions });
            console.log(questions);
        } catch (error) {
            console.log(error);
        }
    },

};









module.exports = questionController;