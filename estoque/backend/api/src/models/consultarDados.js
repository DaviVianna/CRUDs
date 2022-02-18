const db = require('../database/connection');


async function buscaDados() {

    const conn = await db.connect();

    //const [rows] = await conn.query('SELECT Namespace, Type, Description, Solution, Platform FROM systems');
    //return rows;

    const [Namespace] = await conn.query('SELECT DISTINCT(Namespace) FROM Systems');
    const [Type]      = await conn.query('SELECT DISTINCT(Type) FROM Systems');
    const [Solution]  = await conn.query('SELECT DISTINCT(Solution) FROM Systems;')
    const [Platform]  = await conn.query('SELECT DISTINCT(Platform) FROM Systems;')

    let  dados = [];
    dados.push(Namespace, Type, Solution, Platform);
    return dados;


}



module.exports = { buscaDados }