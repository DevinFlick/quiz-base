var express = require('express');
var router = express.Router();

router.get('/questions/:quizId', getQuestionsForAQuiz);
router.post('/questions', createQuestion);
router.delete('/questions/:questionId', deleteQuestion);
router.put('questions/:questionId', updateQuestion);

module.exports = router;

function getQuestionsForAQuiz(req, res, next){
  console.log('getting all of the questions for a quiz');
  next();
};
function createQuestion(req, res, next){
  console.log('create a question');
  next();
};
function deleteQuestion(req, res, next){
  console.log('delete a question');
  next();
};
function updateQuestion(req, res, next){
  console.log('updating a question');
};
