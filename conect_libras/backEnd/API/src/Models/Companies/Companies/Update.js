const db = require("../../../database/connection");



//Altera TODOS os dados de ENDEREÇO da Empresa
async function alterAllValues(data) {

    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET cep = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ?, estado = ? WHERE cnpj = ?"; 
    
    const values = [

        data.cep,
        data.logradouro,
        data.numero, 
        data.bairro,    
        data.cidade, 
        data.estado,
        data.cnpj
        
    ];
    
    await conn.query(sql, values);

}



//Endereço
async function alterEndereco(cep, logradouro, numero, cnpj) {


    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET cep = ?, logradouro = ?, numero = ? WHERE cnpj = ?"; 
    
    const values = [
    
        cep, 
        logradouro, 
        numero, 
        cnpj
    
    ];
    
    await conn.query(sql, values);

}



async function alterCepLogradouroNumeroBairro(cep, logradouro, numero, bairro, cnpj) {


    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET cep = ?, logradouro = ?, numero = ?, bairro = ? WHERE cnpj = ?"; 
    
    const values = [
    
        cep, 
        logradouro, 
        numero, 
        bairro,
        cnpj
    
    ];
    
    await conn.query(sql, values);

}





async function alterAddress(cep, logradouro, numero, bairro, cidade, cnpj) {


    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET cep = ?, logradouro = ?, numero = ?, bairro = ?, cidade = ? WHERE cnpj = ?"; 
    
    const values = [
    
        cep, 
        logradouro, 
        numero, 
        bairro, 
        cidade,
        cnpj
    
    ];
    
    await conn.query(sql, values);

}









async function alterNumber(numero, cnpj) {


    const conn = await db.connect(); 
    const sql = "UPDATE tbl_empresas SET numero = ? WHERE cnpj = ?"; 
    
    const values = [ numero, cnpj ];
    
    await conn.query(sql, values);

}




module.exports =  { 

    alterAllValues,
    alterEndereco,
    alterCepLogradouroNumeroBairro,
    alterAddress,
    alterNumber,

  


}