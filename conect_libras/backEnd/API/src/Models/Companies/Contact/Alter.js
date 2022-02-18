const db = require("../../../database/connection");



//Alterar TODOS OS VALORES
async function alterAllValues(data) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET telefone = ?, celular = ?, email = ?, responsavel = ? WHERE id_contato = ? ';
    const values = [data.telefone, data.celular, data.email,  data.responsavel, data.id]
    
    await conn.query(sql, values);


}



//Alterar EMAIL

async function alterEmail(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ? WHERE id_contato = ? ';
    const values = [data.email,  data.id]
    
    await conn.query(sql, values);



}


//Alterar TELEFONE
async function  alterPhone(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET telefone = ? WHERE id_contato = ? ';
    const values = [data.telefone, data.id]
    
    await conn.query(sql, values);


}




//Alterar CELULAR
async function alterCellPhone(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET celular = ? WHERE id_contato = ? ';
    const values = [data.celular, data.id]
    
    await conn.query(sql, values);



}




//Alterar RESPONSAVEL
async function alterBoss(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET responsavel = ? WHERE id_contato = ? ';
    const values = [data.responsavel, data.id]
    
    await conn.query(sql, values);



}







//Alterar EMAIL e TELEFONE
async function alterEmailAndPhone(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ?, telefone = ? WHERE id_contato = ? ';
    const values = [data.email, data.telefone, data.id]
    
    await conn.query(sql, values);



}









//Alterar EMAIL e CELULAR
async function alterEmailAndCellPhone(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ?, celular = ? WHERE id_contato = ? ';
    const values = [data.email, data.celular, data.id]
    
    await conn.query(sql, values);



}









//Alterar EMAIL e RESPONSAVEL
async function alterEmailAndBoss(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ?, responsavel = ? WHERE id_contato = ? ';
    const values = [data.email, data.responsavel, data.id]
    
    await conn.query(sql, values);



}








//Alterar  TELEFONE e CELULAR
async function alterPhoneAndCellPhone(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET telefone = ?, celular = ? WHERE id_contato = ? ';
    const values = [data.telefone, data.celular,  data.id]
    
    await conn.query(sql, values);



}









//Alterar TELEFONE e RESPONSAVEL
async function alterPhoneAndBoss(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET telefone = ?,  responsavel = ? WHERE id_contato = ? ';
    const values = [data.telefone, data.responsavel, data.id]
    
    await conn.query(sql, values);



}










//Alterar CELULAR e RESPONSAVEL
async function alterCellPhoneAndBoss(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET celular = ?, responsavel = ? WHERE id_contato = ? ';
    const values = [data.celular, data.responsavel, data.id]
    
    await conn.query(sql, values);



}




//Alterar EMAIL, TELEFONE e CELULAR
async function alterValues(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ?, telefone = ?, celular = ? WHERE id_contato = ? ';
    const values = [data.email, data.telefone, data.celular, data.id]
    
    await conn.query(sql, values);



}




//Alterar TELEFONE, CELULAR, RESPONSAVEL
async function alterOthersValues(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET telefone = ?, celular = ?, responsavel = ? WHERE id_contato = ? ';
    const values = [data.telefone, data.celular, data.responsavel, data.id]
    
    await conn.query(sql, values);



}



//Alterar EMAIL, CELULAR, RESPONSAVEL
async function alterManyValues(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_contato_empresa SET email = ?, celular = ?, responsavel = ? WHERE id_contato = ? ';
    const values = [data.email, data.celular, data.responsavel, data.id]
    
    await conn.query(sql, values);


2
}






module.exports =  { 

    alterAllValues,
    alterEmail, 
    alterPhone, 
    alterCellPhone, 
    alterBoss, 

    //Combinações
   
    alterEmailAndPhone,
    alterEmailAndCellPhone,
    alterEmailAndBoss, 

   
    alterPhoneAndCellPhone, 
    alterPhoneAndBoss,

    alterCellPhoneAndBoss, 

    alterValues,
    alterOthersValues,
    alterManyValues




 }