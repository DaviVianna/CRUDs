import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import Datatable from './Datatable';
import Head from 'next/head';


const Consulta  = () => {

    const [data, setData] = useState();
 
    //Renderiza a cada load da page
    useEffect( () => {

        const getAllData = async () => {

            await axios.get('http://localhost:3000/consultar/')
            .then(response => {

                setData(response.data);

            }).catch(error => {

                console.log('erro ao buscar');

            })
        }


        getAllData();

    }, []);


    return(

        <>
            <Layout>
                <Head>
                    <title>Listagem</title>
                </Head>
                <h4 className="text-gray-800 font-bold">Consulta</h4>
                {

                    data ? 

                        <Datatable data={data} />
                    :

                    null
                 
                }
               
            </Layout>
      
        </>

    );
 
}
export default withRedux(Consulta)