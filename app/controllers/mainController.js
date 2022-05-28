const Question = require("../models/question");
const Answer = require("../models/answer");
const mainController = {

    index:  async function (req, res) {
        try {
            const questions = await Question.findAll();
            const answers = await Answer.findAll();
            res.render("index.ejs",{ questions, answers });

        } catch (error) {
            console.log(error);
        }

    },


};

module.exports = mainController;