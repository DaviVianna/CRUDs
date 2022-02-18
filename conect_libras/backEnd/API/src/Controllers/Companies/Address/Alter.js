//Required Model
const db = require("../../../Models/Companies/Address/Alter");


const put = async (req, res) => {


    const data = {

        cep:            req.body.cep, 
        logradouro:     req.body.logradouro, 
        complemento:    req.body.complemento,
        numero:         req.body.numero,
        bairro:         req.body.bairro,
        cidade:         req.body.cidade,
        estado:         req.body.estado,
        id:             req.params.id     

    }




    
    //Alterando TODOS os DADOS
    if(data.cep != '' && data.logradouro != '' && data.complemento != '' && data.numero != '' && data.bairro != '' && data.cidade != '' && data.estado != '') {

        //Verificando a quantidade de caracteres do CEP
        if(data.cep.length < 8) {
            
            res.status(400).send({
                codigo: 3,
                msg: 'CEP deve conter 8 dígitos. '

            });
        }


        //Instânciando a Model
        await db.alterAllValues(data);


        res.status(201).send({

            codigo: 1, 
            msg: 'Endereço alterado corretamente. '


        });




    }else {

    

        if (data.cep != '' && data.logradouro != '' && data.numero != '' && data.bairro != '' && !data.complemento && !data.cidade && !data.estado) {  //CEP, LOGRADOURO, NUMERO, BAIRRO

            
            //Verificando a quantidade de caracteres do CEP
            if(data.cep.length < 8) {
                
                res.status(400).send({
                    codigo: 3,
                    msg: 'CEP deve conter 8 dígitos. '

                });
            }


            //Instancio a Model
            await db.alterBairroCepLogradouroAndNumero(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'


            });
            

        }else if(data.cep != '' && data.logradouro != '' && data.complemento != '' && data.numero != '' && !data.bairro && !data.cidade && !data.estado) { //CEP, LOGRADOURO, COMPLEMENTO, NÚMERO

            
            //Verificando a quantidade de caracteres do CEP
            if(data.cep.length < 8) {
                
                res.status(400).send({
                    codigo: 3,
                    msg: 'CEP deve conter 8 dígitos. '

                });
            }


            //Instancio a Model
            await db.alterCepLogradouroNumeroAndComplemento(data);


            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'


            });

            
        }else if (data.cep != '' && data.logradouro != '' && data.complemento != '' && data.numero != '' && data.bairro != '' && !data.cidade && !data.estado) { //CEP, LOGRADOURO, COMPLEMENTO,  NUMERO, BAIRRO

            //Verificando a quantidade de caracteres do CEP
            if(data.cep.length < 8) {
                
                res.status(400).send({
                    codigo: 3,
                    msg: 'CEP deve conter 8 dígitos. '

                });
            }


            //Instancio a Model 
            await db.alterBairroCepLogradouroNumeroAndComplemento(data);

            res.status(201).send({
                
                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });


        }else if(data.cep != '' && data.logradouro != '' && data.numero != '' && !data.complemento && !data.bairro && !data.cidade && !data.estado) { //CEP, LOGRADOURO, NUMERO
            
            //Verificando a quantidade de caracteres do CEP
            if(data.cep.length < 8) {
                
                res.status(400).send({
                    codigo: 3,
                    msg: 'CEP deve conter 8 dígitos. '

                });
            }


            //Instânciando a Model
            await db.alterCepLogradouroAndNumero(data);


            res.status(201).send({

                codigo: 1,
                msg: 'Dados alterados corretamente. ' 


            });


        }else if (data.numero != '' && data.complemento != '' && !data.cep && !data.logradouro && !data.bairro && !data.cidade && !data.estado) { //NUMERO E COMPLEMENTO

            //Instancio a Model
            await db.alterNumeroAndComplemento(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'


            });
            
        }else if(data.numero != '' && !data.complemento && !data.logradouro && !data.cep && !data.bairro && !data.cidade && !data.estado) {   //SOMENTE NÚMERO

            //Instancio a Model 
            await db.alterNumber(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Número alterado corretamente .'

            });
            
        }else if(data.cep == '' && data.logradouro == '' && data.numero == '' && data.complemento == '' && data.bairro == '' && data.cidade == '' && data.estado == '') {


            res.status(400).send({

                codigo: 2,  
                msg: '*Campos não preenchidos.'

            });

        }

    }

}


module.exports = { put }