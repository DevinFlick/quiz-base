var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
  quiz: {
    type: String,
    required: true,
  },
  ask: {
    type: String,
    required: true,
  },
  answer-one: {
    type: String,
    required: true,
  },
  answer-two: {
    type: String,
    required: true,
  },
  answer-three: {
    type: String,
    required: true,
  },
  answer-four: {
    type: String,
    required: true,
  },
  answer-five: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },

});

var Question = mongoose.model('Post', postSchema);
module.exports = Question;
