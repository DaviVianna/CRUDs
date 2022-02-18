import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabelaDados from './DataTable';
import SweetAlert from 'sweetalert';


const DataTable = () => {

    const [data, setData] = useState([]);

    
    useEffect( () => {

        const getAllData = async () => {

            await axios.get('http://localhost:3000/administradores/consultar')
            .then(response => {

                setData(response.data);
            }) 
            .catch(err => {

                SweetAlert({
                    text: 'Servidor indisponível.',
                    icon: "error",
                    timer: 1600,
                  });
                
            })
  
        };

        getAllData();  
          
    }, []);


    return(

        <>

            <TabelaDados data={data} />


        </>
    );


}


export default DataTable;