const db = require("../../database/connection");



async function admDisabled(data) {

    const conn = await db.connect(); 
    const sql =  "DELETE FROM tbl_adm_system WHERE id_administrador = ?";
    const value = [data.id]
    
    await conn.query(sql, value);


}


module.exports =  { admDisabled }