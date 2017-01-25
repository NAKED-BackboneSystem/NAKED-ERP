// This is the Implementations of the Node.js Database Servers.

// Load Modules
// Express (Node.js Web Application Framework)
var express = require('express');
var app = express();

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
app.post('/data', function(req, res){
  res.json(
    {
      "speech": "This is the Reply Text for API.AI.",
      "displayText": "This is the Reply Text for API.AI.",
      "data": {
        "slack": {
          "text": "This is the Reply Text for Slack."
        }
      },
      "contextOut": [],
      "source": "Database Server"
    }
  );
});

// Start Servers
app.listen(app.get('port'), function(){
  console.log('Node app is running on port', app.get('port'));
});
