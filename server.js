

var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var express = require('express');
var nodemailer = require('nodemailer');
//var smtpTransport = require('nodemailer-smtp-transport');
var app = express();

var smtpTransport = nodemailer.createTransport({
   service: "Gmail",  // sets automatically host, port and connection security settings
   secureConnection: false, // use SSL
   port: 587, // port for secure SMTP
   auth: {
       user: "iampopeska@gmail.com",
       pass: "garbagepassword"
   }
});

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
    res.setHeader("Content-Type","application/octect-stream");
    res.sendStatus(401);
  }
});

app.post('/inquiry', function (req, res) {
  var email = req.body.userEmail;
  var inquiry = req.body.inquiryText;
  smtpTransport.sendMail({  //email options
     from: "Popeska <iampopeska@gmail.com>", // sender address.  Must be the same as authenticated user if using GMail.
     to: "Receiver Name <iampopeska@gmail.com>", // receiver
     subject: 'Inquiry from ' + email,
     text: inquiry // body
  }, function(error, response){  //callback
     if(error){
         console.log(error);
         res.send("success");
     }else{
         console.log("Message sent: " + res.send("success"));
     }

     //smtpTransport.close(); // shut down the connection pool, no more messages.  Comment this line out to continue sending emails.
  });
});

app.get('/getImages', function (req, res) {

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
