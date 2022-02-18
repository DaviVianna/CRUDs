import React from 'react'
import Layout from '../../layouts'
import {withRedux} from '../../lib/redux'
import SectionTitle from '../../components/section-title'
import {
  DefaultTabs,
  UnderlinedTabs,
  IconTabs,
  Pills,
  VerticalTabs
} from '../../components/tabs'
import Widget from '../../components/widget'

const Tab0 = () => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Molestie ac feugiat sed
    lectus vestibulum mattis ullamcorper velit sed. Condimentum vitae sapien
    pellentesque habitant morbi. Nec ullamcorper sit amet risus nullam eget
    felis. Dignissim sodales ut eu sem integer vitae justo eget. In pellentesque
    massa placerat duis ultricies. Orci porta non pulvinar neque laoreet.
    Potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed.
    Consectetur purus ut faucibus pulvinar elementum. Nulla facilisi etiam
    dignissim diam quis enim. Lorem ipsum dolor sit amet consectetur adipiscing.
    Feugiat scelerisque varius morbi enim nunc. Egestas congue quisque egestas
    diam in.
  </div>
)

const Tab1 = () => (
  <div>
    Id cursus metus aliquam eleifend mi in. Etiam sit amet nisl purus in. At
    quis risus sed vulputate odio ut enim blandit. Aliquet enim tortor at auctor
    urna nunc id cursus metus. Massa enim nec dui nunc. Penatibus et magnis dis
    parturient montes. Nisl nisi scelerisque eu ultrices vitae auctor eu augue.
    Enim ut tellus elementum sagittis vitae. Quisque sagittis purus sit amet.
    Augue lacus viverra vitae congue eu. Sagittis eu volutpat odio facilisis.
    Vitae justo eget magna fermentum iaculis. Elit scelerisque mauris
    pellentesque pulvinar pellentesque habitant. Venenatis cras sed felis eget
    velit. Diam phasellus vestibulum lorem sed. Elit ullamcorper dignissim cras
    tincidunt. Mi sit amet mauris commodo quis imperdiet massa. Habitant morbi
    tristique senectus et netus.
  </div>
)

const Tab2 = () => (
  <div>
    Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus.
    Sed nisi lacus sed viverra. Varius sit amet mattis vulputate enim nulla
    aliquet porttitor. Adipiscing elit pellentesque habitant morbi tristique
    senectus. Laoreet suspendisse interdum consectetur libero id. Tincidunt nunc
    pulvinar sapien et ligula. Egestas integer eget aliquet nibh praesent.
    Tortor id aliquet lectus proin nibh nisl condimentum id. Porta lorem mollis
    aliquam ut porttitor leo a diam sollicitudin. Ante metus dictum at tempor
    commodo. In nibh mauris cursus mattis. Aenean vel elit scelerisque mauris
    pellentesque pulvinar pellentesque habitant morbi. Tortor at auctor urna
    nunc id cursus metus.
  </div>
)



const tabs = [
  {index: 0, title: 'Profile', active: true, content: <Tab0 />},
  {index: 1, title: 'Settingsaa', active: false, content: <Tab1 />},
  {index: 2, title: 'Options', active: false, content: <Tab2 />}
]


const Index = () => (
  <Layout>
    <SectionTitle title="UI Elements" subtitle="Tabs" />

    <Widget
      title="Underlined tabs"
      description={
        <span>
          Use the <code>&lt;UnderlinedTabs /&gt;</code> component for underlined
          tabs
        </span>
      }>
      <div className="flex flex-wrap">
        <div className="w-full">
          <UnderlinedTabs tabs={tabs} />
        </div>
      </div>
    </Widget>

  </Layout>
)
export default withRedux(Index)
