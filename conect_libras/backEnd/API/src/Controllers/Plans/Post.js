
//Required Model
const db =  require("../../Models/Plans/Post");



const post = async (req, res) => {



    const data = {
        
        plano:                  req.body.plano,
        descricao:              req.body.descricao,
        valor:                  req.body.valor,
        minutos:                req.body.minutos,
        valor_minutos_extra:    req.body.valor_minutos_extra, 
        valor_login_extra:      req.body.valor_login_extra

    }



    if(data.plano == '' && data.descricao == '' && data.valor == '' && data.minutos == '' && data.valor_minutos_extra == '' && data.valor_login_extra == '') {

        res.status(400).send({

            codigo: 12, 
            msg: '*Preencha todos os Campos.'

        });

    }else if(data.plano == '' || typeof data.plano == undefined || typeof data.plano == null || data.plano == 0 || data.plano.length == 0) {

        res.status(400).send({

            codigo: 2,
            msg: 'Plano não informado.'

        });


    }else if(data.descricao ==  '' || typeof data.descricao == undefined || typeof data.descricao == null || data.descricao.length == 0 || data.descricao == 0) {

        res.status(400).send({

            codigo: 3,
            msg: 'Descrição não informada.'

        });


    }else if(data.valor == '' || typeof data.valor == undefined || typeof data.valor ==  null || data.valor == 0 || data.valor.length == 0) {

        res.status(400).send({

            codigo: 4,
            msg: 'Valor não informado.'

        });


    }else if(data.minutos == '' || typeof data.minutos == undefined || typeof data.minutos == null || data.minutos == 0 ) {
        
        res.status(400).send({

            codigo: 5,
            msg: 'Minutos não informado.'

        });

        
        
    }else if(data.minutos.length < 6) {
        
 
        res.status(400).send({

            codigo: 6,
            msg: 'Minutos deve conter 7 caracteres.'

        });
        
        
        
        
    }else if(data.valor_minutos_extra == '' || typeof data.valor_minutos_extra ==  undefined || typeof data.valor_minutos_extra == null || data.minutos == 0)  {
        
        res.status(400).send({

            codigo: 7,
            msg: 'Valor de minutos extra não informado.'

        });




    }else if(data.valor_login_extra == '' || typeof data.valor_login_extra == undefined || data.valor_login_extra == null || data.valor_login_extra == 0) {
        
        
        res.status(400).send({

            codigo: 8,
            msg: 'Valor de Login Extra não informado.'

        });

        
    }else {

        //Instânciando a Model
        await db.insertPlans(data);

        res.status(201).send({

            codigo: 1,
            msg: 'Plano cadastrado corretamente.'

        }); 

    }


}

module.exports = { post }