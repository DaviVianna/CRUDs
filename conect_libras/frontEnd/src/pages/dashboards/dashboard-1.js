import React, {useState, useEffect} from 'react'
import {withRedux} from '../../lib/redux'
import Layout from '../../layouts'
import ProgressBarWidget from '../../components/dashboard-1/progress-bar-widget'
import DoughnutChart1 from '../../components/dashboard-1/doughnut-chart-1'
import Table1 from '../../components/dashboard-1/table-1'
import IconWidget from '../../components/dashboard-1/icon-widget'
import BarChart1 from '../../components/dashboard-1/bar-chart-1'
import LineChart1 from '../../components/dashboard-1/line-chart-1'
import TextWidget from '../../components/dashboard-1/text-widget'
import Table2 from '../../components/dashboard-1/table-2'
import {NotificationManager} from 'react-notifications'


const Dashboard1 = () => {


  const [message, didShow] = useState(false)
  useEffect(() => {
    if(message) return
    NotificationManager.info('You have 5 new messages', null, 1500)
    didShow(true)
  }, [message])
  return (
    <Layout>
      <div className="w-full lg:px-2">
        <div className="flex flex-row flex-wrap w-full mb-4">
          <ProgressBarWidget />
        </div>

        <div className="flex flex-wrap py-2">
          <div className="w-full lg:w-1/2 mb-4">
            <DoughnutChart1 title="Online store" subtitle="Weekly sales" />
          </div>
          <div className="w-full lg:w-1/2 mb-4">
            <Table1 />
          </div>
        </div>

        <div className="flex flex-row flex-wrap mb-4">
          <IconWidget />
        </div>

        <div className="w-full flex flex-row flex-wrap mb-4">
          <div className="w-full lg:w-1/2 mb-4">
            <BarChart1 title="Online store" subtitle="All time performance" />
          </div>
          <div className="w-full lg:w-1/2 mb-4">
            <LineChart1 title="Analytics" subtitle="Sales and conversions" />
          </div>
        </div>

        <div className="flex flex-wrap w-full mb-8">
          <TextWidget />
        </div>

        <div className="flex flex-wrap w-full mb-4">
          <Table2 title="Employees" subtitle="Online status" />
        </div>
      </div>
    </Layout>
  )
}
export default withRedux(Dashboard1)
