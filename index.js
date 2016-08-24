var express = require('express');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');


var userRouter = require('./public/js/routes/users.js');
var quizRouter = require('./public/js/routes/quizzes.js');
var questionRouter = require('./public/js/routes/questions.js');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

mongoose.connect(mongoURI);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(cors());
server.use(quizRouter);
server.use(questionRouter);
server.use(userRouter);

server.get('/', function(req, res){
  res.send('I twerk baaaaby!');
});

server.listen(port, function(){
  console.log('Now listening to ya mah man! On port', port);
});
