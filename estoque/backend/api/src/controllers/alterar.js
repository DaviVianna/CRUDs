const db = require('../models/alterar');
const express = require('express');
const app = express();
app.use(express.json());



const put = async (req, res) => {

        const data = {

            id:             req.params.id,
            name:           req.body.name,
            namespace:      req.body.namespace,
            type:           req.body.type, 
            description:    req.body.description, 
            qapageid:       req.body.qapageid,
            solution:       req.body.solution,
            platform:       req.body.platform

        }  
        





        //altera todos
        if(data.name != '' && data.namespace != '' && data.type != '' && data.description != '' && data.qapageid != '' && data.solution != '' && data.platform != '') {

            //Instancio a Model
            await db.alteraTodosOsDados(data);

            res.status(200).send({

                codigo: 1, 
                msg: 'Todos os dados alterados corretamente.'

            });

        }else if(data.name != '' && data.namespace != '' && !data.type && !data.description && !data.qapageid && !data.solution && !data.platform) { //Combinações para alterar

               //instancio a model
               await db.alteraNameAndNamespace(data);

               res.status(200).send({
   
                   codigo: 1, 
                   msg: 'Name e Namespace alterados corretamente.'
   
               });

        }else if(data.name != '' && data.namespace != '' && data.type != '' && !data.description && !data.qapageid && !data.solution && !data.platform) {

            //Instancio a Model
            await db.alteraNameAndNamespaceAndType(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Dados alterados corretamente.'
    
            });
    
        }else if(data.namespace != '' && data.type != '' && !data.description && !data.qapageid && !data.solution && !data.platform && !data.name) {

            //Instanciando a Model
            await db.alteraNamespaceAndType(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Namespace e Type alterados corretamente.'
    
            });
        
        }else if(data.type != '' && data.description != '' && !data.qapageid && !data.solution && !data.platform && !data.name && !data.namespace) {    

            //Instancio a Model
            await db.alterTypeAndDescription(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Type e Description alterados corretamente.'
    
            });
        
        
        
        }else if(data.qapageid != '' &&  data.solution != '' && !data.platform && !data.name && !data.namespace && !data.type && !data.description) {

            //Instancio a model
            await db.alteraQaPageIdAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'QaPageId e Solution alterados corretamente.'
    
    
            }); 
    
        }else if(data.solution != '' && data.platform != '' && !data.name && !data.namespace && !data.type && !data.description && !data.qapageid) {

            //Instancio a Model
            await db.alteraSolutionAndPlatform(data);
    
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Solution e Platform alterados corretamente.'
    
            });
        
        }else if(data.name != '' && data.description != '' && !data.namespace && !data.type && !data.qapageid && !data.solution && !data.platform) {

            //Instancio a Model
            await db.alteraNameAndDescription(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e Description alterados corretamente.'
    
            });
            
        }else if(data.name != '' && data.type != '' && !data.description && !data.qapageid && !data.solution && !data.namespace && !data.platform) {
    
            //Instancio a model 
            await db.alteraNameAndType(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e Type alterados corretamente.'
    
    
            });
    
        }else if(data.name != '' && data.qapageid != '' && !data.type && !data.description  && !data.solution && !data.namespace && !data.platform) {
    
            //Instancio a model
            await db.alteraNameAndQapageid(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e QaPageId alterados corretamente.'
    
            });
            
        }else if(data.name != '' && data.solution != '' && !data.platform && !data.type && !data.namespace && !data.description && !data.qapageid) {
    
            //Instancio a model
            await db.alteraNameAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e Solution alterados corretamente.'
    
    
            });
            
        }else if(data.name != '' && data.platform != '' &&  !data.type && !data.namespace && !data.description && !data.qapageid && !data.solution) {
    
            //Instancio a model 
            await db.alteraNameAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e Platform alterados corretamente.'
    
            });
    
        }else if(data.namespace != '' && data.description != '' && !data.qapageid && !data.solution && !data.platform && !data.name && !data.type) {
    
            //Instancio a Model
            await db.alteraNamespaceAndDescription(data);
            
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Namespace e Description alterados corretamente.'
    
            });
    
    
        }else if(data.namespace != '' && data.qapageid != '' && !data.solution && !data.platform && !data.name && !data.type && !data.description) {
    
            //Instancio a Model
            await db.alteraNamespaceAndQaPageId(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e QaPageId alterados corretamente.'
    
            });
            
        }else if(data.namespace != '' && data.solution != '' && !data.platform && !data.name && !data.type && !data.description && !data.qapageid) {
    
            //Instancio a Model
            await db.alteraNamespaceAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Name e Solution alterados corretamente.'
    
            });
            
        }else if(data.namespace != '' && data.platform != '' && !data.name &&  !data.type && !data.description && !data.qapageid && !data.solution) {
    
            //Istancio a Model
            await db.alteraNamespaceAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Namespace e Platform alterados corretamente.'
    
            });
            
        }else if(data.type != '' && data.qapageid != '' && !data.solution && !data.platform && !data.name && !data.namespace && !data.description) {
    
            //Instancio a model 
            await db.alterTypeAndQapageId(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Type e QaPageId alterados corretamente.'
    
            });
            
        }else if(data.type != '' && data.solution != '' && !data.platform && !data.name && !data.namespace && !data.description && !data.qapageid) {
    
            //Instancio a Model 
            await db.alterTypeAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Type e Solution alterados corretamente.'
    
            });
            
        }
        else if(data.type != '' && data.platform != '' && !data.name && !data.namespace && !data.description && !data.solution && !data.qapageid) {
    
    
            //Instancio a Model
            await db.alterTypeAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Type e Platform alterados corretamente.'
    
            });
    
            
        }
        else if(data.description != '' && data.solution != '' && !data.platform && !data.name && !data.namespace && !data.type && !data.qapageid) {
    
    
            //Instanciando a Model 
            await db.alteraDescriptionAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Description e Solution alterados corretamente.'
    
            });
    
            
        }
        else if(data.description != '' && data.platform != '' && !data.name && !data.namespace && !data.type && !data.qapageid && !data.solution) {
    
            //Instancio a Model
            
            await db.alterDescriptionAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Description e platform alterados corretamente.'
    
            });
    
            
        }else if(data.qapageid != '' && data.platform != '' && !data.name && !data.namespace && !data.type && !data.description && !data.solution != '') {
    
            //Instancio a Model
            await db.alteraQaPageIdAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'QaPageId e Platform alterados corretamente.'
    
            });
    
    
        }else if(data.name != '' && data.namespace != '' && data.type != '' && !data.description && !data.qapageid && !data.solution && !data.platform) {
    
            //Instancio a Model
            await db.alteraNameAndNamespaceAndType(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Dados alterados corretamente.'
    
            });
    
        }else if(data.description != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.name && !data.namespace && !data.type) {
    
            //Instancio a Model
            await db.alteraDescAndQaPageIdAndSolution(data);
    
            res.status(200).send({
    
                codigo: 1, 
                msg: 'Dados alterados corretamente.'
    
            });
    
    
        }else if(data.name != '' && data.type != '' && data.description != '' && !data.namespace && !data.qapageid && !data.platform && !data.solution) {
    
            //Instancio a Model
            await db.alteraNameAndTypeAndDescription(data);
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
    
        }else if(data.name != '' && data.namespace != '' && data.type != '' && data.description != '' && !data.qapageid && !data.solution && !data.platform) {
    
    
            //Instancio a Model
            await db.alteraNameAndNamespaceAndTypeAndDescription(data);
    
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.name != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.namespace && !data.type && !data.description) {
    
    
            //Instancio a Model
            await db.alterNameAndQapageidAndSolutionAndPlatform(data);
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.namespace != '' && data.type != '' && data.description != '' && !data.qapageid && !data.solution && !data.platform) {
    
    
            //Instancio a Model
            await db.alteraNamespaceAndTypeAndDescription(data);
    
    
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.namespace != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.name && !data.type && !data.description) {
    
            //Instancio a Model 
            await db.alteraNamespaceAndQapageidAndSolutionAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.namespace != '' && data.type != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.name  && !data.description) {
    
            //Instancio a Model
            await db.alteraNamespaceAndTypeAndQapageidAndSolutionAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.namespace != '' && data.type != '' && data.description != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.name) {
    
            //Instancio a Model 
            await db.alteraNamespaceAndTypeAndDescAndQapageidAndSolutionAndPlatform(data);
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'
    
    
            });
            
        }else if(data.type != '' && data.qapageid != '' && data.solution != '' && data.platform != '' && !data.name && !data.namespace && !data.description) {
    
            //Instancio a Model 
            await db.alteraTypeAndQapageidAndSolutionAndPlatform(data);
    
            res.status(200).send({
    
                codigo: 1,
                msg: 'Dados alterados corretamente.'

            });
        
        
        } else { //altera 1 por 1 


            if(data.name != '' && !data.namespace && !data.type && !data.description && !data.qapageid && !data.solution && !data.platform) {

                //Intancio a model
                await db.alteraName(data);
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'Name alterado corretamente.'
        
                });
        
            }else if(data.namespace != '' && !data.type && !data.description && !data.qapageid && !data.solution && !data.name && !data.platform) {
        
                
                //Intancio a model
                await db.alteraNamespace(data);
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'Namespace alterado corretamente.'
        
                });
        
            }else if(data.type != '' && !data.description && !data.qapageid && !data.solution && !data.name && !data.platform && !data.namespace) {
        
                
                //Intancio a model
                await db.alteraType(data);
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'Type alterado corretamente.'
        
                });
                
            }else if(data.description != '' && !data.namespace && !data.qapageid && !data.platform && !data.solution && !data.type && !data.name) {
        
                
                //Instãncio a model
                await db.alteraDescription(data);
        
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'Description alterado corretamente.'
        
                });
                
            }else if(data.qapageid != '' && !data.name && !data.platform && !data.type && !data.solution && !data.namespace && !data.description) {
        
                
                //Intancio a model
                await db.alteraQaPageId(data);
        
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'QaPageId alterado corretamente.'
        
                });
                
            }else if(data.solution != '' && !data.description && !data.namespace && !data.name && !data.type && !data.qapageid && !data.platform) {
        
                
                //Intancio a model
                await db.alteraSolution(data);
        
                res.status(200).send({
        
                    codigo: 1, 
                    msg: 'Dado alterado corretamente.'
        
                });
            
                
            }else if(data.platform != '' && !data.solution && !data.description &&  !data.namespace && !data.name && !data.type && !data.qapageid) {
    
                //Instancio a Model
                await db.alteraPlatform(data);
    
                res.status(200).send({
    
                    codigo: 1, 
                    msg: 'Platform alterado corretamente'
    
                });
    
            }

        }

 
}


module.exports = { put }