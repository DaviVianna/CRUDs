import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/forgot-password-1'

const ForgotPassword = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your email address to recover your password
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(ForgotPassword)
