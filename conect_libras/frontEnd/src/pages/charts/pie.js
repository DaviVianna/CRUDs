import React from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import SectionTitle from '../../components/section-title'
import Doughnut from '../../components/charts/doughnut'
import Pie from '../../components/charts/pie'
import {getColor, toRGB, darken} from '../../functions/colors'
import Circle from '../../components/circle'
import Widget from '../../components/widget'

const Index = () => (
  <Layout>
    <SectionTitle title="Charts" subtitle="Pie and doughnut charts" />
    <Widget
      title="Doughnut chart"
      description={
        <span>
          Use the <code>&lt;Doughnut /&gt;</code> component for doughnut charts
        </span>
      }>
      <Doughnut height={250} />
    </Widget>
    <Widget
      title="Pie chart"
      description={
        <span>
          Use the <code>&lt;Pie /&gt;</code> component for pie charts
        </span>
      }>
      <Pie height={250} />
    </Widget>
    <Widget
      title="Circular progress bars"
      description={
        <span>
          Use the <code>&lt;Circle /&gt;</code> component for circular progress
          bars
        </span>
      }>
      <div className="flex flex-row flex-wrap w-full">
        <div className="p-2">
          <Circle progress={35} size="sm" color="indigo" />
        </div>
        <div className="p-2">
          <Circle progress={35} color="indigo" />
        </div>
        <div className="p-2">
          <Circle progress={35} color="indigo" size="lg" />
        </div>
      </div>
    </Widget>
  </Layout>
)
export default withRedux(Index)
