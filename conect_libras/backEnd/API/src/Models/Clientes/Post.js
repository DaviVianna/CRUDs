const db = require("../../database/connection");


//Verificando o E-mail do cliente antes de cadastrar
//se o E-mail já existir, NÃO PODE CADASTRAR

async function verificaUsuario(data)  {

    const conn = await db.connect();
    const [rows] = await conn.query(`SELECT * FROM tbl_clientes WHERE usuario = "${data.usuario}" `);

    return rows;
    
   

}


async function insertData(nome, usuario, senha, tipo, cnpj) {


    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_clientes(nome, usuario, senha, tipo, fk_empresa) VALUES(?,?,?,?,?)';
    const values = [nome, usuario, senha, tipo, cnpj]
    
    await conn.query(sql, values);


}


async function insertClientes(data) {

    const conn = await db.connect(); 
    const sql =  'INSERT INTO tbl_clientes(nome, usuario, senha, foto, tipo, fk_empresa) VALUES(?,?,?,?,?,?)';
    const values = [data.nome, data.usuario, data.senha, data.file.path, data.tipo, data.cnpj]
    
    await conn.query(sql, values);


}








module.exports =  { 
    
    verificaUsuario, 
    insertData,
    insertClientes 
}