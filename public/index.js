var express = require('exppress');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var quizRouter = require('./js/routes/quiz.js');
var questionRouter = require('./js/routes/question.js');
var mongoose = require('mongoose');

var port = process.env.PORT || 8080;
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;

mongoose.connect(mongoURI);
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(cors());
server.use(quizRouter);
server.use(questionRouter);

server.get('/', function(req, res){
  res.send('I twerk baaaaby!');
});

server.listen(port, function(){
  console.log('Now listening to ya mah man! On port', port);
});
