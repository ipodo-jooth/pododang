const crypto = require("crypto");

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

var encrypt = setEncrypt("dramavoy");

console.log("=======");
console.log("encrypt: ", encrypt);
console.log("decrypt: ", getDecrypt(encrypt));
console.log("=======");