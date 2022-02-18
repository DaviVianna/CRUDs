const db = require("../../database/connection");



async function insertData(administrador, usuario, senha, tipo) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_adm_system (nome, usuario, senha, tipo) VALUES(?,?,?,?)';
    const values = [administrador, usuario, senha, tipo]
    
    await conn.query(sql, values);


}


async function insertAllData(data) {


    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_adm_system (nome, usuario, senha, foto, tipo) VALUES(?,?,?,?,?)';
    const values = [data.administrador, data.usuario, data.senha, data.file.path, data.tipo]
    
    await conn.query(sql, values);



}


module.exports =  { 
    
    insertData, 
    insertAllData,

}