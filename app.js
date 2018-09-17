const crypto = require("crypto");
let info = require("./src/data/info.json");

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const setEncrypt = (data) => {
    const cipher = crypto.createCipher("aes-256-cbc", "dramavoy");
    let result = cipher.update(data, "utf8", "hex");
    result += cipher.final("hex");
    return result;
};

const getDecrypt = (key) => {
    const decipher = crypto.createDecipher("aes-256-cbc", "dramavoy");
    let result = decipher.update(key, "hex", "utf8");
    result += decipher.final("utf8");
    return result;
}

let logger = (req, res, next) => {
    console.log("Starting Server:: port on 3000");
    next();
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(logger);

app.use("/", express.static(__dirname + "/src"));
app.use("/index", express.static(__dirname + "/src"));
app.post("/fish", (req, res, next) => {
    if(setEncrypt(req.body.uname) === info.username &&
        setEncrypt(req.body.psw) === info.password)
        res.sendFile(__dirname + "/src/fish.html");
    else 
        res.redirect("/");
});

app.listen(3000);