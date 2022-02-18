
const db = require("../../database/connection");


async function getClients() {

    const conn = await db.connect();

    const [rows] = await conn.query("SELECT * FROM tbl_clientes");

    return rows;


}


module.exports = { getClients }