const auth = require('../../../auth')

module.exports = function checkAuth(action){
    function middelware(req,res,next){
        switch (action){
            case 'update':
                const owner = req.body.id;
                console.log("Body del checkAuth",req.body);
                auth.check.own(req, owner)
                next()
                break;
            default: 
                next()
                break;
        }
    }

    return middelware
}

