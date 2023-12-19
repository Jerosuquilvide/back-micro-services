const expres = require("express");
const config = require('../config')
const bodyParser = require('body-parser')
const user = require('./components/user/network')
const auth = require('./components/auth/network')
const swagger = require('swagger-ui-express')
const swaggerDoc = require('./Api docs.json')
const app = expres();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/user',user)
app.use('/api/auth/login',auth)
app.use('/api-docs', swagger.serve, swagger.setup(swaggerDoc))
app.listen(config.api.port , () => {
    console.log("App listen !");
})