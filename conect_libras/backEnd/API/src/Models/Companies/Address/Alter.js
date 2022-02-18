const { query } = require("express");
const db = require("../../../database/connection");



    //Alterando TODOS os VALORES
    async function alterAllValues(data) {
        
            const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET cep = ?, logradouro = ?, complemento = ?, numero = ?,  bairro = ?, cidade = ?, estado = ?  WHERE cod_endereco = ?';
            const values = [data.cep, data.logradouro,  data.complemento, data.numero, data.bairro, data.cidade, data.estado, data.id]
            
            await conn.query(sql, values);

    }


        

    
    //CEP, LOGRADOURO, NUMERO, BAIRRO
    async function alterBairroCepLogradouroAndNumero(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET cep = ?, logradouro = ?, numero = ?, bairro = ?  WHERE cod_endereco = ?';
            const values = [data.cep, data.logradouro, data.numero, data.bairro, data.id]
            
            await conn.query(sql, values);


    }

    
    //CEP, LOGRADOURO, COMPLEMENTO, NÚMERO
    async function alterCepLogradouroNumeroAndComplemento(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET cep = ?, logradouro = ?, complemento = ?,  numero = ? WHERE cod_endereco = ?';
            const values = [data.cep, data.logradouro, data.complemento, data.numero, data.id]
            
            await conn.query(sql, values);


    }





    
    //CEP, LOGRADOURO, COMPLEMENTO,  NUMERO, BAIRRO 
    async function alterBairroCepLogradouroNumeroAndComplemento(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET cep = ?, logradouro = ?, complemento = ?, numero = ?, bairro = ?  WHERE cod_endereco = ?';
            const values = [data.cep, data.logradouro, data.complemento, data.numero, data.bairro, data.id]
            
            await conn.query(sql, values);


    }


    
    //CEP,  LOGRADOURO, NÚMERO
    async function alterCepLogradouroAndNumero(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET cep = ?, logradouro = ?, numero = ? WHERE cod_endereco = ?';
            const values = [data.cep, data.logradouro, data.numero, data.id]
            
            await conn.query(sql, values);


    }


   




    //NUMERO E COMPLEMENTO
    async function alterNumeroAndComplemento(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET complemento = ?, numero = ? WHERE cod_endereco = ?';
            const values = [data.complemento, data.numero,  data.id]
            
            await conn.query(sql, values);


    }


   

    //SOMENTE NÚMERO
    async function alterNumber(data) {

        const conn = await db.connect(); 
            const sql =  'UPDATE tbl_endereco_empresa SET numero = ? WHERE cod_endereco = ?';
            const values = [data.numero, data.id]
            
            await conn.query(sql, values);

    }




    

module.exports =  {

    alterAllValues,
    alterBairroCepLogradouroAndNumero,
    alterCepLogradouroNumeroAndComplemento,
    alterBairroCepLogradouroNumeroAndComplemento,
    alterNumeroAndComplemento,
    alterNumber,
    alterCepLogradouroAndNumero
   
}