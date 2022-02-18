const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

//required Model
const db = require("../../Models/Login/Operators/Get");


//Variável Global 
let SECRET;




router.post('/operador' , async (req, res) => {

    const data = {

        usuario: req.body.usuario, 
        senha:   req.body.senha

    }

    //Validação dos dados passados 
    if(data.usuario == '' || data.senha == '') {

        res.status(400).send({

            codigo: 2, 
            msg: '*Preencha todos os Campos.'

        });

    }else {

        //Instancio a Model 
        const operator = await db.Auth(data);
       

        if(operator.length > 0) {

            SECRET = JSON.stringify(operator[0].dt_criacao);
            const token = jwt.sign({operaId: operator[0].id_operador}, SECRET);
            global.loginData = { auth: true, token, operator };

            res.status(200).send(global.loginData);
           


        }else {

            res.status(400).send({

                codigo: 3, 
                msg: 'Login incorreto .'

            });
        }
    }



});




/*function verifyJWT(req, res, next) {

    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {

        if(err) {

            return res.status(401).send({

                codigo: 401, 
                msg: 'Usuário não autenticado .'

            }); 

        }else {

            req.operaId = decoded.operaId;

        }

        next();


    });

}

*/

module.exports = { router }


