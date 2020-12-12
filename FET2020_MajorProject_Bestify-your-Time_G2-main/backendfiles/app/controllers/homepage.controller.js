const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const { QueryTypes } = require('sequelize');
const Quiz=db.quiz;

exports.highscore = (req, res) => {
    db.sequelize.query("select quizid, userid, max(score) as  score from quizscores group by quizid", 
    { type: QueryTypes.SELECT }).then(data=>{
      res.send(data);
    });
      }


   
   exports.findAll = (req, res) => {

  const cat = req.params.cat;
  console.log(cat);
     Quiz.findAll({ where: { category:cat } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };       