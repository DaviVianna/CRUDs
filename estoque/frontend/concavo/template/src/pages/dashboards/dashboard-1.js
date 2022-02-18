import React, {useState, useEffect} from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import Cadastro from '../../pages/Cadastro/Index';


const Dashboard1 = () => {

  return (
    <Layout>
      <Cadastro/>
    </Layout>
  )
}
export default withRedux(Dashboard1)
