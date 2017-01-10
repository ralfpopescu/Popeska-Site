var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var activated = [0,0,0,0,0,0,0,0];

app.use(express.static('public'));
app.listen(8080, function() { console.log('listening')});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.post('/1', function (req, res) {
  res.send('CIRCLE 1');
  console.log(req.body.id);
});

app.get('/hi', function (req, res) {
  res.send('Hello World!!!!!!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
