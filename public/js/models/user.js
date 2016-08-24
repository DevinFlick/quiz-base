var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

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
  hash: {
    type: String,
    required: false,
  },
  salt: {
    type: String,
    required: false,
  },
});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
                              .toString('hex');
};
userSchema.methods.validPassword = function(password){
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512')
                              .toString('hex');
  return this.hash === hash;
};
userSchema.methods.generateJwt = function(){}

var User = mongoose.model('User', userSchema);
module.exports = User;
