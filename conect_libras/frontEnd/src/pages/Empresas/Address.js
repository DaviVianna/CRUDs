import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


const CreateAccount =   () => {

  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)

  }

  const [cnpj, setCnpj]                 = useState('');
  const [cep, setCep]                   = useState('');
  const [logradouro, setLogradouro]     = useState('');
  const [bairro, setBairro]             = useState('');
  const [cidade, setCidade]             = useState('');
  const [complemento, setComplemento]   = useState('');
  const [numero, setNumero]             = useState('');
 





  function registerUser(event) {


    event.preventDefault();


    const data = {

        "cnpj":          cnpj,
        "cep":           cep, 
        "logradouro":    logradouro, 
        "bairro":        bairro, 
        "cidade":        cidade, 
        "complemento":   complemento,
        "numero":        numero, 

    }
  



  
  //validação dos dados passados

  if(name === '' || user === '' || password === ''){


        //alert('Preencha todos os campos.');
        
        errors.data && (
          <p className="mt-1 text-xs text-red-500">Preencha todos os campos.</p>
        )


  }else {

    axios.post('http://localhost:3000/conect_libras/Usuarios/Inserir', data)

    .then(response => {

       alert(response.data.msg);
        setName('');
        setUser('');
        setPassword('');


    })
    .catch(error => {

    
      alert(response.data.msg);

    });
      
     
    }

}
  


  return (
    <>



    

    <div className="">
        <form onSubmit={handleSubmit(onSubmit)} className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-gray-300 pb-8">
         

         
          {/*Cnpj*/}          
          <div className=" mb-4 w-5/12  relative lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">CNPJ:</span>
                        <input 
                            name="cnpj" type="text" ref={register({required: true})}

                            value={cnpj} onChange={ (e) => setCnpj(e.target.value)}
                        
                            className="form-input mt-3 text-xs block w-10/12 bg-white"
                            placeholder="00.000.000/0000-00"

                         />
                </label>
            </div>

          



         {/*Cep*/}
          <div className="mb-4 w-5/12  relative lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">CEP:</span>
              <input
                name="cep"
                type="text"
                ref={register({required: true})}

                value={cep} onChange={ (e) => setCep(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="00000-000"
              />

              {errors.cep && (
                  <p className="mt-1 text-xs text-red-500">Cep não informado.</p>
              )}
            </label>
          </div>




         {/*Logradouro*/}
          <div className="w-5/12  relative lg:w-auto transform translate-y-1">
            <label className="block">
              <span className="text-default text-black font-bold">Logradouro:</span>
              <input
                name="logradouro"
                type="text"
                ref={register({required: true})}

                value={logradouro} onChange={ (e) => setLogradouro(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Logradouro:"
              />

              {errors.logradouro && (
                  <p className="mt-1 text-xs text-red-500">Logradouro não informado.</p>
              )}

            </label>
          </div>


        {/*Bairro*/}
          <div className="w-5/12  relative lg:w-auto transform translate-y-1">
              <label className="block">
                <span className="text-default text-black font-bold">Bairro:</span>
                  <input
                      name="Bairro"
                      type="text"
                      ref={register({required: true})}

                      value={bairro} onChange={ (e) => setBairro(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="bairro:"
                  />

                {errors.bairro && (
                    <p className="mt-1 text-xs text-red-500">Bairro não informado.</p>
                )}

              </label>
          </div>



          {/*Cidade*/}
          <div className="w-5/12  relative lg:w-auto transform translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Cidade:</span>
                  <input
                      name="cidade"
                      type="text"
                      ref={register({required: true})}

                      value={cidade} onChange={ (e) => setCidade(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Cidade:"
                  />

                {errors.cidade && (
                    <p className="mt-1 text-xs text-red-500">Cidade não informada.</p>
                )}

              </label>
          </div>



          
          {/*Complemento*/}
          <div className="w-5/12  relative h-32 lg:w-auto transform translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Complemento:</span>
                  <input
                      name="complemento"
                      type="text"
                      ref={register({required: true})}

                      value={complemento} onChange={ (e) => setComplemento(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Complemento:"
                  />

                {errors.complemento && (
                    <p className="mt-1 text-xs text-red-500">Complemento não informado.</p>
                )}

              </label>
          </div>



          
          {/*Número*/}
          <div className="w-5/12  relative h-32 lg:w-auto transform translate-y-1">
              <label className="block">
                <span className="text-default text-black font-bold">Número:</span>
                  <input
                      name="numero"
                      type="text"
                      ref={register({required: true})}

                      value={numero} onChange={ (e) => setNumero(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Número:"
                  />

                {errors.numero && (
                    <p className="mt-1 text-xs text-red-500">Complemento não informado.</p>
                )}

              </label>
          </div>

        </form>
      </div>
    {/*Fim do FORMULÁRIO*/}
      



      <div className="transform -translate-y-16 w-40 ml-8">
        <button type="submit" 
          className="btn btn-default btn-block bg-blue-700 btn-rounded text-white text-bold uppercase hover:bg-blue-800 focus:outline-none"
          value="Cadastrar" onClick={registerUser}
        >
          Cadastrar

        </button>
      </div>

      
    </>
  )
}

export default CreateAccount
