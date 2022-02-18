
const db = require("../../../database/connection");


async function getContactsById(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_contato_empresa WHERE cnpj = ${data.cnpj}`);

    return rows;


}


module.exports = { getContactsById }