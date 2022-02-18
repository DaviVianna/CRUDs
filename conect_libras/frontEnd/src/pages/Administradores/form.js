import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';
import { useRouter } from 'next/router'



const CreateAccount =   () => {

  const router = useRouter();

  const {register, handleSubmit, watch, errors} = useForm();


  const [admin, setAdmin]               = useState('');
  const [user, setUser]                 = useState('');
  const [password, setPassword]         = useState('');
  const [file, setFile]                 = useState('');
  const [tipo, setTipo]                 =  useState('');






  async function onSubmit() {


    //Instânciando o FormData
    const formData = new FormData();
  


    //Nome dos Inputs
    formData.append('admin',    admin);
    formData.append('usuario',  user);
    formData.append('senha',    password);
    formData.append('file',     file);
    formData.append('tipo',     tipo);
  
  

      const data = {

        method: 'POST',
        body: formData,

      }
  

      await fetch('http://localhost:3000/administradores/cadastro', data)
      .then(response => {

        SweetAlert({
          text: 'Administrador (A) cadastrado (A) corretamente.',
          icon: "success",
          timer: 1800,
        });

        router.push('/Administradores/Index');
        
        setAdmin('');
        setUser('');
        setPassword('');
        setFile('');
        setTipo('');

       


      })
      .catch(err => {

        SweetAlert({
          text: 'Servidor indisponível.',
          icon: "error",
          timer: 1800,
          
        });


      })
  }
  
 



  return (
    <>
    

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white mt-6 border-black border-opacity-25 border-2" 
        
          >
          
         {/*Nome*/}
          <div className=" mb-4 w-5/12  relative lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Nome:</span>
              <input
                name="admin"
                type="text"
                value={admin} 
                onChange={ (e) => setAdmin(e.target.value)}
                ref={register({
                  required: true,
                  min: 4,
                
                })}
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Administrador (A):"
              />
                {errors.admin && (
                    <h4 className="mt-2 mb-2 text-sm text-red-500 font-bold">Operador (A) não informado (A).</h4>
                )}
             
            </label>
          </div>




         {/*Usuário*/}
          <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Usuário:</span>
              <input
                name="usuario"
                type="text"
                value={user} 
                onChange={ (e) => setUser(e.target.value)}
                ref={register({required: true})}
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Usuário:"
              />
              {errors.usuario && (
                <h4 className="mt-2 text-sm text-red-500 font-bold">Usuário não informado.</h4>
              )}

            </label>
          </div>


          {/*Senha*/}
            <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-4">
                <label className="block">
                  <span className="text-default text-black font-bold">Senha:</span>
                    <input
                        name="senha"
                        type="password"
                        value={password} 
                        onChange={ (e) => setPassword(e.target.value)}
                        ref={register({
                          required: true,
                          minLength: 7, 
                          min: 7, 
                          maxLength: 10, 
                          max: 10
                        
                        })}
                      
                        className="form-input mt-3 text-xs block w-10/12 bg-white"
                        placeholder="Senha:"
                    />
                    {errors.senha && (
                      <h4 className="mt-2 text-sm text-red-500 font-bold">Senha não informada.</h4>
                    )}
                   
                </label>
            </div>
      

          {/*Foto do Usuário*/}          
          <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-6">
            <span className="text-default text-black font-bold">Foto:</span> 
            <input 
              type="file"
              name="file"
              onChange={ (e) => setFile(e.target.files[0]) }
              className="transform translate-y-10 -translate-x-8"

            />

          </div>

           {/*Select*/}     
           <div className="w-6  relative lg:w-auto transform -translate-y-16 mt-4 mb-12">
                <span className="text-default text-black font-bold">Tipo:</span> 
                  <select 
                    className="form-select block md:w-48 mt-3 text-sm" 
                    name="tipo"  
                    value={tipo} 
                    onChange={ (e) => setTipo(e.target.value)}
                  >

                    <option></option>
                    <option>Administrador</option>

                  </select>  
              </div>
              <div>

              </div>


          <div className="transform -translate-x-8 -translate-y-16 w-40 ml-8">
            <input 
              type="submit" 
              className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
              value="Cadastrar"
            />
          </div>
        </form>
      
    </>
  )
}

export default CreateAccount
