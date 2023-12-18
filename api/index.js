const expres = require("express");
const config = require('../config')
const bodyParser = require('body-parser')
const user = require('./components/user/network')
const app = expres();


app.use(bodyParser.json());
app.use('/api/user',user)

app.listen(config.api.port , () => {
    console.log("App listen !");
})