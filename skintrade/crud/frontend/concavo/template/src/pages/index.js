import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { withRedux } from '../lib/redux'
import Head from 'next/head'


const Index = () => {

  const router = useRouter();

  <Head>
    <script 
  
      dangerouslySetInnerHTML={{__html: `
      if(!window.localStorage || !window.localStorage.getItem('login-token')) {

        window.location.href="/"

      }`
    
      }}
  
    />
 </Head>

  useEffect(() => {

    router.push('/pages/login');

  })

  return null

}

export default withRedux(Index)
