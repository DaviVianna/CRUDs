//open connection with MySql
const mysql = require('mysql2/promise');



function connect() { 


    const connection  = mysql.createConnection({

        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT,
        
    });

    return connection;
    


    /*
        const connection = mysql.createConnection(

            'mysql://root:@localhost:3306/db_c_libras_syss'

        );

        return connection;

    */


}

 


module.exports = { connect };










//**************************USAR EM CASO DE EXTREMA IMPORTÂNCIA*************************/

/*

    host: '127.0.0.1',
    user:'root',
    password: '',
    database: 'db_c_libras_syss'

*/



/* CONSOME RECURSOS, A CONEXAO FICA ABERTA


    const pool = mysql.createPool({

        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database:process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT


    });

    exports.pool = pool;

*/
