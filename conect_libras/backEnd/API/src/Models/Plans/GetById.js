const db = require("../../database/connection");


async function getPlansById(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_planos WHERE id_plano = ${data.id}`);

    return rows;


}


module.exports = { getPlansById }