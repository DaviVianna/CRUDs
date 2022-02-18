
const db = require("../../../database/connection");


async function getContacts() {

    const conn = await db.connect();

    const [rows] = await conn.query("SELECT * FROM tbl_contato_empresa");

    return rows;


}


module.exports = { getContacts }