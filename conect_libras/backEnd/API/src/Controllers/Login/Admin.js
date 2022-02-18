
//required Model
const db = require("../../Models/Login/Admin/Get");



const authAdmin = async (req, res) => {

 let user;
 let password;

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
        const resultado =  await db.getAdmin(data);

        if(resultado.length > 0) {

            if(resultado[0].senha != data.senha) {

                res.send({

                    codigo: 4, 
                    msg: 'Senha incorreta.'


                });

            }

            res.status(200).send({

                codigo: 1, 
                msg: 'Logado'

            });


        }else{

            res.status(400).send({

                codigo: 5,
                msg: 'Esta conta não existe.' 


            });
                
        }
            
    
    }

}


module.exports = { authAdmin }