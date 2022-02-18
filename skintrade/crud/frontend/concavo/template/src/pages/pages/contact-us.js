import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/contact-us-1'

const ContactUs = () => {
  return (
    <Centered>
        <p className="text-secondary mb-4">
          Feel free to contact us. Send us a message and we'll get back to you as soon as possible
        </p>
        <Form />
    </Centered>
  )
}

export default withRedux(ContactUs)
