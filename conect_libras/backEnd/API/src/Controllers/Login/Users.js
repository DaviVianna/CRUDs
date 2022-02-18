
//required Model
const db = require("../../Models/Login/Users/Get");


const authUsers = async (req, res) => {


    const data = {

        usuario: req.body.usuario,
        senha:   req.body.senha

    }

    //Validação dos dados passados

    if(data.usuario == '' || typeof data.usuario == undefined || data.usuario == null || data.usuario.lenght <= 0) {

        res.status(400).send({

            codigo: 2, 
            msg: 'Usuário não informado. '


        });

    }else if(data.senha == '' || data.senha.lenght < 7 || typeof data.senha == undefined || data.senha == null) {

        res.status(400).send({

            codigo: 3, 
            msg: 'Senha não informada. '


        });


    }else {

    
            //Instâncio a Model
            const resultado =  await db.getUsers(data);
            

        
            //Verificação
            if(resultado[0] !== data.usuario) { //Usuario errado


                    res.status(400).send({
                        
                        codigo: 4, 
                        msg: 'Usuario incorreto'
                    
                    });


            }else if(resultado[1] !== data.senha) { //Senha errada


                res.status(400).send({

                    codigo: 5,
                    msg: 'Senha incorreta'
                
                });


            }else { //Logado

                 res.status(201).send({

                     codigo: 1, 
                     msg: 'logado!! .'
                     
                 });


            }
        

    
    }

}



module.exports = { authUsers }