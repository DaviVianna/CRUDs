
//Required Model
const db =  require("../../Models/Plans/Update");

//Required Model 2
const db2 = require("../../Models/Plans/Update2");

//Required Model 3
const db3 = require("../../Models/Plans/Update3");



const put = async (req, res) => {

    

    const data = {
        
        descricao:              req.body.descricao,
        valor:                  req.body.valor,
        minutos:                req.body.minutos,
        valor_minutos_extra:    req.body.valor_minutos_extra, 
        valor_login_extra:      req.body.valor_login_extra,
        status:                 req.body.status,
        plano:                  req.params.plano

    }


   console.log(data);
    if(data.status == 'Desativar' && !data.valor_login_extra  && !data.descricao && !data.valor && !data.valor_minutos && !data.valor_minutos_extra) { //STATUS == 'DESATIVADO'


    await db.statusDisabled(data);

    res.status(201).send({

        codigo: 1, 
        msg: 'Plano desativado corretamente.'


    });


    }else if(data.status == 'Ativar' && !data.valor_login_extra  && !data.descricao && !data.valor && !data.valor_minutos && !data.valor_minutos_extra) { //Status == 'Ativado'


        await db.statusActive(data);

        res.status(201).send({

            codigo: 1, 
            msg: 'Plano ativado corretamente . '


        });


    }else if(data.descricao != '' && !data.status && !data.valor_login_extra  && !data.valor && !data.valor_minutos && !data.valor_minutos_extra) {

        //somente descricao
        await db.alterDescription(data);

        res.status(201).send({

            codigo: 1, 
            msg: 'Descrição alterada corretamente.'

        });
        
         
    }else if(data.descricao != '' && data.valor != '' && !data.valor_login_extra  && !data.valor_minutos_extra  && !data.minutos) {


        //Alterando DESCRICAO E VALOR

        await db2.alterDescriptionAndPrice(data);



        res.status(200).send({

            codigo: 1,
            msg: 'Descrição e Preço alterados corretamente. '

        });




    }else if(data.descricao != '' && data.minutos != '' && !data.valor && !data.valor_login_extra  && !data.valor_minutos_extra && !data.status) {

        //Alterando DESCRICAO e MINUTOS



        await db2.alterdescriptionAndMinute(data);



        res.status(200).send({

            codigo: 1,
            msg: 'Descrição e Minutos alterados corretamente. '

        });




    }else if(data.descricao != '' && data.valor_minutos_extra != ''  && !data.valor && !data.minutos && !data.valor_login_extra ) {


        //Alterando DESCRICAO e MINUTOS_EXTRA

        await db2.alterDescriptionAndMinuteMore(data);


        res.status(200).send({

            codigo: 1,
            msg: 'Descrição e Valor de Minutos Extra alterados corretamente. '

        });



        
    }else if(data.descricao != '' && data.valor_login_extra != ''  && !data.valor && !data.minutos  && !data.valor_minutos_extra) {


        //Alterando DESCRICAO e LOGIN_EXTRA


        await db2.alterDescritionAndValLoginMore(data);

        res.status(200).send({

            codigo: 1,
            msg: 'Descrição e Valor de Login Extra alterados corretamente. '


        });


    }else if(data.valor != ''  && !data.descricao && !data.minutos && !data.valor_minutos_extra && !data.valor_login_extra) {
        //Alterando SOMENTE o VALOR


          //Instânciando a Model
          await db.alterPrice(data);

          res.status(200).send({
  
              codigo: 1, 
              msg: 'Valor atualizado corretamente. '
  
  
          });




    }else if(data.valor != '' && data.minutos != '' && !data.valor_login_extra && !data.valor_minutos_extra) {

        //Alterando VALOR e MINUTOS


        //instânciando a Model
        await db3.alterPriceAndMinute(data);

        res.status(200).send({

            codigo: 1,
            msg: 'Valor e Minutos alterados corretamente. '

        });



    }else if(data.valor != '' && data.valor_minutos_extra != '' && !data.valor_login_extra &&!data.minutos) {

        //Alterando VALOR e VALOR_MINUTOS_EXTRA


        //Instânciando a Model
        await db3.alterPriceAndMinuteMore(data);

        res.status(200).send({

            codigo: 1, 
            msg: 'Valores de Plano e de Minutos Extra alterados corretamente. '


        });



    }else if(data.valor != '' && data.valor_login_extra != '' && !data.valor_minutos_extra && !data.minutos) {

        //Alterando VALOR e VALOR_LOGIN_EXTRA


        //Instânciando a Model
        await db3.alterPriceAndValLoginMore(data);

        res.status(200).send({

            codigo: 1, 
            msg: 'Valores do Plano e de Login Extra alterados corretamente. '

        });


    }else if(data.minutos != ''  && !data.descricao && !data.valor && !data.valor_minutos_extra && !data.valor_login_extra) {

        //Alterando SOMENTE os MINUTOS



          //Instânciando a Model
          await db.alterMinute(data);


          res.status(200).send({
  
              codigo: 1, 
              msg: 'Minutos atualizado corretamente. '
  
  
          });

        
    }else if(data.minutos != '' && data.valor_minutos_extra != '' && !data.valor && !data.valor_login_extra) {

        //Alterando MINUTOS e VALOR_MINUTOS_EXTRA



        //Instânciando a Model
         await db3.alterMinuteAndMinuteMore(data); 

         res.status(200).send({

            codigo: 1,
             msg: 'Valores de Minutos e Minutos Extra alterados corretamente. '


        });


    }else if(data.minutos != '' && data.valor_login_extra != '' && !data.valor && !data.valor_minutos_extra) {

        //Alterando MINUTOS e VALOR_LOGIN_EXTRA



        //Instânciando a Model
        await db3.alterMinuteAndValLoginMore(data);


        res.status(200).send({


            codigo: 1, 
            msg: 'Minutos e Valor de Login Extra alterados corretamente .'


        });



 

    }else if(data.valor_minutos_extra != '' && data.valor_login_extra !='' && !data.minutos && !data.valor) {

        //Alterando VALOR_MINUTOS_EXTRA e VALOR_LOGIN_EXTRA

            //Instânciando a Model
            db3.alterMinuteMoreAndValLoginMore(data);

            res.status(200).send({

                codigo: 1,
                msg: 'Valores de Minutos Extra e Login Extra alterados corretamente. '

            });

    }else if(data.minutos != '' && data.valor_minutos_extra != '' && data.valor_login_extra != ''  && !data.descricao && !data.valor) {
        
        //Alterando MINUTOS, MINUTOS_EXTRA e LOGIN_EXTRA

     


        //Instânciando a Model
        await db3.alterMinuteAndLogin(data);

        res.status(200).send({

            codigo: 1,
            msg: 'Dados de Minutos e de Login alterados corretamente . '

        });
        
         
        
    }else if(data.minutos != '' && data.valor_minutos_extra != '' && data.valor_login_extra != '' && data.valor != ''  && !data.descricao) {
        
        
        
         //Alterando MINUTOS, MINUTOS_EXTRA, LOGIN_EXTRA e VALOR

       

        //Instânciando a Model
        await db3.alterValues(data);

        res.status(200).send({

            codigo: 1,
            msg: 'Dados de Minutos, Login e Valor alterados corretamente . '

        });
        
        
    }else if(data.valor_minutos_extra != ''  && !data.descricao && !data.valor && !data.valor_minutos && !data.valor_login_extra) {

        //Alterando SOMENTE os MINUTOS_EXTRA
        
          //Instânciando a Model
          await db.alterMinuteMore(data);

          res.status(200).send({
  
              codigo: 1, 
              msg: 'Valor de Minutos Extra atualizado corretamente. '
  
  
          });


    }else if(data.valor_login_extra != ''   && !data.descricao && !data.valor && !data.valor_minutos && !data.valor_minutos_extra) {

        //Alterando SOMENTE o LOGIN_EXTRA
        
          //Instânciando a Model
          await db.alterValLoginMore(data);

          res.status(200).send({
  
              codigo: 1, 
              msg: 'Valor de Login Extra atualizado corretamente. '
  
  
          });

    
    
    
    }else {

        res.status(400).send({

            codigo: 2, 
            msg: 'Servidor indisponível.'

        });

    }


}

module.exports = { put }