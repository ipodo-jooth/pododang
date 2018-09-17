const crypto = require("crypto");
const info = require("../data/info.json");

function setEncrypt (data) {
    const cipher = crypto.createCipher("aes-256-cbc", "dramavoy");
    let result = cipher.update(data, "utf8", "hex");
    result += cipher.final("hex");
    return result;
}

function getDecrypt (key) {
    const decipher = crypto.createDecipher("aes-256-cbc", "dramavoy");
    let result = decipher.update(key, "hex", "utf8");
    result += decipher.final("utf8");
    return result;
}

module.exports = {
    "setEncrypt": setEncrypt,
    "getDecrypt": getDecrypt,
    "username": info.username,
    "password": info.password
};