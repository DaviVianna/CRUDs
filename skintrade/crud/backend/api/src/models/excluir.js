const db = require('../database/connection');



async function excluirDados(data) { 

    const conn = await db.connect();
    const sql =  "DELETE FROM systems WHERE id = ?";
    const values = [data.id]
    
    await conn.query(sql, values);


}

module.exports = { excluirDados }