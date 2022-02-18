import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import Head from 'next/head';
import axios from 'axios';
import SweetAlert from 'sweetalert';





const Login1 = () => {

  const {register, handleSubmit, watch, errors} = useForm();
  const router = useRouter();


  const onSubmit = data => {


      axios.post('http://localhost:3000/login', data)
      .then(response => {


        //Adc o token no localStorage
        localStorage.setItem('login-token', JSON.stringify({

          login: true, 
          token: response.data

        }));

        //Redirecionando o Usuário para a home page
        router.push('/dashboards/dashboard-1');
        

      })
      .catch(err => {

        SweetAlert({
          text: 'Usuário ou Senha incorreta!',
          icon: "error",
          timer: 1800,
        });


      });


    }




  const [checked, setChecked] = useState(true)

  return (
    <>  



      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col text-sm mb-4 w-full">
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Email</span>
            <input
              name="usuario"
              type="email"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Digite seu E-mail"
            />
          </label>
          {errors.usuario && (
            <p className="mt-1 text-xs text-red-500">Email não informado.</p>
          )}
        </div>
        <div className="w-full mb-4">
          <label className="block">
            <span className="text-default">Password</span>
            <input
              name="senha"
              type="password"
              ref={register({required: true})}
              className="form-input mt-1 text-xs block w-full bg-white"
              placeholder="Digite sua senha"
            />
          </label>
          {errors.senha && (
            <p className="mt-1 text-xs text-red-500">Senha não informada.</p>
          )}
        </div>

        <div className="w-full mt-4">
          <input
            type="submit"
            className="px-4 py-3 uppercase font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-800 focus:outline-none active:outline-none"
            value="Login"
          />
        </div>
      </form>
    </>
  )
}

export default Login1
