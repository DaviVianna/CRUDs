const db = require('../database/connection');


async function consultarName(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM Systems WHERE Name = "${data.name}" `);

    return rows;

}


module.exports = { consultarName }