import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';
import { useRouter } from 'next/router'




const alterData = (user) => {

    const router = useRouter();

    const { register, handleSubmit, errors } = useForm();

    const userId  = user.user.user.id_administrador;
 
    const [admin, setAdmin]                     = useState('');
    const [usuario, setUsuario]                 = useState('');
    const [password, setPassword]               = useState('');
    const [file, setFile]                       = useState('');
    const [status, setStatus]                   = useState('');




    async function onSubmit() {

      router.push('/Administradores/Index');


      //Instânciando o FormData
      const formData = new FormData();
  
  
        //Nome dos Inputs
        formData.set('admin',    admin);
        formData.set('usuario',  usuario);
        formData.set('senha',    password);
        formData.set('file',     file);
        formData.set('status',  status);
      
    
        const data = {
  
          method: 'PUT',
          body: formData,
  
        }
    
  
        await fetch(`http://localhost:3000/administradores/alterar/${userId}`, data)
        .then(response => {
          
          if(response.status == 201){

  
            SweetAlert({
              text: 'Dado (S) alterado (S) corretamente.',
              icon: "success",
              timer: 1800,
              
            });

            setAdmin('');
            setUsuario('');
            setPassword('');
            setStatus('');
            setFile('');
            

          }else {

            SweetAlert({
              text: 'Erro ao atualizar. Tente novamente mais tarde.',
              icon: "error",
              timer: 1800,
              
            });

            router.push('/Administradores/Index');

          }

          router.push('/Administradores/Index');

          
        })
        .catch(error => {

          SweetAlert({
            text: 'Servidor indisponível.',
            icon: "error",
            timer: 1800,
            
          });

          router.push('/Administradores/Index');


        });


    }
  




    return(

        <>
          <form 
            className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white mt-8 border-black border-opacity-25 border-2 ml-4 mr-4 mb-4"
            onSubmit={handleSubmit(onSubmit)}
          >
              {/*Nome*/}
              <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-8">
                <label className="block">
                  <span className="text-default text-black font-bold">Administrador (A):</span>
                  <input
                    name="admin"
                    type="text"
                    value={admin} 
                    onChange={ (e) => setAdmin(e.target.value)}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Administrador (A):"
                  />
                </label>
              </div>

            {/*Usuário*/}
              <div className=" w-5/12  relative h-32 lg:w-auto pt-8">
                <label className="block">
                  <span className="text-default text-black font-bold">Usuário:</span>
                  <input
                    name="usuario"
                    type="text"
                    value={usuario}
                    onChange={ (e) => setUsuario(e.target.value)}
                    className="form-input mt-3 text-xs block w-10/12 bg-white"
                    placeholder="Usuário:"
                  />

                </label>
              </div>


              {/*Senha*/}
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8 mt-8">
                    <label className="block">
                      <span className="text-default text-black font-bold">Senha:</span>
                        <input
                            name="senha"
                            type="password"
                            value={password} 
                            onChange={ (e) => setPassword(e.target.value)}
                            ref={register({
                              maxLength: 10, 
                              max: 10
                            })}
                            className="form-input mt-3 text-xs block w-10/12 bg-white"
                            placeholder="Senha:"
                        />
                    </label>
                </div>
      

                {/*Foto do Usuário*/}          
                <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-10 mt-8">
                  <span className="text-default text-black font-bold">Foto:</span> 
                  <input 
                    type="file" 
                    name="file" 
                    onChange={ (e) => setFile(e.target.files[0]) }
                    className="transform translate-y-10 -translate-x-8"

                  />
                </div>

              {/*Select*/}     
              <div className="w-6  relative h-32 lg:w-auto transform -translate-y-16 mt-4">
                <span className="text-default text-black font-bold">Status:</span> 
                  <select 
                    className="form-select block md:w-48 mt-3 text-sm" 
                    name="status"  
                    value={status} 
                    onChange={ (e) => setStatus(e.target.value)}
                  >

                    <option></option>
                    <option>Ativar</option>
                    <option>Desativar</option>

                  </select>  
              </div>
              <div>

              </div>
              <div className="transform -translate-y-16 w-40">
                <input 
                  type="submit" 
                  className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
                  value="Atualizar" 
                />
              </div>
          </form>

        </>
    );

}



export default alterData;
