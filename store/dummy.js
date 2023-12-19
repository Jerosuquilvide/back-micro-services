const db = {
    'users' : [{id:'1',name:'Prueba'}]
}

async function list(table){
    return db[table] || [];
}

async function get(table, id){
    let col = await list(table);
    return col.filter(item => item.id === id)[0] || null;
}

function upsert(table, data){
    if(!db[table]){
        db[table] = []
    }
    db[table].push(data);
}

async function query(tabla, q) {
    let col = await list(tabla);
    let keys = Object.keys(q);
    let key = keys[0];
    return col.filter(item => item[key] === q[key])[0] || null;
}

function remove(table, id){
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}