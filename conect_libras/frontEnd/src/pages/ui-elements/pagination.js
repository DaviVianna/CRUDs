import React from 'react'
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import SectionTitle from '../../components/section-title'
import Widget from '../../components/widget'
import {Pagination, PaginationWithText} from '../../components/pagination'

const Index = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Pagination" />
    <Widget
      title="Numbers only"
      description={
        <span>
          Use the <code>&lt;Pagination /&gt;</code> component for pagination with numbers only
        </span>
      }>
      <Pagination color="red" items={Array.from(Array(10).keys())} active={5} />
    </Widget>
    <Widget
      title="Pagination with text"
      description={
        <span>
          Use the <code>&lt;PaginationWithText /&gt;</code> component for pagination with numbers and text labels
        </span>
      }>
      <PaginationWithText color="red" items={Array.from(Array(10).keys())} active={5} />
    </Widget>
  </Layout>
)
export default withRedux(Index)
