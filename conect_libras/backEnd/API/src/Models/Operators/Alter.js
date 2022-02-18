const db = require("../../database/connection");



//Alterando TODOS os VALORES
async function alterAllValues(nome, usuario, senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ? , usuario = ?, senha = ?, foto = ?  WHERE id_operador = ? ';
    const values = [nome, usuario, senha, file.path, id]
    
    await conn.query(sql, values);


}





//Alterando SOMENTE o NOME
async function alterName(nome, id) {

    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ? WHERE id_operador = ? ';
    const values = [nome, id]
    
    await conn.query(sql, values);


}





//Alterando SOMENTE o USUÁRIO
async function alterUser(usuario, id) {

    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET usuario = ?  WHERE id_operador = ? ';
    const values = [usuario, id]
    
    await conn.query(sql, values);

    
}





//Alterando SOMENTE a SENHA
async function alterPassword(senha, id) {

    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET senha = ? WHERE id_operador = ? ';
    const values = [senha, id]
    
    await conn.query(sql, values);

    
}





//Alterando NOME e USUÁRIO
async function alterNameAndUser(nome, usuario, id) {

    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ?, usuario = ? WHERE id_operador = ? ';
    const values = [nome, usuario, id]
    
    await conn.query(sql, values);
 
    
    
}





//Alterando NOME e SENHA
async function alterNameAndPassword(nome, senha, id) {
    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ?,  senha = ? WHERE id_operador = ? ';
    const values = [nome, senha, id]
    
    await conn.query(sql, values);

    
    
}




//Alterando USUÁRIO e SENHA

async function alterUserAndPassword(usuario, senha, id) {

    
    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET usuario = ?, senha = ? WHERE id_operador = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql,values);

    
    
}



//Alterando SOMENTE a FOTO
async function alterFile(file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET foto = ? WHERE id_operador = ? ';
    const values = [file.path, id]
    
    await conn.query(sql, values);


}

//Alterando STATUS == DESATIVADO
async function statusDisabled(id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET estatus = "DESATIVADO" WHERE id_operador = ? ';
    const values = [id]
    
    await conn.query(sql, values);


}


//Alterando STATUS == ATIVADO
async function statusActive(id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET estatus = "ATIVO" WHERE id_operador = ? ';
    const values = [id]
    
    await conn.query(sql, values);


}



//Alterando Foto e Nome
async function alterFileAndName(nome, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ?, foto = ? WHERE id_operador = ? ';
    const values = [nome, file.path, id]
    
    await conn.query(sql,values);


}

//Alterando Foto e Senha
async function alterFileAndPassword(senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET senha = ?, foto = ? WHERE id_operador = ? ';
    const values = [senha, file.path, id]
    
    await conn.query(sql,values);


}


//Alterando Foto e Usuario
async function alterFileAndUser(usuario, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET usuario = ?, foto = ? WHERE id_operador = ? ';
    const values = [usuario, file.path, id]
    
    await conn.query(sql,values);


}


//Alterando FOTO, USUARIO e SENHA

async function alterFileUserAndPassword(usuario, senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET usuario = ?, senha = ?, foto = ? WHERE id_operador = ? ';
    const values = [usuario, senha, file.path, id]
    
    await conn.query(sql,values);


}

//Alterando FOTO, NOME e SENHA
async function alterFileNameAndPassword(nome, senha, file, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ?, senha = ?, foto = ? WHERE id_operador = ? ';
    const values = [nome, senha, file.path, id]
    
    await conn.query(sql,values);


}

//Alterando FOTO, USUARIO e NOME
async function alterFileUserAndName(nome, usuario, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_operadores SET nome = ?, usuario = ?, foto = ? WHERE id_operador = ? ';
    const values = [nome, usuario, file.path, id]
    
    await conn.query(sql,values);


} 




module.exports =  { 
    
    alterAllValues,
    alterName, 
    alterUser,
    alterPassword, 
    alterFile,
    statusDisabled,
    statusActive,
    alterNameAndUser,
    alterNameAndPassword,
    alterUserAndPassword,
    alterFileAndName,
    alterFileAndPassword,
    alterFileAndUser,
    alterFileUserAndPassword,
    alterFileNameAndPassword,
    alterFileUserAndName,

}