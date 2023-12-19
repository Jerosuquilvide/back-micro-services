const TABLE = 'auth';
const auth = require('../../../auth')
module.exports = function(injectedStore) {
    store = injectedStore
    if(!store){
        store = require('../../../store/dummy');
    }
    
    async function login(username, password){
        const data = await store.query(TABLE, {username:username})
        if(password === data.password){
            //generar token
            return auth.sign(data)
        }else{
            throw new Error('Credenciales inválidas')
        }
    }

    function upsert(body){
        const authData = {
            id: body.id
        }
        body.username ? authData.username = body.username : authData.username = ''
        body.password ? authData.password = body.password : authData.password = ''

        return store.upsert(TABLE, authData)
    }
    return { 
        upsert,
        login
    }
}