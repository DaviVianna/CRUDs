import React, {useState} from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Layout from '../../layouts/empty'
import Link from 'next/link'
import {withRedux} from '../../lib/redux'
import Form from '../../components/login-2'
import {ToggleLeft} from 'react-feather'
import Head from 'next/head'


const Login = () => {
  const {name} = useSelector(
    state => ({
      name: state.name
    }),
    shallowEqual
  ) 
  return (

    <>

    <Head>
      <title>Login</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Layout>
      <div className="w-full flex flex-row h-screen overflow-hidden">
        <div className="hidden lg:flex lg:flex-col w-1/2 bg-gray-800 text-white p-8 items-start justify-between relative">
          <img
            alt="bg"
            className="img1 absolute inset-0 z-0 object-contain h-auto w-full"
            src="/bg-login-1.jpg"
          />
          <style jsx>{`
            .img1 {
              opacity: 0.05;
            }
          `}</style>
    
            {/**
             *

              <div className="flex flex-col z-10">
              <p className="text-3xl font-bold font-poppins mb-4">
                Welcome to {name}!
              </p>
              <p className="text-sm font-thin">
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
                vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
                amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
                placerat eleifend leo.
              </p>
            </div>
            <div className="flex flex-row items-center justify-between w-full text-xs z-10">
              <div className="text-white">&copy; {name} 2020</div>
              <div className="flex flex-row ml-auto">
                <div className="px-1">
                  <Link href="/pages/privacy-policy">
                    <a>Privacy policy</a>
                  </Link>
                </div>
                <div className="px-1">
                  <Link href="/pages/terms-of-service">
                    <a>Terms of service</a>
                  </Link>
                </div>
                <div className="px-1">
                  <Link href="/pages/contact-us">
                    <a>Contact us</a>
                  </Link>
                </div>
              </div>
            </div>

            */}

        </div>
        <div className="w-full lg:w-1/2 bg-white text-default p-8 lg:p-24 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold font-poppins mb-4">
            Login
          </p>
          <Form />
        </div>
      </div>
    </Layout>

    </>
  )
}



export default withRedux(Login)
