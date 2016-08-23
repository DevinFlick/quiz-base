var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  question: {
    // type: mongoose.Schema.Types.ObjectId,
    // ref: 'Question'
    type: String,
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

//explore
quizSchema.pre('findOneAndUpdate', function(){
  console.log('updating!');
  this.update({}, {$set: {updated: new Date()}});
});
//explore

var Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
