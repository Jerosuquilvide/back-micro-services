const jwt = require('jsonwebtoken');
const config = require('../config');

const secret = config.api.jwt

function sign(data){
    return jwt.sign(data, secret);
}


const check = {
    own: function(req,owner){
        console.log(req, owner);
        if(!owner){
            throw new Error('Owner is null ! ')
        }
        const decoded = decodeHeader(req);
        if(decoded.id !== owner){
            throw new Error('Insufficient permissions')
        }
    }
}

function getToken(auth){
    if(!auth){
        throw new Error('Token is required');
    }
    
    if(auth.indexOf("Bearer ") === -1){
        throw new Error("Invalid format");
    }
    var token = auth.replace("Bearer ","")

    return token.trim();
}

function verify(token){
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        throw new Error(error.message)
    }
}


function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization)
    const decoded = verify(token);
    req.user = decoded
    return decoded
}

module.exports = {
    sign,
    check
}