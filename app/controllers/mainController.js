require('dotenv').config();
const sequelize = require('../database');
const { Level, Question, Answer, Quiz } = require('../models');
const { findByPk } = require('../models/level');

const mainController = {

    async homePage(req, res) {
        // Je vais récupérer mes quiz
        const quizs = await Quiz.findAll( {
            include : [
                {
                    association: 'questions',
                    include: ['answers', 'level']
                },
                'author',
                'tags'
            ]
        });
        res.render('home', { quizs });
    }

}

module.exports = mainController;
