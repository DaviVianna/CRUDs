const express = require('express');
const routes = require('express').Router();

//required model 
const db = require("../../Models/Operators/Post");




routes.post('/cadastro', async (req, res) => {

   
    const data = {

        operador: req.body.operador,
        usuario:  req.body.usuario, 
        senha:    req.body.senha,
        file:     req.file,
        tipo:     req.body.tipo,     

    }

    //Cadastra TODOS MENOS o FILE
    if(!data.file || typeof data.file == undefined || data.file.length == 0 || data.file == null || data.file == 0 ) { 


        const { operador, usuario , senha, tipo } = data;



        //Validação dos dados passados
        if(operador == "" || operador.length == 0 || operador == null || typeof operador == undefined || operador == 0) {

            res.status(400).send({

                codigo: 2, 
                msg: 'Nome não informado.'

            });

        }else if(usuario == "" || usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0 ) {


            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário não informado.'

            });

            

        }else if(senha == "" || typeof senha == undefined || senha == null ) {


            res.status(400).send({

                codigo: 4, 
                msg: 'Senha não informada.'

            });

        

        }else if(senha.length <= 6 || senha == 0) {


            res.status(400).send({

                codigo: 5, 
                msg: 'Senha deve conter no mínimo 7 caracteres. '

            });

        }else if(tipo == '' || tipo.length == 0 || typeof tipo == undefined || typeof tipo == null) {


            res.status(400).send({

                codigo: 6, 
                msg: 'Tipo não informado.'



            });

        }else if(tipo != 'Operador' ) {

            res.status(400).send({

                codigo: 7, 
                msg: 'Tipo não correspondente.'


            });
        }else {     

     
           await db.insertData(operador, usuario, senha, tipo);
            res.status(201).send({
                    
                codigo: 1,
                msg: 'Operador (A) cadastrado (A) corretamente. '
                        
            });  
        }

    }else { //INSERI TODOS os DADDOS


        //Mas ANTES de INSERIR, faremos a VALIDAÇÃO
        if(data.operador == "" || data.operador.length === 0 || typeof data.operador == undefined || data.operador == null || data.operador == 0) {

            res.status(400).send({

                codigo: 2, 
                msg: 'Nome não informado.'

            });

        }else if(data.usuario == "" || data.usuario.length == 0 || typeof data.usuario == undefined || data.usuario == null || data.usuario == 0) {


            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário não informado.'

            });

            

        }else if(data.senha == "" || typeof data.senha == undefined || data.senha == null) {


            res.status(400).send({

                codigo: 4, 
                msg: 'Senha não informada.'

            });


        }else if(data.senha.length == 0 || data.senha == 0) {
            
            res.status(400).send({

                codigo: 5, 
                msg: 'Senha deve conter no minímo 7 caracteres.'

            });


        }else if(data.tipo.length == 0 || data.tipo == '' || data.tipo == 0 || typeof data.tipo == undefined || typeof data.tipo == null) {

            res.status(400).send({

                codigo: 6, 
                msg: 'Tipo não informado.'

            });


        }else if(data.tipo != 'Operador') {

            res.status(400).send({

                codigo: 7, 
                msg: 'Tipo não correspondente'

            });

        }else {     

            await db.insertAllData(data);
            res.status(201).send({
                    
                codigo: 1,
                msg: 'Operador (A) cadastrado (A) corretamente. '
                
            });    

        }


    }


});




module.exports = { routes }