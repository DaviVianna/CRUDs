const express = require('express');
const router = require('express').Router();

//Required Model 
const db = require("../../../Models/Companies/Companies/Update");



router.put('/endereco/:cnpj', async (req, res) => {

    const data = {
        
        cep:            req.body.cep, 
        logradouro:     req.body.logradouro, 
        numero:         req.body.numero,
        bairro:         req.body.bairro,
        cidade:         req.body.cidade,
        estado:         req.body.estado,
        cnpj:           req.params.cnpj
        
    }


    //Altera TODOS os DADOS
    if(data.cep != '' && data.logradouro != '' && data.numero != '' && data.bairro != '' && data.cidade != '' && data.estado != '') {

        //Verificando os dígitos de CEP
        if(data.cep.length <= 7) {

            res.status(400).send({

                codigo: 2, 
                msg: 'CEP deve conter 8 dígitos.'


            });
        }


        //Instancio a Model
        await db.alterAllValues(data);

        res.status(200).send({

            codigo: 1, 
            msg: 'Dados da empresa alterados corretamente.'


        });

    }else {

        const { cep, logradouro, numero, bairro, cidade, estado, cnpj } = data;

        
        //Alterando de acordo com que for passado
        if(cep != '' && logradouro != '' && numero != '' && !bairro && !cidade && !estado ) { //CEP, LOGRADOURO, NUMERO

            //Verificando os dígitos do CEP
            if(cep.length <= 7 ) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'CEP deve conter 8 dígitos.'


                });
            }


            //Instancio a Model
            await db.alterEndereco(cep, logradouro, numero, cnpj);

            res.status(200).send({

                codigo: 1, 
                msg: 'Endereço alterado corretamente.'

            });

        }else if(cep != '' && logradouro != '' && numero != '' && bairro != '' && !cidade && !estado) { //CEP, LOGRADOURO, NUMERO, BAIRRO
            
             //Verificando os dígitos do CEP
             if(cep.length <= 7 ) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'CEP deve conter 8 dígitos.'


                });
            }


            //Instancio a Model

            await db.alterCepLogradouroNumeroBairro(cep, logradouro, numero, bairro, cnpj);

            res.status(200).send({

                codigo: 1, 
                msg: 'Endereço alterado corretamente.'

            });



        }else if(cep != '' && logradouro != '' && numero != '' && bairro != '' && cidade != '' && !estado) { //CEP, LOGRADOURO, NUMERO, BAIRRO, CIDADE

            
             //Verificando os dígitos do CEP
             if(cep.length <= 7 ) {

                res.status(400).send({

                    codigo: 3, 
                    msg: 'CEP deve conter 8 dígitos.'


                });
            }


            //Instancio a Model 
            await db.alterAddress(cep, logradouro, numero, bairro, cidade, cnpj);

            res.status(200).send({

                codigo: 1, 
                msg: 'Endereço alterado corretamente.'



            });

        }else if(numero != '' && !cep && !logradouro && !bairro && !cidade && !estado) { //NUMERO

            //Instancio a Model 
            await db.alterNumber(numero, cnpj);

            res.status(200).send({

                codigo: 1, 
                msg: 'Número alterado corretamente.'

            });

        }

    }

});


module.exports = { router }