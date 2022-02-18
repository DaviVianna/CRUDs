import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Datatable from './Datatable';


const Table = (cnpj) => {

    const empresa = cnpj.cnpj;

    const [data, setData] = useState([]);

    const getData = async () => {

        try {

            const getData = await axios.get(`http://localhost:3000/clientes/consultar/${empresa}`);
            
            setData(getData.data);

        }catch (err) {

            
        }


    }

    

    useEffect( () => {

        getData();

    },[]);
    

return(

    <Datatable data={data} />

);
}


export default Table;