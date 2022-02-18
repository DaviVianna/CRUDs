import React from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import SectionTitle from '../../components/section-title'
import Radar from '../../components/charts/radar'
import Polar from '../../components/charts/polar'
import Bubble from '../../components/charts/bubble'
import Scatter from '../../components/charts/scatter'
import Widget from '../../components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Charts" subtitle="Other charts" />
    <Widget
      title="Scatter charts"
      description={
        <span>
          Use the <code>&lt;Scatter /&gt;</code> component for scatter charts
        </span>
      }>
      <Scatter />
    </Widget>
    <Widget
      title="Bubble charts"
      description={
        <span>
          Use the <code>&lt;Bubble /&gt;</code> component for bubble charts
        </span>
      }>
      <Bubble />
    </Widget>
    <Widget
      title="Radar charts"
      description={
        <span>
          Use the <code>&lt;Radar /&gt;</code> component for radar charts
        </span>
      }>
      <Radar height={300} />
    </Widget>
    <Widget
      title="Polar charts"
      description={
        <span>
          Use the <code>&lt;DefaultBadge /&gt;</code> component for polar charts
        </span>
      }>
      <Polar />
    </Widget>
  </Layout>
)
export default withRedux(Index)
