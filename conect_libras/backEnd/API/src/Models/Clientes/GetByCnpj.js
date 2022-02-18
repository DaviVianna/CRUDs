
const db = require("../../database/connection");


async function getClientsByCnpj(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_clientes WHERE fk_empresa = ${data.cnpj} `);

    return rows;


}


module.exports = { getClientsByCnpj }