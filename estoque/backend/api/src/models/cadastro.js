const db = require('../database/connection');


async function cadastraDados(data) {

    const conn = await db.connect();
    const sql = 'INSERT INTO systems (Name, Namespace, Type, Description, qaPageId, Solution, Platform) VALUES(?,?,?,?,?,?,?)';
    const values = [
        data.name, 
        data.namespace, 
        data.type, 
        data.description, 
        data.qapageid, 
        data.solution, 
        data.platform
    ];

    await conn.query(sql, values);


}


module.exports = { cadastraDados }