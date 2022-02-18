//Required Model
const db = require("../../Models/Admin/Post");
//Encriptação de Senhas com HASH
const bcrypt = require('bcrypt');


const post =  async (req, res) => {


    const data = {

        administrador: req.body.admin, 
        usuario:       req.body.usuario, 
        senha:         req.body.senha,
        file:          req.file,
        tipo:          req.body.tipo

    }



    //Cadastrando todos MENOS o FILE
    if(!data.file || typeof data.file == undefined || data.file.length == 0 || data.file == 0 || data.file == null) {
        

        const { administrador, usuario, senha, tipo } = data;


        if(administrador == "" || administrador.length == 0 || administrador == null || typeof administrador == undefined || administrador == 0) {


            res.status(400).send({
     
                codigo: 2, 
                msg: 'Nome não informado.'
     
            });
     

        }else if(usuario == "" || usuario.length == 0 || usuario == null || typeof usuario == undefined || usuario == 0) {
     
       
            res.status(400).send({
     
                codigo: 3, 
                msg: 'Usuário não informado.'
     
            });
     
            
     
        }else if(senha == "" || typeof senha == undefined || senha == null || senha == 0) {
     
            res.status(400).send({
     
                codigo: 4, 
                msg: 'Senha não informada.'
     
            });
     
            
        }else if(senha.length <= 6) {

            res.status(400).send({

                codigo: 5, 
                msg: 'Senha deve conter no mínimo 7 caracteres. '

            });
            
            
            
        }else if(tipo.length == 0 || tipo == '' || tipo == 0 || typeof tipo == undefined || typeof tipo == null) {

            res.status(400).send({

                codigo: 6, 
                msg: 'Tipo não informado.'

            });


        }else if(tipo != 'Administrador') {

            res.status(400).send({

                codigo: 7, 
                msg: 'Tipo não correspondente.'

            });


        }else {

            await db.insertData(administrador, usuario, senha, tipo);
                    res.status(201).send({
                        
                         codigo: 1,
                         msg: 'Administrador (A) Cadastrado (A) corretamente'
                     
                    });
             
     
          
        }
    

    }else { //Cadastra TODOS os dados

         
        if(data.administrador == "" || data.administrador.length == 0 || typeof data.administrador == undefined || data.administrador == null || data.administrador == 0) {

            res.status(400).send({

                codigo: 2, 
                msg: 'Nome não informado.'

            });

        }else if(data.usuario == "" || data.usuario.length == 0 || typeof data.usuario == undefined || data.usuario == null || data.usuario == 0) {


            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário não informado.'

            });

                

        }else if(data.senha == "" || data.senha == 0 || data.senha == null || typeof data.senha == undefined) {



                
            res.status(400).send({

                codigo: 4, 
                msg: 'Senha não informada.'

            });

                

        }else if(data.senha.length <= 6 ) {
                
                
            res.status(400).send({

                codigo: 5, 
                msg: 'Senha deve conter no mínimo 7 caracteres .'

            });

                
        }else if(data.tipo.length == 0 || data.tipo == '' || data.tipo == 0 || typeof data.tipo == undefined || typeof data.tipo == null) {

            res.status(400).send({

                codigo: 6, 
                msg: 'Tipo não informado.'

            });



        }else if(data.tipo != 'Administrador') {

            res.status(400).send({

                codigo: 7, 
                msg: 'Tipo não correspondente.'

            });


        }else {

            //Instancio a Model
            await db.insertAllData(data);
            
            res.status(201).send({
                        
                codigo: 1,
                msg: 'Administrador (A) Cadastrado (A) corretamente'
                    
             });

        }
    }
}


module.exports = { post }