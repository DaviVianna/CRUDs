
const db = require("../../../database/connection");


async function getCompanyByCnpj(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_empresas WHERE cnpj = ${data.cnpj} `);

    return rows;
    
}


module.exports = { getCompanyByCnpj }