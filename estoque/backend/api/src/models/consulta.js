const db = require('../database/connection');


async function buscaDados() {

    const conn = await db.connect();

    const [rows] = await conn.query('SELECT * FROM systems');

    return rows;

}


module.exports = { buscaDados }