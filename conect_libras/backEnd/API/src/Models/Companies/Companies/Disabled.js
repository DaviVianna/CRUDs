const db = require("../../../database/connection");



async function disabledCompanies(data) {

    const conn = await db.connect(); 
    const sql =  "DELETE FROM tbl_empresas INNER JOIN tbl_contato_empresa ON tbl_empresas.cnpj = tbl_contato_empresa.cnpj";
    const values = [data.cnpj]
    
    await conn.query(sql, values);


}


module.exports =  { disabledCompanies }