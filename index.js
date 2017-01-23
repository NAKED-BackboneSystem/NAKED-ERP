var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();
var options = {
  key: fs.readFileSync('crypto/server.key'),
  cert: fs.readFileSync('crypto/server.crt')
};
app.post('/data', function(req, res){
  console.log('JSON:'+req);
  res.json({
    "speech": "Barack Hussein Obama II is the 44th and current President of the United States.",
    "displayText": "Barack Hussein Obama II is the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
    "data": {},
    "contextOut": [],
    "source": "DuckDuckGo"
  });
});
app.set('port', (process.env.PORT || 5000));
https.createServer(options, app).listen(app.get('port'));
