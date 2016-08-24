var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  question: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Question',
    required: true,
  },
  tag: {
    type: String,
    required: false,
  },
  created: {
    type: Date,
    required: true,
  },
  updated: {
    type: Date,
    required: true,
  },
});

quizSchema.pre('findOneAndUpdate', function(){
  this.update({}, {$set: {updated: new Date()}});
});

var Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
