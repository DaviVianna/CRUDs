import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TabelaDados from './DataTable';




const DataTable = () => {

    const [data, setData] = useState([]);

    const getAllData = async () => {

        try{
  
            const getData = await axios.get('http://localhost:3000/empresas/consultar');
            
            setData(getData.data);
  
  
        }catch (err) {
            
        
           
  
        }

  
    };
  
    
    useEffect( () => {

        getAllData();  
   
    }, []);


    return(

        <>
         <TabelaDados data={data} />
        </>
    );


}


export default DataTable;