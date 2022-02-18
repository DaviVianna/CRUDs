const db = require("../../database/connection");




//Alterando SOMENTE a DESCRICAO

async function alterDescription(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ? WHERE plano = ? ";
    
    const values = [data.descricao, data.plano]
    


    await conn.query(sql, values);



}






//Alterando SOMENTE o VALOR

async function alterPrice(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_unitario = ? WHERE plano = ? ";
    
    const values = [data.valor, data.plano]
    
    await conn.query(sql, values);


    
}




//Alterando SOMENTE o MINUTOS

async function alterMinute(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET minutos = ? WHERE plano = ? ";
    
    const values = [data.minutos, data.plano]
    
    await conn.query(sql, values);




}







//Alterando SOMENTE o VALOR_MINUTOS_EXTRA

async function alterMinuteMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_minutos_extra = ? WHERE plano = ? ";
    
    const values = [data.valor_minutos_extra, data.plano]
    

    await conn.query(sql, values);



}




//Alterando SOMENTE o VALOR_LOGIN_EXTRA

async function alterValLoginMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_login_extra = ? WHERE plano = ? ";
    
    const values = [data.valor_login_extra, data.plano]
    
    await conn.query(sql, values);




}




//Status == DESATIVAR

async function statusDisabled(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET estatus = 'DESATIVADO' WHERE plano = ? ";
    
    const values = [data.plano]
    
    await conn.query(sql, values);




}




//Status == ATIVAR

async function statusActive(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET estatus = 'ATIVO' WHERE plano = ? ";
    
    const values = [data.plano]
    
    await conn.query(sql, values);




}






//Alterando TODOS os VALORES
async function alterAllValues(data) {

    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ?, valor_unitario = ?, minutos = ?, valor_minutos_extra = ?, valor_login_extra = ? WHERE plano = ? ";
    
    const values = [

        data.descricao,
        data.valor, 
        data.minutos, 
        data.valor_minutos_extra, 
        data.valor_login_extra, 
        data.plano
    
    ]
    
    
    await conn.query(sql, values);


} 






module.exports =  { 
    
    
    alterAllValues, 
    alterDescription, 
    alterPrice, 
    alterMinute, 
    alterMinuteMore, 
    alterValLoginMore, 
    statusDisabled,
    statusActive,


}