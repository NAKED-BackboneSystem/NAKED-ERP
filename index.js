const https = require('https');
const fs = require('fs');
const express = require('express');
const app = express();
const options = {
  key: fs.readFileSync('crypto/server.key'),
  cert: fs.readFileSync('crypto/server.crt')
};
https.createServer(options, app).listen(443);
