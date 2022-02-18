//Import Database
const db = require('../../database/connection');



async function insertFiles(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_operadores(usuario, foto) VALUES(?,?) ';
    const values = [ data.usuario, data.file ]
    
    await conn.query(sql, values);


}



module.exports = { insertFiles }

