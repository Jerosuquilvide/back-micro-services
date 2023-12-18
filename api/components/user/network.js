const express = require('express');
const response = require('../../../network/response');
const Controller = require('./index');
const router = express.Router();

//Routes
router.get('/',list)
router.get('/:id',get)
router.post('/', upsert)
router.put('/',upsert)

function list(req,res){
    Controller.list()
    .then((data) => {
        response.success(req,res, data ,200);
    })
    .catch((err) => {
        response.error(req,res,err.message, 500);
    })
}

function get(req,res){

    Controller.get(req.params.id)
    .then((data) => {
        response.success(req,res, data ,200);
    })
    .catch((err) => {
        response.error(req,res,err.message, 500);
    })
}
function upsert(req,res){
    Controller.upsert(req.body)
    .then((data) => {
        response.success(req,res,data,201)
    })
    .catch((err) => {
        response.error(req,res,err,500)
    })
}

module.exports = router;