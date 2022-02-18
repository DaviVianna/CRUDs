const db = require("../../database/connection");



async function operaDisabled(data) {

    const conn = await db.connect(); 
    const sql =  "DELETE FROM tbl_operadores WHERE id_operador = ? ";
    const updateValues = [data.id]
    
    await conn.query(sql, updateValues);


}


module.exports =  { operaDisabled }