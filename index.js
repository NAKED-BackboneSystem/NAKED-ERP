// This is the Implementations of the Node.js Database Servers.

// Load Modules
// Express (Node.js Web Application Framework)
var restify = require('restify');
var app = restify.createServer();
var bodyParser = require('body-parser');
var upload = require('multer')();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Route HTTP Requests
// GET from /
app.get('/', function(req, res){
  res.render('pages/index');
});
// POST to /data
app.post('/data', upload.array(), function (req, res, next){
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
app.listen((process.env.PORT || 5000), function(){
  console.log('Node app is running on port', app.get('port'));
});
