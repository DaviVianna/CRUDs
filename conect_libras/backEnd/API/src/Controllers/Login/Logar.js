const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
//required Model
const db = require("../../Models/Login/Logar");

//Variável Global 
let SECRET;


router.post('/logar', async (req, res) => {

    const data = {

        usuario: req.body.usuario, 
        senha:   req.body.senha,

    }


    //Validação dos dados passados
    if(data.usuario == '' || data.usuario == 0 || typeof data.usuario == undefined || typeof data.usuario == null ) {

        res.status(400).send({

            codigo: 2, 
            msg: 'Usuário não informado.'

        });

    }else if(data.senha == '' || data.senha.length == 0 || data.senha == 0 || typeof data.senha == undefined || typeof data.senha == null) {

        res.status(400).send({

            codigo: 3, 
            msg: 'Senha não informada.'


        });

    }else {

        //Instancio a Model 
        const seachData = await db.seachData(data);

       
        //Usuário encontrado
        if(seachData.length > 0) {

            //Verificando a senha
            if(seachData[0].senha !== data.senha) {

                return res.status(400).send({
    
                    codigo: 2, 
                    msg: 'Senha incorreta.'
    
                });
            }

            //seachData[0].dt_criacao
            SECRET = JSON.stringify(seachData[0].dt_criacao);
            const token = {

                jwt: jwt.sign({ userId: seachData[0].id_operador}, SECRET, { expiresIn: 600}),
                userData: seachData[0].id_operador
                
            }


            global.loginData = {

                auth: true, 
                token: token.jwt, 
                userData: token.userData, 
    
            }

            res.send(global.loginData);
        

        }else {


            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário incorreto.'

            });

        }
        
    }
        
})


function verifyJWT(req, res, next) {

    const token = req.headers['x-access-token'];
    jwt.verify(token, SECRET, (err, decoded) => {

        if(err) {

           return res.status(401).send({

                codigo: 2, 
                msg: 'Não autenticado.'

            });

        } 

       
        req.userId = decoded.userId;
        next();

    });


}



module.exports = { router, verifyJWT }


