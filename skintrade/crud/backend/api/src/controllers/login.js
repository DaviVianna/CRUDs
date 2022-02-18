const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
//required Model
const db = require("../models/login");

//Variável Global 
let SECRET;



const post = async (req, res) => {

    
    const data = {

        usuario: req.body.usuario, 
        senha:   req.body.senha,

    }


     //Validação dos dados passados
     if(data.usuario === '' || data.usuario.length === 0 || typeof data.usuario === undefined || typeof data.usuario === null ) {

        res.status(400).send({

            codigo: 2, 
            msg: 'Usuário não informado.'

        });

    }else if(data.senha === '' || data.senha.length === 0 || typeof data.senha === undefined || typeof data.senha === null) {

        res.status(400).send({

            codigo: 3, 
            msg: 'Senha não informada.'


        });

    }else {

        //Instancio a Model     
        const loginAuth = await db.loginAuth(data);


       
        
        //Verificando se encontrou algo 
        if(loginAuth.length > 0) {

            //Verificando a senha
            if(loginAuth[0].senha !== data.senha) {

                res.status(400).send({
    
                    codigo: 2, 
                    msg: 'Senha incorreta.'
    
                });

            }else {


                SECRET = JSON.stringify(loginAuth[0].usuario);
                const token = {
    
                    jwt: jwt.sign({ userId: loginAuth[0].id_usuario}, SECRET, { expiresIn: 900}),
                    userData: loginAuth[0].id_usuario
                    
                }
    
    
                global.loginData = {
    
                    auth: true, 
                    token: token.jwt, 
                    userData: token.userData, 
        
                }
    
                res.send(global.loginData);

            }


        }else {


            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário incorreto.'

            });

        }

    }
}



module.exports = { post }




