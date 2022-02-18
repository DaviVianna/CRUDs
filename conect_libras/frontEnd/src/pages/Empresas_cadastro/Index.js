import React from 'react';
import Layout from '../../layouts';
//import VerificaCnpj from './VerificaCnpj';
import Form from '../Empresas/Form';
import {withRedux} from '../../lib/redux'


function pageCadastro() {

    
    return(
        
        <>  
            <Layout>    
                <Form />
            </Layout>
            
        </>
    );
}


export default withRedux(pageCadastro);