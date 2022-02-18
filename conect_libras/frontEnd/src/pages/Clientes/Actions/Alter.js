import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';


const AlterClient = (user) => {

    const id = user.user.user.id_cliente;
    



    const { register, handleSubmit, watch, errors } = useForm();

    const [nome, setNome]           = useState('');
    const [usuario, setUsuario]     = useState('');
    const [senha, setSenha]         = useState('');
    const [file, setFile]           = useState('');
    const [status, setStatus]       = useState('');
    


    async function onSubmit() {

       
        //Instânciando o FormData
        const formData = new FormData();
    
    
        //Nome dos Inputs
        formData.set('nome',     nome);
        formData.set('usuario',  usuario);
        formData.set('senha',    senha);
        formData.set('file',     file);
        formData.set('status',   status);
      
      
    
    
          const data = {
    
            method: 'PUT',
            body: formData,
    
          }
      
    
          await fetch(`http://localhost:3000/clientes/alterar/${id}`, data)
          .then(response => {

            SweetAlert({
              text: 'Dado (S) alterado (S) corretamente.',
              icon: "success",
              timer: 1800,
            });

            setNome('');
            setUsuario('');
            setSenha('');
            setFile('');
            setStatus('');
            
          })
          .catch(err => {

            SweetAlert({
              text: 'Servidor indisponível.',
              icon: "error",
              timer: 1800,
            });


          });
          
        
      }
      
    


    return(


        <>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data" 
          className="pl-8 grid grid-cols-2 md:grid-cols-2 pb-8 mt-8 shadow-lg bg-white">



            {/*Nome*/}
            <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Nome:</span>
                    <input 
                        name="nome" 
                        type="text"
                        value={nome} 
                        onChange={ (e) => setNome(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-coolGray-300"
                        placeholder="Nome:"
                    />
                </label>
            </div>


            {/*Usuario*/}
            <div className=" w-5/12  relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Usuário:</span>
                    <input 
                        name="usuario" 
                        type="text"
                        value={usuario}
                        onChange={ (e) => setUsuario(e.target.value)}
                        className="form-input mt-3 text-xs block w-3/5 bg-coolGray-300"
                        placeholder="seuemail@dominio.com:"
                    />
                </label>
            </div>


            {/*Senha*/}
            <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
                <label className="block">
                    <span className="text-default text-black font-bold">Senha:</span>
                        <input 
                            name="senha" 
                            type="password"
                            value={senha} 
                            onChange={ (e) => setSenha(e.target.value)} 
                            ref={register({

                              minLength: 7, 
                              min: 7, 

                            })}
                            className="form-input mt-3 text-xs block w-2/5 bg-coolGray-300"
                            placeholder="*******"

                        />
                </label>
            </div>



            
                {/*Foto do Usuário*/}          
                <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-10">
                  <span className="text-default text-black font-bold">Foto:</span> 
                  <input 
                    type="file"
                    name="file" 
                    onChange={ (e) => setFile(e.target.files[0]) }
                    className="transform translate-y-10 -translate-x-8"
                  />

                </div>


              {/*Select*/}     
              <div className="w-6  relative h-32 lg:w-auto pt-2 transform -translate-y-20">
                <span className="text-default text-black font-bold">Status:</span> 
                  <select 
                    className="form-select block md:w-48 mt-3 text-sm bg-coolGray-300" 
                    name="status"  
                    value={status} 
                    onChange={ (e) => setStatus(e.target.value)}
                  >

                    <option></option>
                    <option>Ativar</option>
                    <option>Desativar</option>

                  </select>  
              </div>


        </form>


        <div className="transform -translate-y-24 w-40 ml-8">
            <input
                type="submit" 
                className="btn btn-default btn-block bg-blue-700 btn-rounded text-white text-bold uppercase hover:bg-blue-800 focus:outline-none"
                value="Alterar"
            
              />
            
        </div>
 
        </>

    );
}


export default AlterClient;