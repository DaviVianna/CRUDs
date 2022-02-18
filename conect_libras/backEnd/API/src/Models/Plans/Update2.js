const db = require('../../database/connection');







//Alterando DESCRIÇÃO e PREÇO
async function alterDescriptionAndPrice(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ?, valor_unitario = ? WHERE plano = ?";

    const values = [data.descricao, data.valor, data.plano]

    await conn.query(sql, values);




}




//Alterando DESCRIÇÃO e MINUTOS
async function alterdescriptionAndMinute(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ?, minutos = ? WHERE plano = ? ";

    const values = [data.descricao, data.minutos, data.plano]

    await conn.query(sql, values);




}




//Alterando DESCRIÇÃO e MINUTOS_EXTRA

async function alterDescriptionAndMinuteMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ?, valor_minutos_extra = ? WHERE plano = ? ";

    const values = [data.descricao, data.valor_minutos_extra, data.plano]

    await conn.query(sql, values);




}




//Alterando DESCRIÇÃO e VALOR_LOGIN_EXTRA
async function  alterDescritionAndValLoginMore (data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET descricao = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [data.descricao, data.valor_login_extra, data.plano]

    await conn.query(sql, values);




}






module.exports = {

    //Descriçao
    alterDescriptionAndPrice,
    alterdescriptionAndMinute,
    alterDescriptionAndMinuteMore, 
    alterDescritionAndValLoginMore,


}