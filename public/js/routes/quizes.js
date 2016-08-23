var express = require('express');
var router = express.Router();
var Quiz = require ('../models/quiz.js');

router.get('/quizes/:quizId', getAQuiz);
router.post('/quizes', createQuiz);
router.delete('/quizes/:quizId', deleteQuiz);
router.put('/quizes/:quizId', updateQuiz);

module.exports = router;

function getAQuiz (req, res, next){
  console.log('getting a quiz');
  next();
};
function createQuiz(req, res, next){
  var quiz = new Quiz({
    name: req.body.name,
    question: req.body.question,
    created: new Date(),
    updated: new Date(),
  });
  post.save(function(err, newQuiz){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        quiz: newQuiz
      });
    }
  });
};
function deleteQuiz(req, res, next){
  console.log('deleteing a Quiz');
  next();
};
function updateQuiz(req, res, next){
  console.log('updating a quiz');
  next();
};
