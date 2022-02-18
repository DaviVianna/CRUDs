const db = require("../../../database/connection");


//Altera todos os valores
async function alterAllValues(data) {

    const conn = await db.connect();

    const sql = "UPDATE tbl_empresas SET empresa = ?, responsavel = ?, estatus = ?, fk_plano = ? WHERE cnpj = ?";
    const values = [data.empresa, data.responsavel, data.status, data.plano, data.cnpj];

    await conn.query(sql, values);


}

//Alterando Telefone, Celular e E-mail na tbl_contato_empresa
async function alterContatoEmpresa(data) {

    const conn = await db.connect();

    const sql = "UPDATE tbl_contato_empresa SET telefone = ?, telefone2 = ?, celular = ?, celular2 = ?, email = ?, email2 = ? WHERE cnpj = ?";
    const values = [
        data.telefone, 
        data.telefone2,
        data.celular,
        data.celular2, 
        data.email,
        data.email2, 
        data.cnpj
    
    ];

    await conn.query(sql, values);


}

//NOME
async function alterCompanie(data) {

    const conn = await db.connect();

    const sql = "UPDATE tbl_empresas SET empresa = ? WHERE cnpj = ?";
    const values = [data.empresa, data.cnpj];

    await conn.query(sql, values);

}




//Responsavel
async function alterBoss(data) {

    
    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET responsavel = ? WHERE cnpj = ?"; 
    
    const values = [data.responsavel, data.cnpj];
    
    await conn.query(sql, values);


}




//STATUS == ACTIVE
async function alterStatusActive(data) {

    
    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET estatus = 'ATIVO' WHERE cnpj = ?"; 
    
    const values = [data.cnpj];
    
    await conn.query(sql, values);


}




//STATUS == DISABLED
async function alterStatusDisabled(data) {

    
    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET estatus = 'DESATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.cnpj];
    
    await conn.query(sql, values);


}


async function alterPlano(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET fk_plano = ? WHERE cnpj = ?"; 
    
    const values = [data.plano, data.cnpj];
    
    await conn.query(sql, values);

}





//COMBINAÇÕES PARA ALTERAR


async function alterPlanoAndStatusActive(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET fk_plano = ?, estatus = 'ATIVO' WHERE cnpj = ?"; 
    
    const values = [data.plano, data.cnpj];
    
    await conn.query(sql, values);




}


async function alterPlanoAndStatusDisabled(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET fk_plano = ?, estatus = 'DESATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.plano, data.cnpj];
    
    await conn.query(sql, values);



}



//empresa e responsavel
async function alterCompanieAndBoss(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET empresa = ?, responsavel = ? WHERE cnpj = ?"; 
    
    const values = [data.empresa, data.responsavel, data.cnpj];
    
    await conn.query(sql, values);



}



//empresa e status == active
async function alterCompanieAndStatusActive(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET empresa = ?,  estatus = 'ATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.empresa, data.cnpj];
    
    await conn.query(sql, values);



}







//empresa e status == disabled

async function alterCompanieAndStatusDisabled(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET empresa = ?, estatus = 'DESATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.empresa, data.cnpj];
    
    await conn.query(sql, values);



}



//responsavel e status == active
async function alterBossAndStatusActive(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET responsavel = ?, estatus = 'ATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.responsavel, data.cnpj];
    
    await conn.query(sql, values);



}



//responsavel e status == disabled

async function alterBossAndStatusDisabled(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET responsavel = ?, estatus = 'DESATIVADO' WHERE cnpj = ?"; 
    
    const values = [data.responsavel, data.cnpj];
    
    await conn.query(sql, values);



}



module.exports = { 

    alterAllValues,
    alterContatoEmpresa,
    alterCompanie,
    alterBoss,
    alterStatusActive,
    alterStatusDisabled,
    alterPlano,
    alterPlanoAndStatusActive,
    alterPlanoAndStatusDisabled,
    alterCompanieAndBoss,
    alterCompanieAndStatusActive,
    alterCompanieAndStatusDisabled,
    alterBossAndStatusActive,
    alterBossAndStatusDisabled,
    
}