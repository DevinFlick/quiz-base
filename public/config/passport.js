var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var User = require('../js/models/user.js');

passport.use(new LocalStrategy({
  usernameField: 'username'
},
  function(username, password, done){
    User.findOne({username: username}, function(err, user){
      if(err){
        return done(err);
      }
      if(!user){
        return done(null, false);
      }
      if (!user.validPassword(password)){
        return done(null, false, {
          msg: 'password or username is incorrect'
        });
      }
      return done(null, user);
  });
}));
