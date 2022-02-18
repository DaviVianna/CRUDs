
const db = require("../../database/connection");


async function getOperators() {

    const conn = await db.connect();
    

     const [rows] = await conn.query("SELECT * FROM tbl_operadores");

    return rows;


}


module.exports = { getOperators }