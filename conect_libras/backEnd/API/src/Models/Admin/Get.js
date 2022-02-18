
const db = require("../../database/connection");


async function getAdmin() {

    const conn = await db.connect();

    const [rows] = await conn.query("SELECT * FROM tbl_adm_system");

    //return rows;
    return rows;


}

async function getById(data) {

    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM tbl_adm_system WHERE id_administrador = ${data.id} `)
    return rows;


}


module.exports = { getAdmin, getById }