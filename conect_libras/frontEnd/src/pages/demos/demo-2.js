import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
//import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import { withRedux } from '../../lib/redux'


const Index = () => {

  const router = useRouter();

  useEffect(() => {

    router.push('/dashboards/dashboard-1')

  })



  
  return null
}
export default withRedux(Index)
