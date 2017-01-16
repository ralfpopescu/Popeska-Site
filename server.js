var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser());

app.use(express.static('public'));
app.listen(8080, function() { console.log('listening')});

app.post('/featherclick', function (req, res) {
  // var activated = req.body;
  // var result = matchKey(activated);
  // if(result == "key1"){
    //res.send('secrets/ganzremix.mp3');
    res.setHeader("Content-Type","application/octect-stream");
    res.download("secrets/ganzremix.mp3");
    console.log("MATCH");
//}
});


function matchKey(activated){
  var key1 = ["1","0","0","0","1","0","0","0"];

  if(JSON.stringify(activated)==JSON.stringify(key1)){
    return "key1";
  }
}
