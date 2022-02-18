const db = require("../../database/connection");


//Cadastra NOME, USUARIO e SENHA
async function insertData(operador, usuario, senha, tipo) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_operadores(nome, usuario, senha, tipo) VALUES(?,?,?,?)';
    const values = [operador, usuario, senha, tipo]
    
    await conn.query(sql, values);


}


//Cadastra TODOS os DADOS
async function insertAllData(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_operadores(nome, usuario, senha, foto, tipo) VALUES(?,?,?,?,?)';
    const values = [data.operador, data.usuario, data.senha, data.file.path, data.tipo]
    
    await conn.query(sql, values);


}


module.exports =  { 
    
    insertAllData,
    insertData

}