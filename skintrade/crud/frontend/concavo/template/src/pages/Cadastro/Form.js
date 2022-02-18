import React, { useState } from 'react';
import axios from 'axios';
import SweetAlert from 'sweetalert';
import { useForm } from 'react-hook-form'

const Form = (data) => {

    const dados = data.data;

    

    const {register, watch, errors} = useForm();

    const [name, setName]               = useState('');
    const [description, setDescription] = useState('');
    const [qapageid, setQapageid]       = useState('');
    const [type, setType]               = useState('');
    const [namespace, setNamespace]     = useState('');
    const [solution, setSolution]       = useState('');
    const [platform, setPlatform]       = useState('');


    //Função que envia os dados para a api,
    async function handleSubmit(event) {

      event.preventDefault();

      const data = {

        "name":         name, 
        "description":  description,
        "qapageid":     qapageid,
        "type":         type,
        "namespace":    namespace,
        "solution":     solution,
        "platform":     platform
      }




      //Validando os inputs 

      if(name == '' || name.length == 0 || typeof name == undefined || name == null) {

        SweetAlert({
          text: 'Name não informado.',
          icon: "error",
          timer: 1800,
          
        });

      }else if(description == '' || description.length == 0 || typeof description == undefined || description == null) {

        SweetAlert({
          text: 'Description não informada.',
          icon: "error",
          timer: 1800,
          
        });

      }else if(qapageid == '' || qapageid.length == 0 || typeof qapageid == undefined || qapageid == null) {

        SweetAlert({
          text: 'QaPageId não informado.',
          icon: "error",
          timer: 1800,
          
        });

      }else {

        
        axios.post('http://localhost:3000/cadastro/', data)
        .then(response => {

          SweetAlert({
            text: 'Cadastrado com sucesso!',
            icon: "success",
            timer: 2000,
          });

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

    }



    return(

        <>
        <form className="grid grid-cols-3">
           

           {/** INPUT NAME*/}
            <label className="block ml-16 mt-5">
              <span className="text-default text-white font-bold">Name:</span>
              <input
                name="name"
                type="text"
                ref={register({required: true})}
                value={name}
                onChange={ (e) => setName(e.target.value)}
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Name:"
                
              />
            </label>
            {errors.name && (
            <p className="mt-1 text-xs text-red-500">Name não informado.</p>
          )}

              {/** INPUT DESCRIPTION*/}
            <label className="block ml-10 mt-5">
              <span className="text-default text-white font-bold">Description:</span>
              <input
                name="description"
                type="text"
                ref={register({required: true})}
                value={description}
                onChange={ (e) => setDescription(e.target.value)}
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="..."
                
              />
            </label>
            {errors.description && (
            <p className="mt-1 text-xs text-red-500">Description não informada.</p>
          )}


                {/**INPUT QAPAGEID*/}
            <label className="block ml-10 mt-5">
              <span className="text-default text-white font-bold">QaPageId:</span>
              <input
                name="qapageid"
                type="text"
                value={qapageid}
                ref={register({required: true})}
                onChange={ (e) => setQapageid(e.target.value)}
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="QaPageId:"
                
              />
            </label>
            {errors.qapageid && (
            <p className="mt-1 text-xs text-red-500">QaPageId não informada.</p>
          )}



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

                      
                      dados ? 
                      dados[1].map(item => {

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
                      dados ? 
                      dados[0].map(item => {

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
                      dados ? 
                      dados[2].map(item => {

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
                      dados ? 
                      dados[3].map(item => {

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
            Cadastrar
          </button>
        </div>
        </>

    );

}



export default Form;