const crypto = require("./src/js/crypto.js");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();


let logger = (req, res, next) => {
    console.log("Starting Server:: port on 3000");
    next();
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(logger);

app.use("/", express.static(__dirname + "/src"));
app.use("/index", express.static(__dirname + "/src"));
app.post("/fish", (req, res, next) => {
    console.log(crypto.username);
    if(crypto.setEncrypt(req.body.uname) === crypto.username && crypto.setEncrypt(req.body.psw) === crypto.password)
        res.sendFile(__dirname + "/src/fish.html");
    else 
        res.redirect("/");
});

app.listen(3000);