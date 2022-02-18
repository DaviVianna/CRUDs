const db = require("../database/connection");



async function loginAuth(data) {

    const conn = await db.connect();

    const sql = 'SELECT * FROM tbl_login WHERE usuario = ? '
    const values = [ data.usuario];
    const [rows] = await conn.query(sql, values);

    return rows;

}


module.exports = { loginAuth }