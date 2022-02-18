import React from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts';
import Form from './Form';
import Table from './Table';

function Index() {
    
    return(

         <> 
            <Layout>
                <h6 className="pl-1 pt-16 text-blue-800 text-bold uppercase font-semibold">Cadastro de Operadores</h6>
                <Form />
                <h5 className="pl-1 pt-10 text-blue-800 text-bold uppercase font-semibold">Operadores Cadastrados</h5>
                <Table />
            </Layout>
            
        </>

    );

}

export default withRedux(Index);