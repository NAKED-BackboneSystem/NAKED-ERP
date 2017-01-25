var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.post('/data', function(req, res){
  res.json({
    "speech": "Barack Hussein Obama II is the 44th and current President of the United States.",
    "displayText": "Barack Hussein Obama II is the 44th and current President of the United States, and the first African American to hold the office. Born in Honolulu, Hawaii, Obama is a graduate of Columbia University   and Harvard Law School, where ",
    "data": {"slack": {{
    "text": "Barack Hussein Obama II is the 44th and current President of the United States.",
    "attachments": [
        {
            "title": channel.get('title'),
            "title_link": channel.get('link'),
            "color": "#36a64f",

            "fields": [
                {
                    "title": "Condition",
                    "value": "Temp " + condition.get('temp') +
                             " " + units.get('temperature'),
                    "short": "false"
                },
                {
                    "title": "Wind",
                    "value": "Speed: " + channel.get('wind').get('speed') +
                             ", direction: " + channel.get('wind').get('direction'),
                    "short": "true"
                },
                {
                    "title": "Atmosphere",
                    "value": "Humidity " + channel.get('atmosphere').get('humidity') +
                             " pressure " + channel.get('atmosphere').get('pressure'),
                    "short": "true"
                }
            ],

            "thumb_url": "http://l.yimg.com/a/i/us/we/52/" + condition.get('code') + ".gif"
        }
    ]
}}},
    "contextOut": [],
    "source": "DuckDuckGo"
  });
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
