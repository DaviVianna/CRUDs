
import React, { useEffect, useState } from 'react';
import {withRedux} from '../../lib/redux'
import axios from 'axios';
import { Table } from 'reactstrap';
import Layout from '../../layouts';


function lists() {


    const [user, setUser] = useState([]);


    
    useEffect( () => {

        axios.get('http://localhost:3000/conect_libras/Usuarios/consultar')
        .then(response => {

            setUser(response.data.dados);    
        

        }).catch(error => {
            
            console.log('erro');
        
        });


        }, [user])

  
    return(

        <>  

            <Layout>
            
                <Table responsive  hover>
                    <thead>
                        <tr className="bg-gray-700">
                            <th>#</th>
                            <th>Foto</th>
                            <th>Nome</th>
                            <th>Usuário</th>
                            <th>Senha</th>
                            <th>Dependente</th>
                            <th>...</th>
                            <th>...</th>
                        </tr>
                    </thead>

                {user.map((person) => (

                    <tbody key={person.id}>
                         <tr>
                            <th scope="row"></th>
                            <td>{person.id}</td>
                            <td>{person.foto}</td>
                            <td>{person.nome}</td>
                            <td>{person.usuario}</td>
                            <td>{person.senha}</td>
                            <td>{person.dependente}</td>
                            <td>
                                
                            </td>
                            <td>

                            </td>
                     
                        
                        </tr>

                     </tbody>
              


                ))}  


            </Table>
                    
                   


            </Layout>      

        </>
      
    );


}

export default withRedux(lists)
