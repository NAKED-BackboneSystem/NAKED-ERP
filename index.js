const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const options = {
  key: fs.readFileSync('crypto/server.key'),
  cert: fs.readFileSync('crypto/server.crt')
};
app.post('/', function(req, res){
  console.log('JSON:'+req);
  res.json({
    "speech": "Barack Hussein Obama II is the 44th and current President of the United States.",
    "displayText": "Barack Hussein Obama II is the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
    "data": {},
    "contextOut": [],
    "source": "DuckDuckGo"
  });
});
https.createServer(options, app).listen(443);
