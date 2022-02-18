import React, {useState} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Layout from '../../layouts/empty'
import Link from 'next/link'
import {withRedux} from '../../lib/redux'
import Form from '../../components/login-2'
import Logo from '../../components/Logo_logIn/Logo'
//import Image from 'next/image';
/*<Image src="/banner.jpg" alt="logotipo" width={450} height={300} /> */



const Login = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  )
  
  //Ano 
  let today = new Date();
  const year = today.getFullYear();


  return (
    <Layout>
      <div className="w-full flex flex-row h-screen overflow-hidden">
        <div className="hidden lg:flex lg: flex-col w-1/2 bg-blue-700 text-white p-8 pt-32  items-center justify-between text-center">

          <div className="flex flex-col z-10 text-center">
            <p className="text-3xl font-poppins mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-orange-400">
                <h2>Bem Vindo ao Conect Libras! </h2>
            </p>

            <p className="text-sm mt-16 text-center  font-hairline font-poppins">
              <h6>Plataforma de atendimento e Interpretação da Libras à distância, facilitando a comunicação entre surdos e ouvintes. </h6>
            </p>
          </div>
          <div className="flex flex-row items-center justify-between w-full text-xs z-10 font-bold">
            <div className="text-white">&copy; Conect Libras {year} - Todos os direitos reservados.</div>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 bg-white  text-bold text-default p-8 lg:p-24 
        flex flex-col items-center justify-center ">
            
            <p className="text-3xl font-bold font-poppins mb-16 ">
                <Logo />
            </p>
           
          <Form />
        </div>
      </div>
    </Layout>
  )
}



const Icon = ({type, color}) => {
  if (type === 'warning') return <Warning color={color} />
  if (type === 'info') return <Info color={color} />
  return null
}

  
  

export default withRedux(Login)
