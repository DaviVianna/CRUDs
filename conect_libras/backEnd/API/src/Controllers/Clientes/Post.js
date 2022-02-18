//Required Model
const db = require("../../Models/Clientes/Post");



//Post Method
const post = async (req, res) => {


    const data = {

        nome:           req.body.nome, 
        usuario:        req.body.usuario,
        senha:          req.body.senha,
        file:           req.file,
        tipo:           req.body.tipo,
        cnpj:           req.params.cnpj,
       
    }



    //Cadastra TODOS MENOS O FILE
    if(!data.file || typeof data.file == undefined || data.file.length == 0 || data.file == null || data.file == 0) {

        const { nome, usuario, senha, tipo, cnpj } = data;

        
        //Validando os dados passados
        if(nome == '' || nome.length == 0 || nome == undefined || nome == null || nome == 0 ) {

            res.status(400).send({

                codigo: 2,
                msg: 'Nome não informado.'


            });


        }else if(usuario == '' || usuario.length == 0 || usuario == undefined || usuario == null || usuario == 0) {

            res.status(400).send({

                codigo: 3, 
                msg: 'Usuário não informado.'
                
            });


        }else if(senha == '' || senha == undefined || senha == null) {


            res.status(400).send({

                codigo: 4,
                msg: 'Senha não informada.'
                
            });


        }else if(senha.length <= 6) {


            res.status(400).send({

                codigo: 5, 
                msg: 'Senha deve conter no mínimo 7 caracteres.'


            });

        
        }else if(tipo.length == 0 || tipo == '' || tipo == 0 || typeof tipo == undefined || typeof tipo == null) {

            res.status(400).send({

                codigo: 6, 
                msg: 'Tipo não informado.'

            });



        }else if(tipo != 'Cliente') {

            res.status(400).send({

                codigo: 7, 
                msg: 'Tipo não correspondente.'


            });



        }else {


            //Instancio a Model
            await db.insertData(nome, usuario, senha, tipo, cnpj);

            res.status(201).send({

                codigo: 1, 
                msg: 'Cliente cadastrado (A) corretamente.'

            });

        }
        

    }else {

        //Validação dos dados passados
        if(data.nome == '' || data.nome.length == 0 || data.nome == 0 || typeof data.nome == undefined || typeof data.nome == null) {

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
    
    
    
        }else if(data.tipo != 'Cliente') {
    
                res.status(400).send({
    
                    codigo: 7, 
                    msg: 'Tipo não correspondente.'
    
                });
    
    
        }else {


                //Verificando se o Usuário informado já existe no DB, se existir, NAO pode cadastrar
                const result = await db.verificaUsuario(data);
            
                if(result.length > 0) {

                    res.status(400).send({

                        codigo: 7, 
                        msg: 'Este Usuário já existe.'

                    });

                }else {

                    //Instancio a Model
                    await db.insertClientes(data);

                    res.status(201).send({
            
                        codigo: 1, 
                        msg: 'Cliente cadastrado corretamente.'
            
                    });

                }

        }
        
    }

}
   


module.exports = { post };





