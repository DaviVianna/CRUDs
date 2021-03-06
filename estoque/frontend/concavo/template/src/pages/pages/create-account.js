import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
import Form from '../../components/create-account-1'

const CreateAccount = () => {
  return (
    <Centered>
      <p className="text-secondary mb-4">
        Please enter your name, email address and password to create an account
      </p>
      <Form />
    </Centered>
  )
}

export default withRedux(CreateAccount)
