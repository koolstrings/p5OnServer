var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/libraries/p5.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/libraries/p5.js'));
});

app.get('/steering.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/steering.js'));
});

app.get('/textBubble.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/textBubble.js'));
});

app.get('/assets/CaveatBrush-Regular.ttf', function(req, res) {
    res.sendFile(path.join(__dirname + '/assets/CaveatBrush-Regular.ttf'));
});



//const server = http.createServer(reqHandler)
app.listen(3003, function () {
  console.log('Example app listening on port 3000!')
})