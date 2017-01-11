var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'));
app.listen(8080, function() { console.log('listening')});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// app.post('/circleclick', function (req, res) {
//   var circle_id = req.body.id;
//   activated[circle_id] = Number(!activated[circle_id]);
//   res.send(activated);
//   console.log(activated);
// });

app.post('/featherclick', function (req, res) {
  var activated = req.body.activated
  var result = matchKey(activated);
  //res.send(activated);
  if(result == "key1"){
    res.download('secrets/ganzremix.mp3');
    console.log("MATCH");
}
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function matchKey(activated){
  var key1 = ["1","0","0","0","1","0","0","0"];

  if(JSON.stringify(activated)==JSON.stringify(key1)){
    return "key1";
  }
}
