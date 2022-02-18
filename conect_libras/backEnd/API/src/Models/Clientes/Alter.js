const db = require("../../database/connection");

//Alterando somente o NOME
async function alterName(nome, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ? WHERE id_cliente = ? ';
    const values = [nome, id]
    
    await conn.query(sql, values);


}



//Alterando somente o USUÁRIO
async function alterEmail(usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ? WHERE id_cliente = ? ';
    const values = [usuario, id]
    
    await conn.query(sql, values);

    
}





//Alterando somente a SENHA
async function alterPassword(senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET senha = ? WHERE id_cliente = ? ';
    const values = [senha, id]
    
    await conn.query(sql, values);


    
}

//SOMENTE A FOTO
async function alterFile(data) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET foto = ? WHERE id_cliente = ? ';
    const values = [data.file.path, data.id]
    
    await conn.query(sql, values);


}


//STATUS == ACTIVE 
async function alterStatusActive(id){


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET estatus = "ATIVO" WHERE id_cliente = ? ';
    const values = [id]
    
    await conn.query(sql, values);


    
}

//STATUS == DISABLED

async function alterStatusDisabled(id){


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET estatus = "DESATIVADO" WHERE id_cliente = ? ';
    const values = [id]
    
    await conn.query(sql, values);


    
}


//Alterando EMAIL e SENHA

async function alterEmailAndPassword(usuario, senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, senha = ? WHERE id_cliente = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql, values);

}


//STATUS == ACTIVE e EMAIL
async function alterStatusActiveAndEmail(usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, estatus = "ATIVO"  WHERE id_cliente = ? ';
    const values = [usuario, id]
    
    await conn.query(sql, values);

}


//STATUS == DISABLED e EMAIL
async function alterStatusDisabledAndEmail(usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, estatus = "DESATIVADO"  WHERE id_cliente = ? ';
    const values = [usuario, id]
    
    await conn.query(sql, values);

}



//STATUS == ACTIVE e SENHA 

async function alterStatusActiveAndPassword(senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET senha = ?, estatus = "ATIVO"  WHERE id_cliente = ? ';
    const values = [senha, id]
    
    await conn.query(sql, values);

}



//STATUS == DISABLED e SENHA

async function alterStatusDisabledAndPassword(senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET senha = ?, estatus = "DESATIVADO"  WHERE id_cliente = ? ';
    const values = [senha, id]
    
    await conn.query(sql, values);

}


//STATUS == ACTIVE e NOME

async function alterStatusActiveAndName(nome, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, estatus = "ATIVO"  WHERE id_cliente = ? ';
    const values = [nome, id]
    
    await conn.query(sql, values);

}



//STATUS == DISABLED e NOME

async function alterStatusDisabledAndEmail(usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, estatus = "DESATIVADO"  WHERE id_cliente = ? ';
    const values = [usuario, id]
    
    await conn.query(sql, values);

}



//Alterando NOME e SENHA

async function alterNameAndPassword(nome, senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, senha = ? WHERE id_cliente = ? ';
    const values = [nome, senha, id]
    
    await conn.query(sql, values);


    
}


//Alterando NOME e EMAIL

async function alterNameAndEmail(nome, usuario, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ? WHERE id_cliente = ? ';
    const values = [nome, usuario, id]
    
    await conn.query(sql, values);


    
}



//EMAIL e SENHA
async function alterEmailAndSenha(usuario,  senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, senha = ? WHERE id_cliente = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql, values);


    
}



//NOME, EMAIL e SENHA
async function alterNomeEmailAndSenha(nome, usuario,  senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?, senha = ? WHERE id_cliente = ? ';
    const values = [nome, usuario, senha, id]
    
    await conn.query(sql, values);

}



//EMAIL, SENHA, STATUS == ACTIVE

async function alterEmailSenhaAndStatusActive(usuario, senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, senha = ?, estatus = "ATIVO" WHERE id_cliente = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql, values);

}


//EMAIL, SENHA, STATUS == DISABLED

async function alterEmailSenhaAndStatusDisabled(usuario, senha, id) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, senha = ?, estatus = "DESATIVADO" WHERE id_cliente = ? ';
    const values = [usuario, senha, id]
    
    await conn.query(sql, values);

}


//NOME, EMAIL, SENHA, STATUS == ACTIVE
async function alterNomeEmailSenhaAndStatusActive(nome, usuario, senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?, senha = ?, estatus = "ATIVO" WHERE id_cliente = ? ';
    const values = [nome, usuario, senha, id]
    
    await conn.query(sql, values);

}




// NOME, EMAIL, SENHA, STATUS == DISABLED
async function alterNomeEmailSenhaAndStatusDisabled(nome, usuario, senha, id) {

    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?, senha = ?, estatus = "DESATIVADO" WHERE id_cliente = ? ';
    const values = [nome, usuario, senha, id]
    
    await conn.query(sql, values);

}



//Alterando TODOS os VALORES
async function alterAllValues(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?, senha = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.nome, data.usuario, data.senha, data.file.path, data.id]
    
    await conn.query(sql, values);

}





//NOME e FOTO

async function alterFileAndNome(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.nome, data.file.path, data.id]
    
    await conn.query(sql, values);

}




//nome, usuario e foto
async function alterFotoNomeAndEmail(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?,  foto = ? WHERE id_cliente = ? ';
    const values = [data.nome, data.usuario, data.file.path, data.id]
    
    await conn.query(sql, values);

}




//nome, usuario, senha, foto
async function  alterNomeEmailSenhaAndFile(data){


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, usuario = ?, senha = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.nome, data.usuario, data.senha, data.file.path, data.id]
    
    await conn.query(sql, values);

}


//usuario, foto,
async function alterFileAndEmail(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.usuario, data.file.path, data.id]
    
    await conn.query(sql, values);

}

//usuario, senha, foto

async function alterEmailSenhaAndFoto(data){


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET usuario = ?, senha = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.usuario, data.senha, data.file.path, data.id]
    
    await conn.query(sql, values);

}


//senha, foto, 
async function alterFotoAndSenha(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET senha = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.senha, data.file.path, data.id]
    
    await conn.query(sql, values);

}




//senha, foto, nome

async function alterNomeSenhaAndFoto(data) {


    const conn = await db.connect(); 
    const sql =  'UPDATE tbl_clientes SET nome = ?, senha = ?, foto = ? WHERE id_cliente = ? ';
    const values = [data.nome, data.senha, data.file.path, data.id]
    
    await conn.query(sql, values);

}


module.exports =  { 

    alterName,
    alterEmail,
    alterPassword,
    alterFile,
    alterStatusActive,
    alterStatusDisabled,
    alterEmailAndPassword,
    alterStatusActiveAndEmail,
    alterStatusDisabledAndEmail,
    alterStatusActiveAndPassword,
    alterStatusDisabledAndPassword,
    alterStatusActiveAndName,
    alterStatusDisabledAndEmail,
    alterNameAndPassword,
    alterNameAndEmail,
    alterEmailAndSenha,
    alterNomeEmailAndSenha,
    alterEmailSenhaAndStatusActive,
    alterEmailSenhaAndStatusDisabled,
    alterNomeEmailSenhaAndStatusActive,
    alterNomeEmailSenhaAndStatusDisabled,
    alterAllValues,
    alterFileAndNome,
    alterFotoNomeAndEmail,
    alterNomeEmailSenhaAndFile,
    alterFileAndEmail,
    alterEmailSenhaAndFoto,
    alterFotoAndSenha,
    alterNomeSenhaAndFoto
    
    
}