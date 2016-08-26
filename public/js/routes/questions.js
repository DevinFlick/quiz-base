var express = require('express');
var router = express.Router();
var Question = require('../models/question.js');

router.get('/questions/:quizId', getQuestionsForAQuiz);
router.post('/questions', createQuestion);
router.delete('/questions/:questionId', deleteQuestion);
router.put('questions/:questionId', updateQuestion);

module.exports = router;

function getQuestionsForAQuiz(req, res, next){
  Question.find({quiz: req.params.quizId}, function(err, questions){
    if (err){
      res.status(500).json({
        msg: err
      });
    } else {
      if(questions){
        res.status(200).json({
          questions: questions
        });
      } else {
        res.status(404).json({
          msg: "can't find that!"
        });
      }
    }
  });
};
function createQuestion(req, res, next){
  var question = new Question({
    quiz: req.body.quiz,
    ask: req.body.ask,
    answers: req.body.answers,
    correctAnswer: req.body.correctAnswer,
    created: new Date(),
    updated: new Date(),
  });
  question.save(function(err, newQuestion){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        question: newQuestion
      });
    }
  });
};
function deleteQuestion(req, res, next){
  Question.findOneAndRemove({_id: req.params.questionId}, function(err, deletedQuestion){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        removedQuestion: deletedQuestion
      });
    }
  });
};
function updateQuestion(req, res, next){
  Question.findOneAndUpdate({_id: req.params.questionId}, req.body, function(err, question){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        question: question
      });
    }
  });
};
