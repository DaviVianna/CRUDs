const db = require("../../database/connection");



async function deleteClientes(data) {

    const conn = await db.connect(); 
    const sql =  "DELETE FROM tbl_clientes WHERE id_cliente = ?";
    const values = [data.id]
    
    await conn.query(sql, values);


}


module.exports =  { deleteClientes }