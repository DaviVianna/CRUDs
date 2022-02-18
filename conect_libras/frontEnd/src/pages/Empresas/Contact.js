import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


const createContact = () => {

  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)

  }



  const [cnpj, setCnpj] = useState('');
  const [telefone, setTelefone] = useState('');
  const [celular, setCelular] = useState('');
  const [email, setEmail] = useState('');
  const [responsavel, setResponsavel] = useState('');





  function registerUser(event) {


    event.preventDefault();


    const data = {

        "cnpj":         cnpj, 
        "telefone":     telefone, 
        "celular":      celular, 
        "email":        email, 
        "responsavel":  responsavel

 
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
        <form onSubmit={handleSubmit(onSubmit)} className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-gray-300">
         
         {/*CNPJ*/}
          <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
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
                  <p className="mt-1 text-xs text-red-500">CNPJ não informado.</p>
              )}
            </label>
          </div>




         {/*Telefone*/}
          <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Telefone:</span>
              <input
                name="telefone"
                type="text"
                ref={register({required: true})}

                value={telefone} onChange={ (e) => setTelefone(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Telefone:"
              />

              {errors.telefone && (
                  <p className="mt-1 text-xs text-red-500">Telefone não informada.</p>
              )}

            </label>
          </div>


        {/*Celular*/}
          <div className="w-5/12  relative lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Celular:</span>
                  <input
                      name="celular"
                      type="text"
                      ref={register({required: true})}

                      value={celular} onChange={ (e) => setCelular(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Celular:"
                  />

                {errors.celular && (
                    <p className="mt-1 text-xs text-red-500">Celular não informado.</p>
                )}

              </label>
          </div>




            {/*Email*/}
            <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">E-mail:</span>
                  <input
                      name="email"
                      type="text"
                      ref={register({required: true})}

                      value={email} onChange={ (e) => setEmail(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="E-mail:"
                  />

                {errors.email && (
                    <p className="mt-1 text-xs text-red-500">Email não informado.</p>
                )}

              </label>
            </div>




             {/*Responsavel*/}
             <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-16">
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
                    <p className="mt-1 text-xs text-red-500">Responsavel não informado.</p>
                )}

              </label>
            </div>
      

        </form>
      </div>

      
      <div className="transform -translate-y-20 w-40 ml-8">
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

export default createContact
