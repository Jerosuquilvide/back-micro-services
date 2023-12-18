const TABLE = 'users';


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
    return { 
        list ,
        get
    }
}