const db = require("../../database/connection");




//Alterando TODOS os VALORES
async function alterAllValues(nome, usuario, senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, usuario = ?, senha = ?, foto = ? WHERE id_administrador = ? ';
    const values = [nome, usuario, senha, file.path, id]  
    
    await conn.query(sql, values);


}




//Alterando SOMENTE o NOME
async function alterName(nome, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ? WHERE id_administrador = ? ';
    const updateValues = [nome, id]
    
    await conn.query(sql, updateValues);




}



//Alterando SOMENTE o USUÁRIO
async function alterUser(usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET usuario = ? WHERE id_administrador = ? ';
    const values = [usuario,  id]
    
    await conn.query(sql, values);




}






//Alterando SOMENTE a SENHA
async function alterPassword(senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET senha = ? WHERE id_administrador = ? ';
    const values = [senha, id]
    
    await conn.query(sql, values);



}




//Status == DESATIVAR
async function statusDisabled(id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET estatus = "DESATIVADO" WHERE id_administrador = ? ';
    const values = [id]
    
    await conn.query(sql, values);



}






//Status == ATIVAR
async function statusActive(id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET estatus = "ATIVO" WHERE id_administrador = ? ';
    const values = [id]
    
    await conn.query(sql, values);



}




//Alterando NOME e USUÁRIO
async function alterNameAndUser(nome, usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, usuario = ? WHERE id_administrador = ? ';
    const values = [nome, usuario, id]
    
    await conn.query(sql, values);





}



//Alterando NOME e SENHA
async function alterNameAndPassword(nome, senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, senha = ? WHERE id_administrador = ? ';
    const values = [nome, senha, id]
    
    await conn.query(sql, values);


}




//Alterando USUÁRIO e SENHA
async function alterUserAndPassword(usuario, senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET usuario = ?, senha = ? WHERE id_administrador = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql, values);



}


//Alterando NOME, USUARIO e SENHA
async function alterNameUserAndPassword(nome, usuario, senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, usuario = ?, senha = ? WHERE id_administrador = ? ';
    const values = [nome, usuario, senha, id]
    
    await conn.query(sql, values);


}







//Somente a FOTO
async function alterFile(file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET foto = ? WHERE id_administrador = ? ';
    const values = [file.path, id]
    
    await conn.query(sql,values);


}



//Alterando Foto e Nome
async function alterFileAndName(nome, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, foto = ? WHERE id_administrador = ? ';
    const values = [nome, file.path, id]
    
    await conn.query(sql,values);


}



//Alterando Foto e Usuario
async function alterFileAndUser(usuario, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET usuario = ?, foto = ? WHERE id_administrador = ? ';
    const values = [usuario, file.path, id]
    
    await conn.query(sql, values);


}


//Alterando Foto e Senha
async function alterFileAndPassword(senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET senha = ?, foto = ? WHERE id_administrador = ? ';
    const values = [senha, file.path, id]
    
    await conn.query(sql,values);


}



//Alterando FOTO, USUARIO e SENHA

async function alterFileUserAndPassword(usuario, senha, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET usuario = ?, senha = ?, foto = ? WHERE id_administrador = ? ';
    const values = [usuario, senha, file.path, id]
    
    await conn.query(sql, values);


}



//Alterando FOTO, NOME e SENHA
async function alterFileNameAndPassword(nome, senha, file, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, senha = ?, foto = ? WHERE id_administrador = ? ';
    const values = [nome, senha, file.path, id]
    
    await conn.query(sql,values);


}



//Alterando FOTO, USUARIO e NOME
async function alterFileUserAndName(nome, usuario, file, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_adm_system SET nome = ?, usuario = ?, foto = ? WHERE id_administrador = ? ';
    const values = [nome, usuario, file.path, id]
    
    await conn.query(sql,values);


} 





module.exports =  { 
    
    alterAllValues,
    alterName, 
    alterUser, 
    alterPassword,
    statusDisabled,
    statusActive, 
    alterNameAndUser, 
    alterNameAndPassword, 
    alterUserAndPassword,
    alterNameUserAndPassword,
    alterFile,
    alterFileAndName,
    alterFileAndUser,
    alterFileAndPassword,
    alterFileUserAndPassword,
    alterFileNameAndPassword,
    alterFileUserAndName,


}