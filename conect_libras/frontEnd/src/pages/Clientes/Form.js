import React, { useState }  from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';

    
const Form = (cnpj) => {

   
    const empresa = cnpj.cnpj;  

    const { register, handleSubmit, watch, errors } = useForm();
   
    const [nome, setNome]           = useState('');
    const [usuario, setUsuario]     = useState('');
    const [senha, setSenha]         = useState('');
    const [file, setFile]           = useState('');
    const [tipo, setTipo]           = useState('');
    


    async function onSubmit() {

        //Instânciando o FormData
        const formData = new FormData();
    
    
        //Nome dos Inputs
        formData.append('nome',     nome);
        formData.append('usuario',  usuario);
        formData.append('senha',    senha);
        formData.append('file',     file);
        formData.append('tipo',     tipo);
      
      
    
          const data = {
    
            method: 'POST',
            body: formData,
    
          }
      
          console.log(data);
          await fetch(`http://localhost:3000/clientes/cadastro/${empresa}`, data)
          .then(response => {
    
            SweetAlert({
                text: 'Cliente cadastrado corretamente.',
                icon: "success",
                timer: 1700,
            });

            setNome('');
            setUsuario('');
            setSenha('');
            setFile('');
            setTipo('');
    
    
          })
          .catch(err => {

            SweetAlert({
                text: 'Servidor indisponível.',
                icon: "error",
                timer: 1700,
              });


          })
          
        
      }
      
    


    return(


        <>
        <form 
        className="pl-8 grid grid-cols-2 md:grid-cols-2 pb-6 mt-8 bg-white  border-black border-opacity-25 border-2">

            {/*Nome*/}
            <div className=" mb-4 relative h-32 lg:w-auto pt-5">
                <label className="block">
                    <span className="text-default text-black font-bold">Nome:</span>
                    <input 
                        name="nome" 
                        type="text"
                        value={nome} 
                        ref={register({

                            required: true,

                        })}
                        onChange={ (e) => setNome(e.target.value)}
                        className="form-input mt-3 text-xs text-black block w-3/5 bg-white"
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
                        ref={register({

                            required: true,

                        })}
                        className="form-input mt-3 text-black text-xs block w-3/5 bg-white"
                        placeholder="Usuário:"
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

                                required: true,
                          
                            })}
                            className="form-input mt-3 text-black text-xs block w-2/5 bg-white"
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
                <div className="w-6  relative lg:w-auto transform -translate-y-16 mt-4">
                    <span className="text-default text-black font-bold">Tipo:</span> 
                        <select 
                            className="form-select block md:w-48 mt-3 text-sm" 
                            name="tipo"  
                            value={tipo} 
                            onChange={ (e) => setTipo(e.target.value)}
                        >

                            <option></option>
                            <option>Cliente</option>

                        </select>  
                </div>
              <div>

              </div>

        </form>


        <div className="transform -translate-y-16 w-40 ml-8">
            <button
                className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
                value="Cadastrar"
                onCLick={onSubmit}
              >
                  Cadastrar
            </button>
            
        </div>
 
        </>

    );
}


export default Form;