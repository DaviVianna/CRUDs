import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { withRedux } from '../lib/redux'



const Index = () => {

  const router = useRouter();

  useEffect(() => {

    router.push('/pages/login');


  })


  return null



}

export default withRedux(Index)
