import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/reset-password-1'

const ResetPassword = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your new password to reset your account
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(ResetPassword)
