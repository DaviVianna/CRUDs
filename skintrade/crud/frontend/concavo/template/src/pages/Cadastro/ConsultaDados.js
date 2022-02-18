import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';


const ConsultaDados = () => {


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

    //console.log(data);
    return(

        <Form data={data} />
      

    );


}

export default ConsultaDados;