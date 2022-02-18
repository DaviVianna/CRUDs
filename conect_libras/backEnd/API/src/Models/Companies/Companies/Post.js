const db = require("../../../database/connection");



async function insertCompanies(data) {

    const conn = await db.connect();

    const sql = 'INSERT INTO tbl_empresas(cnpj, empresa, responsavel, cep, logradouro, numero, bairro, cidade, estado, fk_plano) VALUES(?,?,?,?,?,?,?,?,?,?)';  
   
    const values = [

        data.cnpj, 
        data.empresa, 
        data.responsavel, 
        data.cep,
        data.logradouro, 
        data.numero,
        data.bairro,
        data.cidade,
        data.estado,
        data.plano
    ]

    await conn.query(sql, values);

}


async function insert_contato_empresa(data, telefone, telefone2, celular, celular2, email, email2) {

    const conn = await db.connect();

    //Verificando se a empresa foi cadastrada
    const [rows] = await conn.query(`SELECT * FROM tbl_empresas WHERE cnpj = ${data.cnpj} `);

    if(rows.length > 0) {

        //Inserir o restante dos dados na tbl_contato_empresa
        const sql = 'INSERT INTO tbl_contato_empresa(cnpj, telefone, telefone2, celular, celular2, email, email2, contato) VALUES(?,?,?,?,?,?,?,?)';  

        const values = [

            data.cnpj, 
            telefone, 
            telefone2,
            celular, 
            celular2,
            email, 
            email2,
            data.responsavel

        ]


        await conn.query(sql, values);

    }


}


module.exports =  { insertCompanies, insert_contato_empresa }