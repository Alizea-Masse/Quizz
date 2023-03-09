require('dotenv').config();
const sequelize = require('../database');
const {
    Level,
    Question,
    Answer,
    Quiz,
    Tag
} = require('../models');


const tagController = {

    async tagPage(req, res) {

        const foundTag = await Tag.findAll() 
    ;
       

      
            res.render('tags', {
                foundTag
              
            })
           // console.log(foundTag);
        },

        async tagWhithQuizPage(req,res) {

            const foundTagWithQuiz = await Tag.findByPk(req.params.id, {
                include:[ {
                    association: "quizList",
                    include : ["author"]
                }]
            })
            res.render('tag', {foundTagWithQuiz})
            //console.log(foundTagWithQuiz);
        }

    }



module.exports =tagController;