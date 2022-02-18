import React, {useState, useEffect } from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts';
import Register from './register';
import Consult from './consult';

function Index() {


    

    return(

         <> 
            <Layout>
                
                <Register />
                <h5 className="text-center pt-20 text-blue-700 text-bold uppercase font-semibold">Usuários Cadastrados</h5>
          
            </Layout>
            
            <Consult />
               
        </>
         
        
    

    );


}

export default withRedux(Index)