const db = require("../../../database/connection");



async function getAdmin(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_adm_system WHERE usuario = '${data.usuario}'  `);
    
    
    return rows;    

}


module.exports = { getAdmin }
