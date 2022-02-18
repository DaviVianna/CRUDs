import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import {withRedux} from '../../lib/redux'
import Head from 'next/head'


const Cadastro = () => {


    const [data, setData] = useState();

    
    useEffect( () => {

        const getAllData = async () => {

            await axios.get('http://localhost:3000/consultarCampos')
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

        <Head>
            <title>Cadastro</title>
        </Head>


            <h4 className="text-gray-800 font-bold">  
                 Cadastro
            </h4>

            
            <div className="bg-gray-100 w-full m-auto h-auto rounded-lg mt-5 shadow-2xl">
                <Form data={data} />
            </div>

        </>
    );


}


export default withRedux(Cadastro);
