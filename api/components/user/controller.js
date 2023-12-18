const TABLE = 'users';
const nanoid = require('nanoid')

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

    function upsert(body){
        const user = {
            name: body.name
        }
        body.id ? user.id = body.id : user.id = nanoid()

        return store.upsert(TABLE, user)
    }
    return { 
        list ,
        get,
        upsert
    }
}