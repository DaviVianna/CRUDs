//Requrired Model
const db = require("../../Models/Clientes/Alter");

const put = async (req, res) => {

      
    const data = { 

        nome:       req.body.nome, 
        usuario:    req.body.usuario,
        senha:      req.body.senha,
        file:       req.file,
        status:     req.body.status,
        id:         req.params.id
    }

    

    //Verificando se o FILE está VAZIO
    if(!data.file || data.file == '' || data.file == undefined || data.file == null || data.file.length == 0) {

        const { nome, usuario, senha, status, id } = data;


        //Alterando de acordo com que for passado
        if(nome != '' && !usuario && !senha && !status ) { //nome 

            //Instancio a Model 
            await db.alterName(nome, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome alterado corretamente.'

            });



        }else if(usuario != '' && !senha && !status && !nome) { //usuario

            //Instancio a model
            await db.alterEmail(usuario, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário alterado corretamente.'

            });


        }else if(senha != '' && !status && !nome && !usuario) { //senha

            //verificar os dígitos da senha
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a Model 
            await db.alterPassword(senha, id);


            res.status(200).send({

                codigo: 1, 
                msg: 'Senha alterada corretamente'

            });

        }else if(status == 'Ativar' && !nome && !usuario && !senha) { //status = ATIVO

            //Instancio a Model
            await db.alterStatusActive(id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Status ativado corretamente.'


            });


        }else if(status == 'Desativar' && !nome && !usuario && !senha) { //status == disabled

            //Instancia a Model
            await db.alterStatusDisabled(id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Status desativado corretamente.'


            });

            //Combinações para alterar

        }else if(usuario != '' && senha != '' && !nome && !status) {  //usuario, senha,

            //verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }


            //Instancio a Model
            await db.alterEmailAndPassword(usuario, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Email e senha alterados corretamente.'


            });


        }else if(usuario != '' && status == 'ATIVAR' && !nome && !senha) { //usuario, status == ativado

            //Instancio a Model
            await db. alterStatusActiveAndEmail(usuario, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário e Status alterados corretamente.'

            });


        }else if(usuario != '' && status == 'DESATIVAR' && !nome && !senha) { //usuario, status == disabled
            
            //Instancio a Model 
            await db.alterStatusDisabledAndEmail(usuario, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário e Status alterados corretamente.'


            });
        
            
        }else if(status == 'ATIVAR' && senha != '' && !nome && !usuario) { //senha, status == active

             //verificando o tamanho da senha 
             if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }

            //Instancio a Model
            await db.alterStatusActiveAndPassword(senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Senha e Status alterados corretamente.'


            });



        }else if (status == 'DESATIVAR' && senha != '' && !nome && !usuario) { //senha, status == disabled, 

             //verificando o tamanho da senha 
             if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }

            //Instancio a Model
            await db.alterStatusDisabledAndPassword(senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Status e Senha alterados corretamente.'


            });

        }else if(status == 'ATIVAR' && nome != '' && !senha && !usuario) { //STATUS == ACTIVE e NOME

            //instancio a model
            await db.alterStatusActiveAndName(nome, id);


            res.status(200).send({

                codigo: 1, 
                msg: 'Status e Nome alterados corretamente.'

            });

        }else if(status == 'DESATIVAR' && nome != '' && !senha && !usuario) { //STATUS == DISABLED e NOME

            //Instancio a Model
            await db.alterStatusDisabledAndEmail(usuario, id);

            res.status(200).send({

                codigo: 1,
                msg: 'Status e Nome alterados corretamente.'

            });

        }else if (nome != '' && usuario != '' && !senha && !status ) { // NOME e EMAIL

            //Instancio a Model
            await db.alterNameAndEmail(nome, usuario, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome e Usuário alterados corretamente.'


            });

        }else if(nome != '' && senha != '' && !usuario && !status) { //NOME e SENHA

            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a Model
            await db.alterNameAndPassword(nome, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome e Senha alterados corretamente.'

            });


        }else if(nome != '' && usuario != '' && !senha && !status) { //NOME e EMAIL

            //Instancio a Model
            await db.alterNameAndEmail(nome, usuario, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome e Usuário alterados corretamente.'

            });


        }else if(usuario != '' && senha != '' && !usuario && !status) {//EMAIL e SENHA

            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }

            //Instancio a Model
            await db.alterEmailAndSenha(usuario,  senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário e Senha alterados corretamente.'

            });
            
            
        }else if(nome != '' && usuario != '' && senha != '' && !status) { //NOME, EMAIL e SENHA

            
            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a Model 
            await db.alterNomeEmailAndSenha(nome, usuario,  senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });

            
        }else if(usuario != '' && senha != '' && status == 'ATIVAR' && !nome) { //EMAIL, SENHA, STATUS == ACTIVE

            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a model 
            await db.alterEmailSenhaAndStatusActive(usuario, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário, Senha e Status alterados corretamente.'

            });
  
        }else if(usuario != '' && senha != '' && status == 'DESATIVAR' && !nome) { //EMAIL, SENHA, STATUS == DISABLED
            

            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }

            //Instancio a Model
            await db.alterEmailSenhaAndStatusDisabled(usuario, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Usuário, Senha e Status alterados corretamente.'

            });


        }else if(nome != '' && usuario != '' && senha != '' && status == 'ATIVAR') { // NOME, EMAIL, SENHA, STATUS == ACTIVE

            //Verificando o tamanho da senha 
            if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a Model
            await db.alterNomeEmailSenhaAndStatusActive(nome, usuario, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });
            

        }else if (nome != '' && usuario != '' && senha != '' && status == 'DESATIVAR') { // NOME, EMAIL, SENHA, STATUS == DISABLED

             //Verificando o tamanho da senha 
             if(senha.length <= 6) {

                res.status(400).send({

                    codigo: 2, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });
            }


            //Instancio a Model
            await db.alterNomeEmailSenhaAndStatusDisabled(nome, usuario, senha, id);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });


        }
    

    }else { //FILE == TRUE

        if(data.nome != '' && data.usuario != '' && data.senha != '' && data.file) { //Altera todos os DADOS


            //Verificando o tamanho da senha
            if(data.senha.length <= 6) {

                res.status(400).send({

                    codigo: 1, 
                    msg: 'Senha deve conter no mínimo 7 caracteres.'

                });

            }


            //Instancio a Model
            await db.alterAllValues(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });



        }else if(data.file && !data.nome && !data.usuario && !data.senha && !data.status) { //foto

            //Instancio a Model
            await db.alterFile(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Foto atualizada corretamente.'

            });

        }else if(data.nome != '' && data.file  && !data.usuario && !data.senha) {  //nome, foto

            //Instancio a Model
            await db.alterFileAndNome(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Foto e nome alterados corretamente.'

            });


        }else if(data.file && data.nome != '' && data.usuario != '' && !data.senha && !data.status) { //nome, usuario, foto,

            //Instancio a Model 
            await db.alterFotoNomeAndEmail(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });
            


        }else if(data.file && data.nome != '' && data.usuario != '' && data.senha != '' && !data.status) { //nome, usuario, senha e foto

            
            //verificando o tamanho da senha 
            if(data.senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }


            //Instancio a Model
            await db.alterNomeEmailSenhaAndFile(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });


            
        }else if(data.file && data.usuario != '' && !data.nome && !data.senha && !data.status) { //usuario, foto,

            //Instancio a Model
            await db.alterFileAndEmail(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Foto e Usuário alterados corretamente.'

            });


            
        }else if(data.file && data.usuario != '' && data.senha != '' && !data.nome && !data.status) { //usuario, senha, foto

            //verificando o tamanho da senha 
            if(data.senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }


            //Instancio a Model
            await db.alterEmailSenhaAndFoto(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'


            });


            
        }else if(data.file && data.senha != '' && !data.nome && !data.usuario && !data.status) { //senha, foto, 

             //verificando o tamanho da senha 
            if(data.senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }

            //Instancio a Model
            await db.alterFotoAndSenha(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Foto e Senha alterados corretamente.'

            });
            
        }else if(data.file && data.nome != '' && data.senha != '' && !data.usuario && !data.status) { //senha, foto, nome

            //verificando o tamanho da senha 
            if(data.senha.length <= 6) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'Senha deve conter 7 caracteres'

                });
            }

            //Instancio a Model
            await db.alterNomeSenhaAndFoto(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });

        } 

    }

    console.log(data);
}



module.exports = { put }
