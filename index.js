// This is the Implementations of the Node.js Database Servers.

// Load Modules
// Express (Node.js Web Application Framework)
var restify = require('restify');
var server = restify.createServer();
var bodyParser = require('body-parser');
var upload = require('multer')();

server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: false }));

// Route HTTP Requests
// GET from /
server.get('/', function(req, res){
  res.render('pages/index');
});
// POST to /data
server.post('/data', upload.array(), function (req, res, next){
  var userIntent = req.body["result"]["metadata"]["intentName"];
  res.json({
    "speech": userIntent,
    "displayText": userIntent,
    "data": {
      "slack": {
        "text": userIntent
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
