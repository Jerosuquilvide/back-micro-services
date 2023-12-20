const TABLE = 'auth';
const auth = require('../../../auth')
const bcrypt = require('bcrypt');
module.exports = function(injectedStore) {
    store = injectedStore
    if(!store){
        store = require('../../../store/dummy');
    }
    
    async function login(username, password){
        const data = await store.query(TABLE, {username:username})
        var result = bcrypt.compareSync(password,data.password);
        if(result){
            //generar token
            return auth.sign(data)
        }else{
            throw new Error("Credenciales inválidas")
        }

    }

    async function upsert(body){
        const authData = {
            id: body.id
        }
        if(!body.password){
            throw new Error('Password is required')
        }
        body.username ? authData.username = body.username : authData.username = ''
        authData.password = await bcrypt.hash(body.password,5) 
        return store.upsert(TABLE, authData)
    }
    return { 
        upsert,
        login
    }
}