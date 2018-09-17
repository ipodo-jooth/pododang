const crypto = require("./src/js/crypto.js");
let info = require("./src/data/info.json");

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
    if(crypto.setEncrypt(req.body.uname) === info.username &&
        crypto.setEncrypt(req.body.psw) === info.password)
        res.sendFile(__dirname + "/src/fish.html");
    else 
        res.redirect("/");
});

app.listen(3000);