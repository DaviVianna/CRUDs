import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


const CreateAccount =   () => {

  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)

  }




  const [Empresa, setEmpresa]           = useState('');
  const [razao_social, setRazao_social] = useState('');
  const [cnpj, setCnpj]                 = useState('');
  const [responsavel, setResponsavel]   = useState('');
  const [Plano, setPlano]               = useState('');





  function registerUser(event) {


    event.preventDefault();


    const data = {

        "empresa": Empresa, 
        "razao_social": razao_social,
        "cnpj": cnpj, 
        "responsavel": responsavel,
        "plano": Plano, 

 
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
         
         {/*Empresa*/}
          <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Empresa:</span>
              <input
                name="empresa"
                type="text"
                ref={register({required: true})}

                value={Empresa} onChange={ (e) => setEmpresa(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Empresa:"
              />

              {errors.empresa && (
                  <p className="mt-1 text-xs text-red-500">Empresa não informada.</p>
              )}
            </label>
          </div>




         {/*Razão_social*/}
          <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Razão Social:</span>
              <input
                name="razao_social"
                type="text"
                ref={register({required: true})}

                value={razao_social} onChange={ (e) => setRazao_social(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Razão Social:"
              />

              {errors.usuario && (
                  <p className="mt-1 text-xs text-red-500">Razão Social não informada.</p>
              )}

            </label>
          </div>


        {/*Cnpj*/}
          <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">CNPJ:</span>
                  <input
                      name="cnpj"
                      type="text"
                      ref={register({required: true})}

                      value={cnpj} onChange={ (e) => setCnpj(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="00.000.000/0000-00"
                  />

                {errors.cnpj && (
                    <p className="mt-1 text-xs text-red-500">Cnpj não informado.</p>
                )}

              </label>
          </div>




              {/*Responsável*/}
              <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Responsável:</span>
                  <input
                      name="responsavel"
                      type="text"
                      ref={register({required: true})}

                      value={responsavel} onChange={ (e) => setResponsavel(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Responsável:"
                  />

                {errors.responsavel && (
                    <p className="mt-1 text-xs text-red-500">Responsável não informado.</p>
                )}

              </label>
          </div>
      





        {/*Planos*/}
        <div className="w-5/12  relative h-20 lg:w-auto transform -translate-y-16">
          <span className="text-defaulttext-black font-bold ">Plano:</span>
            <label className="block pt-3">
              <select className="form-select block w-2/4 mt-1 text-sm">
                <option>Plano 1</option>
                <option>Plano 2</option>
                <option>Plano 3</option>
                <option>Plano 4</option>
              </select>
            </label>
        </div>
        </form>
      </div>

      
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
