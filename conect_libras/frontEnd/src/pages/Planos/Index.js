import React, {useState, useEffect } from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts';
import Form from './Form';
import Table from './Table';

function Index() {


    

    return(

         <> 
            <Layout>
                <h6 className="pl-1 pt-12 text-blue-800 text-bold uppercase font-semibold">Cadastro de Planos</h6>
                <Form />
                <h6 className="pl-1 ml-1 pt-12 text-blue-800 text-bold uppercase font-semibold">Planos Cadastrados</h6>
                <Table />
            </Layout>
       
               
        </>
         
    );


}

export default withRedux(Index)