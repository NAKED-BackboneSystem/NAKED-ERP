const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const options = {
  key: fs.readFileSync('crypto/server.key'),
  cert: fs.readFileSync('crypto/server.crt')
};
// app.post('/', function(req, res){
//   console.log('JSON:'+req);
// });
https.createServer(options, app).listen(443);
