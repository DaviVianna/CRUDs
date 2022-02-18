import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';


const CreateAccount =   () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const onSubmit = data => {
    console.log(data)
  }


  const [name, setName] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  //const[depedencie, setDepedencie] = useState('');
  //const [photo, setPhoto] = useState();



  function registerUser(event) {


    event.preventDefault();


    const data = {

      "nome": name, 
      "usuario": user, 
      "senha": password
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
         
         {/*Nome*/}
          <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Nome:</span>
              <input
                name="nome"
                type="text"
                ref={register({required: true})}

                value={name} onChange={ (e) => setName(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Nome:"
              />

              {errors.nome && (
                  <p className="mt-1 text-xs text-red-500">Nome não informado.</p>
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
                ref={register({required: true})}

                value={user} onChange={ (e) => setUser(e.target.value)}
              
                className="form-input mt-3 text-xs block w-10/12 bg-white"
                placeholder="Usuário:"
              />

              {errors.usuario && (
                  <p className="mt-1 text-xs text-red-500">Usuário não informado.</p>
              )}

            </label>
          </div>


        {/*Senha*/}
          <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Senha:</span>
                  <input
                      name="senha"
                      type="text"
                      ref={register({required: true})}

                      value={password} onChange={ (e) => setPassword(e.target.value)}
                    
                      className="form-input mt-3 text-xs block w-10/12 bg-white"
                      placeholder="Senha:"
                  />

                {errors.senha && (
                    <p className="mt-1 text-xs text-red-500">Senha não informada.</p>
                )}

              </label>
          </div>
      

          {/*Foto do Usuário*/}          
        <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-6">
          <span className="text-default text-black font-bold">Foto:</span> 
        </div>


        {/*Select das Empresas cadastradas no Sistema*/}
        <div className="w-5/12  relative h-20 lg:w-auto transform -translate-y-16">
          <span className="text-defaulttext-black font-bold ">Dependente:</span>
            <label className="block pt-3">
              <select className="form-select block w-2/4 mt-1 text-sm">
                <option>Empresa 1</option>
                <option>Empresa 2</option>
                <option>Empresa 3</option>
                <option>Empresa 4</option>
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
