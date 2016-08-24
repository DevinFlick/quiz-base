var express = require('express');
var router = express.Router();
var Quiz = require ('../models/quiz.js');

router.get('/quizzes', getAllQuizzes)
router.get('/quizzes/:quizId', getAQuiz);
router.post('/quizzes', createQuiz);
router.delete('/quizzes/:quizId', deleteQuiz);
router.put('/quizzes/:quizId', updateQuiz);

module.exports = router;

function getAllQuizzes (req, res, next){
  Quiz.find({}, function(err, foundQuizzes){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        quizzes: foundQuizzes
      });
    }
  });
};
function getAQuiz (req, res, next){
  Quiz.findOne({_id: req.params.quizId}, function(err, foundQuiz){
    console.log(foundQuiz);
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        quiz: foundQuiz
      });
    }
  });
};
function createQuiz(req, res, next){
  var quiz = new Quiz({
    name: req.body.name,
    question: req.body.question,
    created: new Date(),
    updated: new Date(),
  });
  quiz.save(function(err, newQuiz){
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
  Quiz.findOneAndRemove({_id: req.params.quizId}, function(err, removedPost){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        removedPost: removedPost
      });
    }
  });
};
function updateQuiz(req, res, next){
  Quiz.findOneAndUpdate({_id: req.params.quizId}, req.body, function(err, oldQuiz){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        oldQuiz: oldQuiz
      });
    }
  });
};
