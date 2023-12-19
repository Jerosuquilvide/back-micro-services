const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const router = express.Router();

//Routes
router.post('/',login)


function login(req,res){
    Controller.login(req.body.username, req.body.password)
    .then((token) => {
        console.log(token);
        response.success(req,res, token ,200);
    })
    .catch( e => {
        response.error(req,res, 'Credenciales inválidas', 500);
    })
}

module.exports = router