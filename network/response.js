exports.success = function (req,res,message,status){
    statusCode = status || 200;
    statusMessage = message || 'Ok';

    res.status(statusCode).send({
        status: status,
        body : statusMessage,
        error: false
    })
}
exports.error = function (req,res,message,status){
    statusCode = status || 500;
    statusMessage = message || 'Internal server error';

    res.status(statusCode).send({
        status: status,
        body : statusMessage,
        error: true
    })
    
}