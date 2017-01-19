

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var express = require('express');
var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(bodyParser());


app.use(upload.array()); // for parsing multipart/form-data

app.use(express.static('public'));



app.listen(8080, function() { console.log('listening')});

app.post('/featherclick', function (req, res) {
    var activated = req.body.key;

    var result = matchKey(activated);
    if(result == "key1"){
    res.setHeader("Content-Type","application/octect-stream");
    res.download("secrets/ganzremix.mp3");
    console.log("MATCH");
  } else {
    res.end('No match');
  }
});

app.post('/inquiry', function (req, res) {
    //var email = req.body.email;
    //var inquiry = req.body.inquiry;
});

function matchKey(activated){
  var key1 = "[1,0,0,0,1,0,0,0]";
  console.log(JSON.stringify(activated));
  console.log(JSON.stringify(key1));

  if(JSON.stringify(activated)==JSON.stringify(key1)){
    return "key1";
  } else {
    return "NOMATCH";
  }
}
