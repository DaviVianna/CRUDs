const express = require('express');
const routes = require('express').Router();

//required Model
const db = require("../../Models/Operators/Alter");



//Altera pelo ID
routes.put('/alterar/:id', async (req, res) => {

    const data = {

        nome:     req.body.operador,
        usuario:  req.body.usuario, 
        senha:    req.body.senha,
        file:     req.file,  
        status:   req.body.status,
        id:       req.params.id

    }




    //Verificando se o FILE foi passado como VAZIO
    if(!data.file || data.file == undefined || data.file == 0 || data.file.length == 0) {

        const { nome, usuario, senha, id, status } = data;



        /*if(nome == '' && usuario == '' && senha == '' ) {

            res.status(400).send({

                codigo: 29, 
                msg: 'Preencha todos os Campos. '
    
            });
    
        }
        */


        //Instânciando a Model de acordo com o que for alterar

        if(nome != '' && nome.trim() && !usuario && !senha && !status){ //Alterando SOMENTE o NOME


            //verificando o que foi passado
            if(nome.length == 0 || nome == 0 || nome == null || typeof nome == undefined)  {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Nome não informado .'


                });

            }


            //Instânciando a Model
            await db.alterName(nome, id);

            res.status(201).send({

                codigo: 1,
                msg: 'Nome alterado corretamente. '


             });



        }else if(usuario != '' && usuario.trim() && !nome && !senha && !status) { //Alterando SOMENTE o USUÁRIO

            if(usuario == 0 || usuario.length == 0 || usuario == null || typeof usuario == undefined) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Usuário não informado .'

                });
            }


            //Instânciando a Model

            await db.alterUser(usuario, id);

            res.status(201).send({

                codigo: 1,
                msg: 'Usuário alterado corretamente. '

            });


        }else if(senha != '' && senha.trim() && !usuario && !nome && !status) {   //Alterando SOMENTE a SENHA

            if(senha == null || typeof senha == undefined) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Senha não informada .'


                });


            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 5, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'
                    
                });
            }


            //Instânciando a Model
            await db.alterPassword(senha, id);

            res.status(201).send({

                id: 1,
                msg: 'Senha alterada corretamente. '

            });

        
            

        }else if(status == 'Desativar' && !nome && !usuario && !senha) { //STATUS == 'DESATIVADO'


            await db.statusDisabled(id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Operador (A) desativado (A) corretamente.'


            });
        
        
        }else if(status == 'Ativar' && !nome && !usuario && !senha) { //Status == 'Ativado'


        await db.statusActive(id);

        res.status(201).send({

            codigo: 1, 
            msg: 'Operador (A) ativado (A) corretamente . '


        });
            
            
            
            
        }else if(nome != '' && nome.trim() && usuario != '' && usuario.trim() && !senha) {  //Alterando NOME e USUÁRIO


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



            //Instânciando a Model
            await db.alterNameAndUser(nome, usuario, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Nome e Usuário alterados corretamente. '

            });


        }else if(nome != '' && nome.trim() && senha != '' && senha.trim() && !usuario) { //Alterando NOME e SENHA



            if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0 ) {

                res.status(400).send({

                    codigo: 8, 
                    msg: 'Nome não informado .'
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

                })
            }

            //Instânciando a Model
            await db.alterNameAndPassword(nome, senha, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Nome e Senha alterados corretamente. '

            });


        }else if(usuario != '' && usuario.trim() && senha != '' && senha.trim() && !nome) { //Alterando USUÁRIO e SENHA

            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 11, 
                    msg: 'Usuário não informado .'
                    
                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 12, 
                    msg: 'Senha não informada .'
                    
                });

            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 13, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'
                    
                });
            }


            //Instânciando a Model
            await db.alterUserAndPassword(usuario, senha, id);

            res.status(201).send({

                codigo: 1,
                msg: 'Usuário e Senha alterados corretamente. '


            });

        }

        
      

    }else { //FILE == TRUE


        const { nome, usuario, senha, file, id } = data;





        if(file != '' && !usuario && !senha && !nome) { //Alterando SOMENTE o FILE

            //Instânciando a Model
            await db.alterFile(file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto atualizada corretamente. '


            });

        }else if(file != '' && nome != '' && nome.trim() && !usuario && !senha) { //Alterando FILE e NOME

            if(nome.length == 0 || nome == 0 || typeof nome == undefined || nome == null ) {

                 res.status(400).send({

                    codigo: 14, 
                    msg: 'Nome não informad o.'

                 });
            }


            //Instânciando a Model
            await db.alterFileAndName(nome, file,  id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Nome alterados corretamente .'

            });

                

        }else if(file != '' && senha != '' && senha.trim() && !usuario && !nome) { //Alterando FILE e SENHA

            if(typeof senha == undefined || senha == null ) {

                res.status(400).send({

                    codigo: 15, 
                    msg: 'Senha não informada.'

                });

            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 16, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'

                });


            }

            //Instânciando a Model
            await db.alterFileAndPassword(senha, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Senha alteradas corretamente .'


            });



        }else if(file != '' && usuario != '' && usuario.trim() && !senha  && !nome) { //Alterando FILE e USUÁRIO

            if(usuario.length == 0 || usuario == 0 || typeof usuario == undefined || usuario == null) {

                res.status(400).send({

                    codigo: 17,
                    msg: 'Usuário não informado.'


                });

            }


            //Instânciando a Model
            await db.alterFileAndUser(usuario, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Foto e Usuário alterados corretamente .'


            });



                
                
        }else if(file != '' && usuario != '' && usuario.trim() && senha != '' && senha.trim()  && !nome) { //Alterando FILE, USUÁRIO e SENHA

            if(usuario.length == 0 || typeof usuario == undefined || usuario == null || usuario == 0) {

                res.status(400).send({

                    codigo: 18, 
                    msg: 'Usuário não informado .'

                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 19, 
                    msg: 'Senha não informada .'


                });

            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 20, 
                    msg: 'Senha deve conter no mínimo 7 caracteres .'


                });


            }

            //Instânciando a Model
            await db.alterFileUserAndPassword(usuario, senha, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente. '

                    
            });


        }else if(file != '' && nome != '' && nome.trim() && senha != '' && senha.trim() && !usuario) { //Alterando FILE, NOME, e SENHA

            if(nome.length == 0 || nome == 0 || typeof nome == undefined || nome == null) {

                res.status(400).send({

                    codigo: 21,
                    msg: 'Nome não informado .'


                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 22,
                    msg: 'Senha não informada .'


                });

            }else if(senha.length <= 6 ) {

                
                res.status(400).send({

                    codigo: 23,
                    msg: 'Senha deve conter no mínimo 7 caracteres ; .'


                });

            }


            //Instânciando a Model
            await db.alterFileNameAndPassword(nome, senha, file, id);


            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente .'

                    
            });



        }else if(file != '' && usuario != '' && usuario.trim() && nome != '' && nome.trim() && !senha) { //Alterando FILE, USUÁRIO e NOME


            if(usuario.length == 0 || usuario == 0 || typeof usuario == undefined || usuario == null) {
                
                res.status(400).send({

                    codigo: 24,
                    msg: 'Usuário não informado .'


                });

            }else if(nome.length == 0 || nome == null || typeof nome == undefined || nome == 0) {

                res.status(400).send({

                    codigo: 25,
                    msg: 'Nome não informado .'


                });

            }



            //Instânciando a Model
            await db.alterFileUserAndName(nome, usuario, file, id);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente .'

                    
            });


        }else if(nome != '' && usuario != '' && senha != '' && file != '') {  //Alterando TODOS os VALORES

            if(nome.length == 0 || typeof nome == undefined || nome == null || nome == 0) {

                res.status(400).send({

                    codigo: 26, 
                    msg: 'Nome não informado. '
                    
                });

            }else if(usuario.length == 0 || usuario == 0 || typeof usuario == undefined || usuario == null) {

                res.status(400).send({

                    codigo: 27, 
                    msg: 'Usuário não informado .'
                    
                });

            }else if(typeof senha == undefined || senha == null) {

                res.status(400).send({

                    codigo: 28,
                    msg: 'Senha não informada .'
                    
                });


            }else if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2,
                    msg: 'Senha deve conter no minímo 7 caracteres'

                });
            }



            //Instânciando a Model
            await db.alterAllValues(nome, usuario, senha, file, id);


            res.status(201).send({

                codigo: 1,
                msg: 'Operator (A) alterado (A) corretamente. '

            });

        }


    }

 
});



module.exports =  { routes } 