// This is the Implementations of the Node.js Database Servers.

// Load Modules

// Restify (The Framework to build correct REST web services)
var restify = require('restify');
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser());

// Request Body Parser
var bodyParser = require('body-parser');
var upload = require('multer')();

// Mongoose (The Driver for MongoDB)
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
var EquipmentsSchema = new Schema({
  name:  String,
  condition: String
});
mongoose.model('Equipments', EquipmentsSchema);
var Equipments = mongoose.model('Equipments');
mongoose.connect('mongodb://heroku_sxvdphx7:naked-0lizard@ds131099.mlab.com:31099/heroku_sxvdphx7');

// Route HTTP Requests

// GET from /
server.get('/', function(req, res){
});
// POST to /data
server.post('/data', upload.array(), function (req, res, next){
  var userIntent = req.body["result"]["metadata"]["intentName"];
  var replyMessage = "The Request Equipments has not been found."
  Equipments.find({}, function(err, docs){
    replyMessage = "The Request Equipments has been found."
  });
  res.json({
    "speech": replyMessage,
    "displayText": replyMessage,
    "data": {
      "slack": {
        "text": replyMessage
      }
    },
    "contextOut": [],
    "source": "Database Server"
  });
  return next();
});

// Start Servers
server.listen((process.env.PORT || 5000), function(){
  console.log('Node app is running on port', (process.env.PORT || 5000));
});
