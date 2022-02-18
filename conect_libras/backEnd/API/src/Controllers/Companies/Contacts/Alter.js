
//Required Model
const db = require("../../../Models/Companies/Contact/Alter");




const put = async (req, res) => {

    const  data = {

        razao_social:   req.body.razao_social,
        contato:        req.body.contato,
        telefone:       req.body.telefone, 
        celular:        req.body.celular, 
        email:          req.body.email,  
        plano:          req.body.plano,
        status:         req.body.status,
        cnpj:           req.params.cnpj 
    }

       
    console.log(data);

    //Alterando TODOS os DADOS

    /*if(data.razao_social != '' && data.contato != '' && data.email != '' && data.telefone != '' && data.celular != '' && data.plano != '' && data.status != '') {

        //Instâncio a Model
        await db.alterAllValues(data);

        res.status(201).send({

            codigo: 1,
            msg: 'Contato alterado corretamente .'

        });


    }else {

        //instânciando a Model de acordo com o que for alterar

        if(data.email.trim() != '' && !data.telefone && !data.celular && !data.responsavel){ //Alterando SOMENTE o EMAIL

            //Instânciando a Model
            await db.alterEmail(data);

            res.status(201).send({

                codigo: 1,
                msg: 'Email alterado corretamente. '

            });


        }else if(data.telefone != '' && !data.celular && !data.responsavel && !data.email) { //SOMENTE o TELEFONE


            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }



            //Instânciando a Model
            await db.alterPhone(data);


            res.status(201).send({

                codigo: 1,
                msg: 'Telefone alterado corretamente. '


            });


        }else if(data.celular != '' && !data.email && !data.telefone && !data.responsavel) { //SOMENTE o CELULAR

                //Verificando o tamanho de caracteres do Celular  
                if(data.celular.length < 11) {
                    
                    res.status(400).send({

                        codigo: 6, 
                        msg: 'Celular deve conter 11 caracteres. '

                    });  

                } 


                //Instânciando a Model
                await db.alterCellPhone(data);

                res.status(201).send({

                    codigo: 1, 
                    msg: 'Celular alterado corretamente. '


                });



        }else if(data.responsavel.trim() != '' && !data.email && !data.telefone && !data.celular) { //SOMENTE o RESPONSÁVEL

            //Instânciando a Model
            await db.alterBoss(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Responsavel alterado corretamente. '


            });


        }else if(data.status == 'Desativar' && data.email != '' && data.telefone != '' && !data.celular && !data.responsavel) {





        
        }else if(data.email != '' && data.telefone != '' && !data.celular && !data.responsavel) { //Alterar EMAIL e TELEFONE

            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }

            //Instânciando a Model
            await db.alterEmailAndPhone(data);

            res.status(201).send({

                codigo: 1,
                msg: 'Email e Telefone alterados corretamente. '


            });
            
            

        }else if(data.email != '' && data.celular != '' && !data.telefone && !data.responsavel) { //EMAIL e CELULAR

            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            } 

            //Instânciando a Model
            await db.alterEmailAndCellPhone(data);

            res.status(201).send({

                codigo: 1,
                msg: 'Email e Celular alterados corretamente. '


            });



        }else if(data.email != '' && data.responsavel != '' && !data.celular && !data.telefone) { //EMAIL e RESPONSAVEL

            //Instânciando a Model
            await db.alterEmailAndBoss(data);


            res.status(201).send({

                codigo: 1, 
                msg: 'Email e Responsavel alterados corretamente. '


            });
            
            


        }else if(data.telefone != '' && data.celular != '' && !data.email && !data.responsavel) { //TELEFONE e CELULAR

            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }


            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            } 


            //instânciando a Model
            await db.alterPhoneAndCellPhone(data); 

            res.status(201).send({

                codigo: 1, 
                msg: 'Telefone e Celular alterados corretamente. '


            });


            
        }else if(data.telefone != '' && data.responsavel != '' && !data.celular && !data.email) { //TELEFONE e RESPONSAVEL
    
            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }


            //Instânciando a Model
            await db.alterPhoneAndBoss(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Telefone e Responsavel alterados corretamente. '

            });




            
        }else if(data.celular != '' && data.responsavel != '' && !data.telefone && !data.email) { //CELULAR e RESPONSAVEL
            
            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            } 

            //Instânciando a Model
            await db.alterCellPhoneAndBoss(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Celular e Responsavel alterados corretamente. '

            });


        }else if(data.email != '' && data.telefone != '' && data.celular != '' && !data.responsavel) { //EMAIL, TELEFONE e CELULAR

            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }

            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            } 


            //Instânciando a Model
            await db.alterValues(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Email, Telefone e Celular alterados corretamente. '


            });





        }else if(data.telefone != '' && data.celular != '' && data.responsavel != '' & !data.email) { //TELEFONE, CELULAR e RESPONSAVEL

            //Verificando o tamanho de caracteres do telefone
            if(data.telefone.length < 10) {

                res.status(400).send({

                    codigo: 4, 
                    msg: 'Telefone deve conter 10 caracteres. '

                });

            }


            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            } 

            //Instânciando a Model
            await db.alterOthersValues(data);

            res.status(201).send({

                codigo: 1, 
                msg: 'Telefone, Celular e Responsavel alterados corretamente. '

            });



        }else if(data.email != '' && data.celular != '' && data.responsavel != '' && !data.telefone) { //EMAIL, CELULAR e RESPONSAVEL
            


            //Verificando o tamanho de caracteres do Celular  
            if(data.celular.length < 11) {
                    
                res.status(400).send({

                    codigo: 6, 
                    msg: 'Celular deve conter 11 caracteres. '

                });  

            }
            
            
            //Instânciando a Model
            await db.alterManyValues(data);


            res.status(200).send({

                codigo: 1, 
                msg: 'Email, Celular e Responsavel alterados corretamente . '

            });


        
        }else if(data.email == '' && data.celular == '' && data.responsavel == '' && data.telefone == '') {

            res.status(400).send({

                codigo: 12, 
                msg: '*Campos não preenchidos.'

            });


        }


    }*/

}


module.exports = { put }