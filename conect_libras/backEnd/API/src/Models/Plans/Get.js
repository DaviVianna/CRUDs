
const db = require("../../database/connection");


async function getPlans() {

    const conn = await db.connect();

    const [rows] = await conn.query("SELECT * FROM tbl_planos");

    return rows;


}


module.exports = { getPlans }