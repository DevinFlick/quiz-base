var express = require('exppress');
var server = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var port = process.env.PORT || 8080;

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:true}));
server.use(cors());

server.get('/', function(req, res){
  res.send('I twerk baaaaby!');
});

server.listen(port, function(){
  console.log('Now listening to ya mah man! On port', port);
});
