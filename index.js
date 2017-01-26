// This is the Implementations of the Node.js Database Servers.

// Load Modules
// Express (Node.js Web Application Framework)
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var upload = require('multer')();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Set Listen Ports
app.set('port', (process.env.PORT || 5000));

// Set Assets Directory
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
// Set Template Engines
app.set('view engine', 'ejs');

// Route HTTP Requests
// GET from /
app.get('/', function(req, res){
  res.render('pages/index');
});
// POST to /data
app.post('/data', upload.array(), function (req, res, next){
  var intent = req.body["result"]["metadata"]["intentName"];
  var speech = intent;
  var displayText = intent;
  var text = intent;
  res.json({
    "speech": speech,
    "displayText": displayText,
    "data": {
      "slack": {
        "text": text
      }
    },
    "contextOut": [],
    "source": "Database Server"
  });
});

// Start Servers
app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
