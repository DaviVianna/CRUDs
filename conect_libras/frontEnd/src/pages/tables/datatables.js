import React, { useState, useEffect } from 'react'
import DataTable from '../../components/datatable/index';
import axios from 'axios';
//import ModalEdit from '../Operadores/ModalEdit';


const Table = () => {

  const [data, setData] = useState([]);
  

  const getAllData = async () => {

      try{

          const getData = await axios.get('http://localhost:3000/operadores/consultar')
          //console.log(getData.data[0].id_operador);
          setData(getData.data);



      }catch (err) {

          console.log('Erro ao listar os cadastrados');

      }

  };



  useEffect( () => {

      getAllData();

  }, []);



  const columns = [

      {
        Header: '#',
        accessor: 'id_operador'
      },
      {
        Header: 'Foto',
        accessor: 'foto'
      },
      {
        Header: 'Nome',
        accessor: 'nome'
      },
      {
        Header: 'E-mail',
        accessor: 'usuario'
      },
      {
        Header: 'Senha',
        accessor: 'senha',
       
      },

      
  ]






  //Tabela
  const Simple = () => {

    return <DataTable columns={columns} data={data} /> 

  }
 

    return(

        <div className="mt-12">
          <Simple/>
        </div>
        
    );

}


export default Table;