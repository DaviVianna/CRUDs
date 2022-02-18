import React from 'react'
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import SectionTitle from '../../components/section-title'
import Modal from '../../components/modals'
import Widget from '../../components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Notifications" subtitle="Modals" />
    <Widget
      title="Default modals"
      description={
        <span>
          Use the <code>&lt;Modal /&gt;</code> component to show modal windows
        </span>
      }>
      <Modal />
    </Widget>
  </Layout>
)
export default withRedux(Index)
