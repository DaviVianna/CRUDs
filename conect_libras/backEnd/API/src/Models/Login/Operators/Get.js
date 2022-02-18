const db = require("../../../database/connection");



async function Auth(data) {

    const conn = await db.connect();

    const sql = 'SELECT * FROM tbl_operadores WHERE usuario = ? AND senha = ? '
    const values = [ data.usuario, data.senha];
    const [rows] = await conn.query(sql, values);

    return rows;

    
    


}


module.exports = { Auth }
