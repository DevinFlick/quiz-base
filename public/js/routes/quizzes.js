var express = require('express');
var router = express.Router();
var Quiz = require ('../models/quiz.js');
var _ = require('lodash');

router.get('/quizzes', getAllQuizzes)
router.get('/quizzes/:quizId', getAQuiz);
router.get('/quizzes/random/:number', getRandomNumberOfQuizzes);
router.get('/quizzes/recent/:number', getTheMostRecentNumberOfQuizzes);
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
function getTheMostRecentNumberOfQuizzes(req, res, next){
  Quiz.find({}, function(err, quizzes){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      var numberOfQuizzesToGet = req.params.number;
      var quizzesOrderedByDate = _.orderby(quizzes, ['created'], ['asc']);
      var firstNumberOfOrderedQuizzes = _.take(quizzesOrderedByDate, numberOfQuizzesToGet);
      res.status(200).json({
        quizzes: firstNumberOfOrderedQuizzes
      });
    }
  });
}
function getRandomNumberOfQuizzes(req, res, next){
  Quiz.find({}, function(err, quizzes){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      var numofQuizzesToGet = req.params.number;
      var randomizedQuizzes = _.shuffle(quizzes);
      var firstNumberOfRandomizedQuizzes = _.take(randomizedQuizzes, numofQuizzesToGet);
      res.status(200).json({
        quizzes: firstNumberOfRandomizedQuizzes
      });
    }
  });
}
function createQuiz(req, res, next){
  var quiz = new Quiz({
    name: req.body.name,
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
  Quiz.findOneAndRemove({_id: req.params.quizId}, function(err, removedQuiz){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        removedQuiz: removedQuiz
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
