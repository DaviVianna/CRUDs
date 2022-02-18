import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert';
import { useRouter } from 'next/router';



const Edit = (product) => {

    //Acessando o objeto para pegar o ID do produto;
    const dados = product.product.product;

    const router = useRouter();

    const [data, setData] = useState();

  
    useEffect( () => {

        const getData = async () => {

            await axios.get('http://localhost:3000/consultarCampos')
            .then(response => {

                setData(response.data);

            }).catch(error => {

                null

            })
        }

        getData();

    }, []);


    const [name, setName]               = useState('');
    const [description, setDescription] = useState('');
    const [qapageid, setQapageid]       = useState('');
    const [type, setType]               = useState('');
    const [namespace, setNamespace]     = useState('');
    const [solution, setSolution]       = useState('');
    const [platform, setPlatform]       = useState('');
    


    //Função que envia os dados para a api para fazer a alteração,
    async function handleSubmit(event) {

        event.preventDefault();
  
        const dataForm = {
  
          "name":         name, 
          "description":  description,
          "qapageid":     qapageid,
          "type":         type,
          "namespace":    namespace,
          "solution":     solution,
          "platform":     platform
        }
  
  
       await axios.put(`http://localhost:3000/alterar/${dados.Id}`, dataForm)
        .then(response => {
  
          SweetAlert({
            text: 'Alterado com sucesso!',
            icon: "success",
            timer: 2000,
          });


          router.push('/dashboards/dashboard-1');
  
          setName('');
          setDescription('');
          setQapageid('');
          setType('');
          setNamespace('');
          setSolution('');
          setPlatform('');
          
        })
        .catch(err => {
  
          SweetAlert({
            text: 'Servidor indisponível!',
            icon: "error",
            timer: 2000,
            
          });
  
        });
  
      }


    return(

        <>

<           form className="grid grid-cols-3">
           

                {/** INPUT NAME*/}
                    <label className="block ml-16 mt-5">
                    <span className="text-default text-white font-bold">Name:</span>
                    <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={ (e) => setName(e.target.value)}
                        className="form-input mt-3 text-xs block w-10/12 bg-white"
                        placeholder="Name:"
                        
                    />
                    </label>

                    {/** INPUT DESCRIPTION*/}
                    <label className="block ml-10 mt-5">
                    <span className="text-default text-white font-bold">Description:</span>
                    <input
                        name="description"
                        type="text"
                        value={description}
                        onChange={ (e) => setDescription(e.target.value)}
                        className="form-input mt-3 text-xs block w-10/12 bg-white"
                        placeholder="..."
                        
                    />
                    </label>


                        {/**INPUT QAPAGEID*/}
                    <label className="block ml-10 mt-5">
                    <span className="text-default text-white font-bold">QaPageId:</span>
                    <input
                        name="qapageid"
                        type="text"
                        value={qapageid}
                        onChange={ (e) => setQapageid(e.target.value)}
                        className="form-input mt-3 text-xs block w-10/12 bg-white"
                        placeholder="QaPageId:"
                        
                    />
                    </label>


                    {/**INPUT TYPE*/}
                    <div className="w-6 mt-5  ml-16">
                        <span className="text-default text-black font-bold">Type:</span> 
                        <select 
                            className="form-select block md:w-48 mt-3 text-sm" 
                            name="type"  
                            value={type} 
                            onChange={ (e) => setType(e.target.value)}
                        >
                            
                            {
                                data ? 
                                data[1].map(item => {

                                    return(

                                    <>
                                        <option key={item.Id}>{item.Type}</option>
                                    </>

                                    );

                                })
                            
                                : 
                                null
                            }

                        
                        </select>  
                    </div>


                    {/**INPUT NAMESPACE*/}
                    <div className="w-6 mt-5  ml-10">
                        <span className="text-default text-black font-bold">Namespace:</span> 
                        <select 
                            className="form-select block md:w-48 mt-3 text-sm" 
                            name="namespace"  
                            value={namespace} 
                            onChange={ (e) => setNamespace(e.target.value)}
                        >
                            {
                                data ? 
                                data[0].map(item => {

                                    return(

                                    <>
                                        <option key={item.Id}>{item.Namespace}</option>
                                    </>

                                    );

                                })
                            
                                : 
                                null
                            }
                        
                        </select>  
                    </div>



                    {/**INPUT SOLUTION*/}
                    <div className="w-6 mt-5  ml-10">
                        <span className="text-default text-black font-bold">Solution:</span> 
                        <select 
                            className="form-select block md:w-48 mt-3 text-sm" 
                            name="solution"  
                            value={solution} 
                            onChange={ (e) => setSolution(e.target.value)}
                        >

                            {
                                data ? 
                                data[2].map(item => {

                                    return(

                                    <>
                                        <option key={item.Id}>{item.Solution}</option>
                                    </>

                                    );

                                })
                            
                                : 
                                null
                            }
                    
                        </select>  
                    </div>



                    {/**INPUT PLATFORM*/}
                    <div className="w-6 mt-5  ml-16">
                        <span className="text-default text-black font-bold">Platform:</span> 
                        <select 
                            className="form-select block md:w-48 mt-3 text-sm" 
                            name="platform"  
                            value={platform} 
                            onChange={ (e) => setPlatform(e.target.value)}
                        >
                            
                            {
                                data ? 
                                data[3].map(item => {

                                    return(

                                    <>
                                        <option key={item.Id}>{item.Platform}</option>
                                    </>

                                    );

                                })
                            
                                : 
                                null
                            }

                        </select>  
                    </div>   
                </form>

        <div 
          className="mt-12 border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        >
          <button 
          type="button" 
          className="text-black font-bold bg-gray-600 mb-10 ml-16 p-2 w-40 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          onClick={handleSubmit}
          >
            Alterar
          </button>
        </div>


        </>
    );

}


export default Edit;
