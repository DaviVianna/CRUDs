const db = require("../../../database/connection");



async function getUsers(data) {

    const conn = await db.connect();

    const [rows] = await conn.query(`SELECT * FROM tbl_usuarios WHERE usuario = '${data.usuario}' AND senha = '${data.senha}'  `);
    
    //Crio um Array somente com o Usuário
    const user = rows.map(user => user.usuario);
    //Crio um Array somente com a Senha
    const password = rows.map(password => password.senha);
    //Concateno os 2 Arrays
    const result = user.concat(password);

    //Retorno o resultado para a Controller
    return result;


}


module.exports = { getUsers }
