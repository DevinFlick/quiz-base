var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema ({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

var User = mongoose.model('User', userSchema);
module.exports = User;
