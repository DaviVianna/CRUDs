
const db = require("../../database/connection");


async function getClients(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_clientes WHERE id_cliente = ${data.id}`);

    return rows;


}


module.exports = { getClients }