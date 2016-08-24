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
  answers: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
  tags: {
    type: String,
    required: false,
  },

});

questionSchema.pre('findOneAndUpdate', function(){
  this.update({},{ $set: {updated: new Date() } });
});

var Question = mongoose.model('Question', questionSchema);
module.exports = Question;
