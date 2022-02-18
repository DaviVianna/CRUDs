import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SweetAlert from 'sweetalert';




const ChangeAccount = (userId ) => {

  
  let id = [];
  id = userId.userId;
  
  
  const { register, handleSubmit, errors } = useForm(); 

  const [operator, setOperator]         = useState('');
  const [user, setUser]                 = useState('');
  const [password, setPassword]         = useState(''); 
  const [file, setFile]                 = useState('');
  const [status, setStatus]             = useState('');


  
  async function onSubmit() {


      //Instânciando o FormData
      const formData = new FormData();


      //Nome dos Inputs
      formData.set('operador', operator);
      formData.set('usuario',  user);
      formData.set('senha',    password);
      formData.set('file',     file);
      formData.set('status',   status);
  
  
          const data = {
  
            method: 'PUT',
            body: formData,
  
          }
      
  
        await fetch(`http://localhost:3000/operadores/alterar/${id}`, data)
        .then(response => {
          
          if(response.status == 201){

            SweetAlert({
              text: 'Dado (S) atualizado (S) corretamente.',
              icon: "success",
              timer: 1800,
            });
  
            setOperator('');
            setUser('');
            setPassword('');
            setFile('');   
            setStatus('');  
              
    
          }else {
  
            SweetAlert({
              text: 'Erro ao Atualizar os Dados. Tente novamente mais tarde.',
              icon: "error",
              timer: 1800,
            });
  
          }
  
      
        
  
        })
        .catch( error => {
   
          console.log(error);
  
          
            SweetAlert({
              text: 'Servidor Indisponível.',
              icon: "error",
              timer: 1800,
            });
          
  
        });
      
  }


  return (
    <>
    

    <form
        onSubmit={handleSubmit(onSubmit)}
        className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white pb-8 mt-5 border-black border-opacity-25 border-2">


        {/*Nome*/}
        <div className="w-5/12  relative h-32 lg:w-auto pt-5">
          <label className="block">
            <span className="text-default text-black font-bold">Operador (A):</span>
            <input
              name="operador"
              type="text"
              value={operator}
              onChange={ (e) => setOperator(e.target.value) }
              ref={register({
                max: 20, 
                maxLength: 20, 
              })}
              className="form-input mt-3 text-xs block w-10/12 bg-white"
              placeholder="Operador (A):"
            />
          </label>

         

        </div>


         {/*Usuário*/}
         <div className="w-5/12  relative h-32 lg:w-auto pt-5">
          <label className="block">
            <span className="text-default text-black font-bold">Usuário:</span>
            <input
              name="usuario"
              type="text"
              value={user}
              onChange={ (e) => setUser(e.target.value) }
              className="form-input mt-5 text-xs block w-10/12 bg-white"
              placeholder="Usuário:"
            />
          </label>

        
        </div>

        
         {/*Senha*/}
         <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-18">
          <label className="block">
            <span className="text-default text-black font-bold">Senha:</span>
            <input
              name="senha"
              type="password"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
              ref={register({
                maxLength: 10, 
                max: 10
              })}
              className="form-input mt-5 text-xs block w-10/12 bg-white"
              placeholder="Senha:"
            />
          </label>
        </div>

         
        {/*Foto do Usuário*/}          
          <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-1">
              <span className="text-default text-black font-bold">Foto:</span> 
              <input 
                type="file" 
                name="file"
                onChange={ (e) => setFile(e.target.files[0]) }
                className="transform translate-y-10 -translate-x-8"

              />      
          </div>

          {/*Select*/}     
          <div className="w-6  relative h-32 lg:w-auto pt-2 transform -translate-y-6">
            <span className="text-default text-black font-bold">Status:</span> 
              <select 
                className="form-select block md:w-48 mt-3 text-sm" 
                name="status"  
                value={status} 
                onChange={ (e) => setStatus(e.target.value)}>

                <option></option>
                <option>Ativar</option>
                <option>Desativar</option>

              </select>  
          </div>

          <div>

          </div>


        {/**Botão Cadastrar */}
        <div className="w-40 mt-2 transform -translate-y-6">
          <input
            type="submit"
            className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
            value="Alterar"
          />
        </div>
      </form> 







    </>

  )

}


export default ChangeAccount;
