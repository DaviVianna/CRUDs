const db = require("../../database/connection");


async function getByPlano(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_planos WHERE plano = "${data.plano}" `);

    return rows;


}


module.exports = { getByPlano }