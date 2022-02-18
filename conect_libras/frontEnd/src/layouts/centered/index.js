import {useSelector, shallowEqual} from 'react-redux'
import Form from '../../components/forgot-password-1/index';
import Link from 'next/link'
import Image from 'next/image';

const Centered = ({children}) => {
  const {direction, name} = useSelector(
    state => ({
      direction: state.direction,
      name: state.name
    }),
    shallowEqual
  )

 
  return (

    <>  
        <div className="max-w-2xl mx-auto mt-2">
          <div className="max-h-full bg-blue-700 flex flex-col justify-center mt-2 mb-32">
            <div className=" right-0.5  mx-auto pt-5 pb-4"> 
            
              <Image src="/conect.png" alt="logotipo" width={140} height={45} />
            
            </div>
              <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
                <div className="text-center font-medium text-md">
                  <h6>Informe seu E-mail para recuperar sua Senha.</h6>
                </div>
                  <Form/>                 
              </div> 
           
              <span className=" mt-5 w-32">
                  <Link href="/pages/login">
                      <a className="link">
                          <p className="text-white font-bold hover:text-orange-700 focus:outline-none active:outline-none transition duration-500 ease-in-out">
                            VOLTAR
                        </p>
                      </a>
                   </Link>
               </span>
           
          </div>
        </div>


     
    </>

  )

}

export default Centered
