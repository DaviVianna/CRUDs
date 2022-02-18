const db = require("../../../database/connection");



async function insertAddress(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_endereco_empresa(cep, logradouro, complemento, numero, bairro, cidade, estado) VALUES(?,?,?,?,?,?,?)';
    const values = [data.cep, data.logradouro, data.complemento, data.numero, data.bairro, data.cidade, data.estado]
    
    await conn.query(sql, values);


}


module.exports =  { insertAddress }