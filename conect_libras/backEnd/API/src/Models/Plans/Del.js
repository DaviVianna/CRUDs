const db = require("../../database/connection");


async function delPlans(data) {

    const conn = await db.connect(); 
    const sql =  "DELETE FROM tbl_planos WHERE plano = ? ";
    const values = [data.plano]
    
    await conn.query(sql, values);


}


module.exports =  { delPlans }