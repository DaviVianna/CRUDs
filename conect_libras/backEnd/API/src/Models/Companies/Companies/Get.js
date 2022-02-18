
const db = require("../../../database/connection");


async function getCompanies() {

    const conn = await db.connect();
  
    const [rows] = await conn.query(`SELECT * FROM tbl_empresas INNER JOIN tbl_contato_empresa ON tbl_empresas.cnpj = tbl_contato_empresa.cnpj ORDER BY empresa ASC`);

    return rows;


}


module.exports = { getCompanies }