
const db = require("../../database/connection");


async function GetById(data) {

    const conn = await db.connect();
    
     const [rows] = await conn.query(`SELECT * FROM tbl_operadores WHERE id_operador = ${data.id} `);

    return rows;


}


module.exports = { GetById }