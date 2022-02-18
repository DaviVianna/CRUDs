//Required Model
const db = require("../../Models/Admin/Alter");




//Altera pelo ID
const put = async (req, res) => {

    const data = {

        nome:           req.body.admin, 
        usuario:        req.body.usuario, 
        senha:          req.body.senha,
        file:           req.file,
        status:         req.body.status,
        id:             req.params.id

    }



    //Alterando todos MENOS o FILE
    if(!data.file || typeof data.file == undefined || data.file.length == 0 || data.file == 0 || data.file == null) {


        const { nome, usuario, senha, status, id } = data;


        if(nome != '' && !usuario && !senha && !status){

            //Instancio a Model
            await db.alterName(nome, id);


            res.status(201).send({

                codigo: 1, 
                msg: 'Nome alterado corretamente .'

            });
               


        }else if(usuario != '' && !senha && !nome) {


            //validaçao dos dados passados
            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Usuário não informado .'

                });
            }

            //Instancio a Model
            await db.alterUser(usuario, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Usuário alterado corretamente .'

            });
 
 
 
        }else if(senha != '' && !nome && !usuario && !status) {


            //validaçao dos dados passados
         
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 5, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'

                });
            }

            //Instancio a Model
            await db.alterPassword(senha, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Senha alterada corretamente .'

            });
 
 
         
        }else if(status == 'Desativar' && !nome && !usuario && !senha ) { //STATUS == 'DESATIVADO'

        
            await db.statusDisabled(id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Administrador (A) desativado (A) corretamente.'


            });
        
    
        
        
        }else if(status == 'Ativar' && !nome && !usuario && !senha) {

            //instancio a Model
            await db.statusActive(id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Administrador (A) ativado (A) corretamente.'

            });
            
            
            
        }else if(nome != '' && usuario != '' && !senha) {
 

            //validaçao dos dados passados
            if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0) {

                res.status(400).send({

                    codigo: 6, 
                    msg: 'Nome não informado .'

                });
                
            }else if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 7, 
                    msg: 'Usuário não informado .'

                });

            }


            //Instacio a Model
            await db.alterNameAndUser(nome, usuario, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Usuário e Nome alterados corretamente .'

            });
 
 
         
         }else if(nome != '' && senha != '' && !usuario) {
 
              //validaçao dos dados passados
              if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0) {

                res.status(400).send({

                    codigo: 8, 
                    msg: 'Nome não informado'

                });
                
             }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 9, 
                    msg: 'Senha não informada .'

                });

             }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 10, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'


                });


             }else if(typeo == undefined || typeo == null) {


                res.status(400).send({

                    codigo: 10,
                    msg: 'Confirme a Senha.'


                });


             }


            //Instancio a Model
            await db.alterNameAndPassword(nome, senha, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Nome e Senha alterados corrtamente .'

            });
 
             
        }else if(usuario != '' && senha != '' && !nome) {
 
            //validaçao dos dados passados
            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 11, 
                    msg: 'Nome não informado .'

                });
                
            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 12, 
                    msg: 'Senha não informada .'
                });

            }else if (senha.length <= 6) {

                res.status(400).send({

                    codigo: 13, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'
                });

            }

            //Instacio a Model 
            await db.alterUserAndPassword(usuario, senha, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Usuário e Senha alterados corretamente .'


            });
 
             
        }else if(nome != '' && nome.trim() && usuario != '' && usuario.trim() && senha != '' && senha.trim()) { //NOME, USUÁRIO e SENHA

            if(nome.length == 0 || typeof nome == undefined || nome == 0 ||typeof nome == null) {

                res.status(400).send({

                    codigo: 14, 
                    msg: 'Nome não informado.'

                });

            }else if(usuario.length == 0 || typeof usuario == undefined || typeof usuario == null || usuario == 0) {

                res.status(400).send({

                    ccodigo: 15,
                    msg: 'Usuário não informado.' 
                    
                });

            }else if(typeof senha == null || typeof senha == undefined) {

                res.status(400).send({

                    codigo: 16, 
                    msg: 'Senha não informada.'

                    
                });


            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 17, 
                    msg: 'Senha edve conter no mínimo 7 caracteres.'
                    
                });

            }


            //Instancio a Model
            await db.alterNameUserAndPassword(nome, usuario, senha, id);
            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });



        }
        
    

    }else { //Altera TODOS os dados

        const { nome, usuario, senha, file, id } = data;


           
        if(file != '' && nome != '' && usuario != '' && senha != '') { //Alterando TODOS os dados

            
            await db.alterAllValues(nome, usuario, senha, file, id);
            res.status(201).send({
                        
               codigo: 1,
               msg: 'Administrador (A) alterado (A) corretamente'
                    
            });

        }else if(file != '' && usuario != '' && !nome && !senha) {

            if(usuario.length == 0 || typeof usuario == undefined || usuario == 0) {

                res.status(400).send({

                    codigo: 14, 
                    msg: 'Usuário não informado .'

                });

            }


            //Instancio a Model
            await db.alterFileAndUser(usuario, file, id);
            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Usuário alterados corretamente .'


            });



        
       }else if(file != '' && senha != '' && !usuario && !nome) {

            if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 15, 
                    msg: 'Senha não informada .'

                });

            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 16, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'


                });

            }

            //instancio a Model

            await db.alterFileAndPassword(senha, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Senha alteradas corretamente .'

            });

        
        }else if(file != '' && usuario != '' && senha != '' && !nome) { 

      

            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 16,
                    msg: 'Usuário não informado .'


                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 17, 
                    msg: 'Senha não informada .'

                });


            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 18, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'

                });

            }


            //Instancio a Model 
            await db.alterFileUserAndPassword(usuario, senha, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente .'


            });


        }else if(file != '' && nome != '' && senha != '' && !usuario) { //foto, nome e senha

            if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0) {

                res.status(400).send({

                    codigo: 19,
                    msg: 'Nome não informado .'


                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 20, 
                    msg: 'Senha não informada.'
                
                });

            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 21, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'


                });
            }


            //Instancio a Model 
            await db.alterFileNameAndPassword(nome, senha, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente .'


            });

            
        }else if(file != '' && usuario != '' && nome != '' && !senha) { //foto, usuario, e nome     

            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 22, 
                    msg: 'Nome não informado .'


                });

            }else if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0) {

                res.status(400).send({

                    codigo: 26, 
                    msg: 'Nome não informado'

                });


            }

            //instancio a Model
            await db.alterFileUserAndName(nome, usuario, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente. '
            
            });
              
        }else if(file != '' && nome != '' && !senha) {

            if(nome.length == 0 || typeof nome == undefined ||  nome == 0) {

                res.status(400).send({

                    codigo: 13, 
                    msg: 'Nome não informado .'

                });

            }

            //Instancio a Model
            await db.alterFileAndName(nome, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Nome alterados corretamente .'


            });


       }else if(file != ''){ //Somente o FILE

            //Instancio a Model
            await db.alterFile(file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto atualizada corretamente .'

            });

        }
     
    }
   
}



module.exports = { put }

