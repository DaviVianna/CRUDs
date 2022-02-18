const db = require('../../database/connection');


//Alterando Preço e Minutos
async function alterPriceAndMinute(data) {

    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_unitario = ?, minutos = ? WHERE plano = ? ";

    const values = [data.valor, data.minutos, data.plano]

    await conn.query(sql, values);



}


//Alterando Preço e Minutos Extras
async function alterPriceAndMinuteMore(data) {

    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_unitario = ?, valor_minutos_extra = ?  WHERE plano = ? ";

    const values = [ data.valor, data.valor_minutos_extra, data.plano]

    await conn.query(sql, values);


    
}





//Alterando Preço e Login Extra
async function alterPriceAndValLoginMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_unitario = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [ data.valor,  data.valor_login_extra, data.plano]

    await conn.query(sql, values);

    
}





//Alterando Minutos e Minutos Extra
async function alterMinuteAndMinuteMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET minutos = ?, valor_minutos_extra = ? WHERE plano = ? ";

    const values = [data.minutos, data.valor_minutos_extra, data.plano]

    await conn.query(sql, values);

    
}




//Alterando Minutos e Login Extra

async function alterMinuteAndValLoginMore(data) {

    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET minutos = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [data.minutos, data.valor_login_extra, data.plano]

    await conn.query(sql, values);


    
}





//Alterando Minutos Extra e Login Extra
async function alterMinuteMoreAndValLoginMore(data) {


    const conn = await db.connect(); 
    const sql =  "UPDATE tbl_planos SET valor_minutos_extra = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [data.valor_minutos_extra, data.valor_login_extra, data.plano]

    await conn.query(sql, values);

    
}






//Alterando MINUTOS, VALOR_MINUTOS_EXTRA, VALOR_LOGIN_EXTRA

async function alterMinuteAndLogin(data) {

    const conn = await db.connect(); 

    const sql =  "UPDATE tbl_planos SET minutos = ?, valor_minutos_extra = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [

          data.minutos,
          data.valor_minutos_extra, 
          data.valor_login_extra, 
          data.plano

        ]

    await conn.query(sql, values);



}


//Alterando MINUTOS, VALOR_MINUTOS_EXTRA, VALOR_LOGIN_EXTRA, VALOR

async function alterValues(data) {

    const conn = await db.connect(); 

    const sql =  "UPDATE tbl_planos SET valor_unitario = ?, minutos = ?, valor_minutos_extra = ?, valor_login_extra = ? WHERE plano = ? ";

    const values = [ 

        data.valor,
        data.minutos, 
        data.valor_minutos_extra, 
        data.valor_login_extra, 
        data.plano

    ]

    await conn.query(sql, values);


}




module.exports = {

    //Preço 
    alterPriceAndMinute, 
    alterPriceAndMinuteMore,
    alterPriceAndValLoginMore,
    //Minutos 
    alterMinuteAndMinuteMore, 
    alterMinuteAndValLoginMore,
    //Minutos Extra 
    alterMinuteMoreAndValLoginMore,
 
    alterMinuteAndLogin,
    alterValues


}