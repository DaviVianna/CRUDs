import React from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts';
import Form from './form';
import Table from './Table';



function Index() {


    return(

         <> 
            <Layout>
                <h6 className="pl-1 pt-12 text-blue-800 text-bold uppercase font-semibold">Cadastro de Administradores</h6>
                <Form />

                <h6 className="pl-1 mt-12 text-blue-800 text-bold uppercase font-semibold">Administradores cadastrados</h6>
                <Table />
            </Layout>
            
           
            
       
        </>
    

    );


}

export default withRedux(Index)