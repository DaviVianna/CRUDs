import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './DataTable';



const DataTable = () => {

    const [data, setData] = useState([]);



    const getAllData = async () => {

        try{
  
            const getData = await axios.get('http://localhost:3000/operadores/consultar');
            
           
           setData(getData.data);
           
           
  
  
        }catch (err) {
  
            alert('Servidor indiponível');
  
        }

  
    };

    
  
      
  
  
    useEffect( () => {
        
        getAllData();

    }, []);



    return(

        <>
            
            <Table data={data} />
            
        </>
    );


}


export default DataTable;