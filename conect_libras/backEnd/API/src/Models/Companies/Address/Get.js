
const db = require("../../../database/connection");


async function getAddress() {

    const conn = await db.connect();

    const [rows] = await conn.query("SELECT * FROM tbl_endereco_empresa");

    return rows; 

}


module.exports = { getAddress }