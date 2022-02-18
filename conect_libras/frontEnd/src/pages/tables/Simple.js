import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import Datatable from '../../components/datatable';





const Simple = () => {

  
    const [comands, setComands] = useState([]);
  
  
    useEffect( () => {
  
      axios.get('http://localhost:3000/operadores/consultar')
      .then(response => {
  
          //setComands(response);
          setComands(response.data);
  
      })
      .catch(error => {
  
          console.log('erro');
  
      });
  
  
    }, [comands]);
  
  
  
    const columns =  [
  
        {
          Header: 'id',
          accessor: 'id'
        },
        {
          Header: 'Foto',
          accessor: 'Foto'
        },
        {
          Header: 'Nome',
          accessor: 'Nome'
        },
        {
          Header: 'Usuário',
          accessor: 'Usuario'
        },
         {
          Header: 'Senha',
          accessor: 'senha'
        },
  
        {
          Header: 'dt_criacao',
          accessor: 'dt_criacao'
        },
  
        {
          Header: 'estatus',
          accessor: 'estatus'
        },
     
      
      ]
  
  
    return(

      <Datatable columns={columns} comands={comands} />

    );
  
  
  
  }



  export default Simple;