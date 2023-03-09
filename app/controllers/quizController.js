
const {Quiz} = require("../models");

const quizController = {
  async quizPage(req, res) {
    const foundQuiz = await Quiz.findByPk(req.params.id, {
      include: [ // les champs de quiz que je veux récupérer
        "author",
        "tags",
        {
          association: "questions",
          include: ["level", "answers"], // les champs de l'assossiation que je veux récupérer
        },
      ],
    });

    if (foundQuiz) {
      res.render("quizz", {
        foundQuiz,
      });
    }
  },
};

module.exports = quizController;
