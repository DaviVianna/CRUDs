const db = require("../../database/connection");



async function insertPlans(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_planos(plano, descricao, valor_unitario, minutos, valor_minutos_extra, valor_login_extra) VALUES(?,?,?,?,?,?)';
    
    const values = [

        data.plano, 
        data.descricao,
        data.valor, 
        data.minutos,
        data.valor_minutos_extra,
        data.valor_login_extra, 
        
    ]
    
    
    await conn.query(sql, values);


}


module.exports =  { insertPlans }