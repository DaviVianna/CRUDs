import Centered from '../../layouts/centered'
import {withRedux} from '../../lib/redux'
//import Form from '../../components/forgot-password-1'




const ForgotPassword = () => {
  return (
    <>
    <div className="hidden lg:flex lg: flex-col w-full bg-blue-700 p-8 justify-between">
      <Centered />
    </div>
      
    </>
  
  )
}

export default withRedux(ForgotPassword)
