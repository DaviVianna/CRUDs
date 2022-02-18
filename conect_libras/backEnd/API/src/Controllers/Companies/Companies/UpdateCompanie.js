const express = require('express');
const router = require('express').Router();
//required DB
const db = require('../../../Models/Companies/Companies/Update2');


router.put('/alterar/:cnpj', async (req, res) => {

    const data = {

        empresa:        req.body.empresa, 
        responsavel:    req.body.responsavel,
        status:         req.body.status,
        plano:          req.body.plano,
        telefone:       req.body.telefone,
        telefone2:      req.body.telefone2,
        celular:        req.body.celular,
        celular2:       req.body.celular2,
        email:          req.body.email,
        email2:         req.body.email2,
        cnpj:           req.params.cnpj

    }


    //Alterando TODOS os dados 

    if(data.empresa != '' && data.responsavel != '' && data.status == 'ATIVAR' || data.empresa != '' && data.responsavel != '' && data.status == 'DESATIVAR' && data.plano != '') {

        //Instancio a Model 
        await db.alterAllValues(data);

        //Intanciando a Model de alterar_contato na tbl_contato_empresa
        await db.alterContatoEmpresa(data);


        res.status(200).send({

            codigo: 1, 
            msg: 'Dado (S) alterado (S) corretamente.'

        });


    }else {

        //Alterando de acordo com o que for passado

        if(data.empresa != '' && !data.responsavel && !data.status) { //EMPRESA

            //Instancio a Model 
            await db.alterCompanie(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome alterado corretamente.'


            });



        }else if(data.responsavel != '' && !data.status && !data.empresa) { //RESPONSAVEL

            //Instancio a Model
            await db.alterBoss(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Responsável alterado corretamente.'

            });


        }else if(data.status == 'Ativar' && !data.empresa && !data.responsavel) { //STATUS == ACTIVE

            //Instancio a Model
            await db.alterStatusActive(data);


            res.status(200).send({

                codigo: 1, 
                msg: 'Empresa ativada corretamente.'

            });
            
        }else if(data.status == 'DESATIVAR' && !data.empresa && !data.responsavel) { //STATUS == DISABLED

            //Instancio a Model 
            await db.alterStatusDisabled(data);


            res.status(200).send({

                codigo: 1, 
                msg: 'Empresa desativada corretamente.'

            });

            
        }else if(data.plano != '' && !data.status && !data.empresa && !data.responsavel ) {
            
            
            //Instancio a Model
            await db.alterPlano(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Plano alterado corretamente.'

            });
            
            
            
        }else if(data.plano != '' && data.status == 'Ativar' && !data.empresa && !data.responsavel && !data.telefone && !data.telefone2 && !data.celular && !data.celular2 && !data.email && !data.email2) {
        
            //instancio a Model 
            await db.alterPlanoAndStatusActive(data);

            res.status(200).send({

                codigo: 1,
                msg: 'Plano e Status alterados corretamente.'

            });
        
        
        }else if(data.plano != '' && data.status == 'Desativar' && !data.empresa && !data.responsavel && !data.telefone && !data.telefone2 && !data.celular && !data.celular2 && !data.email && !data.email2) {

            //Instancio a Model
            await db.alterPlanoAndStatusDisabled(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Plano e Status alterados corretamente.'


            });
            
            
        }else if(data.empresa != '' && data.responsavel != '' && !data.status) { //EMPRESA E RESPONSAVEL

            //Instancio a Model
            await db.alterCompanieAndBoss(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Nome e Responsável alterados corretamente.'
            });


        }else if(data.empresa != '' && data.status == 'ATIVAR' && !data.responsavel) { //EMPRESA E STATUS == ACTIVE

            //Instancio a Model 
            await db.alterCompanieAndStatusActive(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });
            
        }else if(data.empresa != '' && data.status == 'DESATIVAR' && !data.responsavel) { //EMPRESA E STATUS == DISABLED

            //Instancio a Model 
            await db.alterCompanieAndStatusDisabled(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'

            });


        }else if(data.responsavel != '' && data.status == 'ATIVAR' && !data.empresa) { //RESPONSAVEL E STATUS == ACTIVE 

                //Instancio a Model
                await db.alterBossAndStatusActive(data);

                res.status(200).send({

                    codigo: 1, 
                    msg: 'Dados alterados corretamente.'


                });



        }else if(data.responsavel != '' && data.status == 'DESATIVAR' && !data.empresa) { //RESPONSAVEL E STATUS == ACTIVE

            //Instancio a Model 
            await db.alterBossAndStatusDisabled(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Dados alterados corretamente.'


            });
            
        }
        
    }

});



module.exports = { router }