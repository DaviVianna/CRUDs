const db = require("../../../database/connection");



async function insertContacts(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_contato_empresa(cnpj, telefone, celular, email, responsavel) VALUES(?,?,?,?,?)';
    const values = [data.cnpj, data.telefone, data.celular, data.email, data.responsavel]
    
    await conn.query(sql, values);


}


module.exports =  { insertContacts }