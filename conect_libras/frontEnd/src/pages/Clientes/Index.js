import React from 'react';
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts';
import Form from './Form';


function Index(company) {


    return(

        <>  
            <Layout>
                <Form company={company} />
            </Layout>
            
           

        </>
    );
}


export default withRedux(Index)