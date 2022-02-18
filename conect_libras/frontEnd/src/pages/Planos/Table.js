import React, { useState, useEffect } from 'react';
import { withRedux } from '../../lib/redux';
import DataTable from './DataTable';
import axios from 'axios';
import SweetAlert from 'sweetalert';

function Table() {

    
    const [data, setData] = useState([]);

    const getAllData = async () => {

        try{
  
            const getData = await axios.get('http://localhost:3000/planos/consultar');
            
            setData(getData.data);
  
  
        }catch (err) {
  
            SweetAlert({
                text: 'Servidor indisponível.',
                icon: "error",
                timer: 1600,
              });
  
        }
  
    };
  
      
    useEffect( () => {

        getAllData();  
        
    }, []);


    return(

         <> 
            <DataTable data={data} />
        </> 

    );
}






export default withRedux(Table)
