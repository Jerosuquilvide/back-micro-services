module.exports = {
    api : {
        port: process.env.PORT || 3000,
        jwt: process.env.JWT_SECRET || 'secret'
    }
}