const TABLE = 'users';
const { nanoid } = require('nanoid')
const auth = require('../auth')
module.exports = function(injectedStore) {
    store = injectedStore
    if(!store){
        store = require('../../../store/dummy');
    }
    function list(){
        return store.list(TABLE)
    }
    function get(id){
        return store.get(TABLE,id)
    }

    async function upsert(body){
        const user = {
            name: body.name,
            username : body.username
        }
        body.id ? user.id = body.id : user.id = nanoid()
        body.password ? user.password = body.password : user.password = '123'
        if(body.password || body.username){
            await auth.upsert({
                username: user.username,
                password: user.password,
                id: user.id
            })
        }

        return store.upsert(TABLE, user)
    }
    return { 
        list ,
        get,
        upsert
    }
}