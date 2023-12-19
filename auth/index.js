const jwt = require('jsonwebtoken')

function sign(data){
    console.log("DATA DEL SIGN", data);
    return jwt.sign(data,'secreto');
}

module.exports = {sign}