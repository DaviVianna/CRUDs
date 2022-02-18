import React from 'react'
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import SectionTitle from '../../components/section-title'

const Index = () => (
  <Layout>
    <SectionTitle title="Pages" subtitle="Empty page" />
    <p>This is an empty page</p>
  </Layout>
)
export default withRedux(Index)
