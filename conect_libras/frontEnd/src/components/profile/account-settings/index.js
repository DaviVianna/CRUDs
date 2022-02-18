import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import MdExclude from './Modals/MdExclude';

const AccountSettings = () => {


  const {register, handleSubmit, watch, errors} = useForm()



  const [admin, setAdmin]                   = useState('');
  const [usuario, setUsuario]               = useState('');
  const [senha, setSenha]                   = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [file, setFile]                     = useState('');
  const [status, setStatus]                 = useState('');


  const data = {

    "admin":            admin,
    "usuario":          usuario, 
    "senha":            senha, 
    "confirmar_senha": confirmarSenha,
    "file":            file, 
    "status":          status

  }



  const onSubmit = async () => {

    console.log(data);

  }



  return (

    <>

        <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="pl-8 grid grid-cols-2 md:grid-cols-2 bg-white border-black border-opacity-25 border-2">
         
         {/*Nome*/}
          <div className=" mb-4 w-5/12  relative h-32 lg:w-auto pt-5">
            <label className="block">
              <span className="text-default text-black font-bold">Nome:</span>
              <input
                name="admin"
                type="text"
                ref={register({required: true})}
                value={admin}
                onChange={ (e) => setAdmin(e.target.value)}
                className="form-input mt-3 text-xs block w-7/12 bg-white"
                placeholder="Nome:"
              />

              {errors.admin && (
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
                value={usuario}
                 onChange={ (e) => setUsuario(e.target.value)}
                className="form-input mt-3 text-xs block w-7/12 bg-white"
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
                      type="password"
                      ref={register({required: true})}
                      value={senha} 
                      onChange={ (e) => setSenha(e.target.value)}
                      className="form-input mt-3 text-xs block w-7/12 bg-white"
                      placeholder="********"
                  />
                    {errors.senha && (
                       <p className="mt-1 text-xs text-red-500">Senha não informada.</p>
                    )}
               

              </label>
          </div>



          {/*Confimar_senha*/}
          <div className="w-5/12  relative h-32 lg:w-auto transform -translate-y-8">
              <label className="block">
                <span className="text-default text-black font-bold">Confirmar senha:</span>
                  <input
                      name="confirmar_senha"
                      type="password"
                      ref={register({required: true})}
                      value={confirmarSenha} 
                      onChange={ (e) => setConfirmarSenha(e.target.value)}
                      className="form-input mt-3 text-xs block w-7/12 bg-white"
                      placeholder="*******"
                  />

                      {errors.senha && (
                        <p className="mt-1 text-xs text-red-500">Confirme a Senha.</p>
                      )}
              </label>
          </div>

          {/*Select*/}     
          <div className="w-6  relative h-32 lg:w-auto pt-2 transform -translate-y-16">
              <span className="text-default text-black font-bold">Status:</span> 
                <select 
                  className="form-select block md:w-48 mt-3 text-sm bg-white" 
                  name="status"  
                  value={status} 
                  onChange={ (e) => setStatus(e.target.value)}
                >

                  <option></option>
                  <option>Desativar</option>

              </select>
          </div>

          
          {/*Foto do Usuário*/}          
            <div className="w-5/12  relative h-32 lg:w-auto pt-2 transform -translate-y-16">
              <span className="text-default text-black font-bold">Foto:</span> 
                <input 
                  type="file"
                  name="file" 
                  onChange={ (e) => setFile(e.target.files[0]) }
                  className="transform translate-y-10 -translate-x-8"
               />
          </div>
        </form>
     
      
      <div className="transform -translate-y-16 w-40 ml-8">
        <button type="submit" 
          className="btn btn-default btn-block bg-blue-800 btn-rounded text-white text-bold uppercase hover:bg-blue-900 focus:outline-none"
          value="Cadastrar"
        >
          Alterar

        </button>
      </div>

      
    </>

  )
}

export default AccountSettings
