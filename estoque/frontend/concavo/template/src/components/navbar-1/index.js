import Link from 'next/link'
import Head from 'next/head';
import { LogOut } from 'react-feather'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useRouter } from 'next/router'
import { Settings, Menu } from 'react-feather'


const Navbar = () => {


  const router = useRouter();

  function logout() {

    const getToken = localStorage.getItem('login-token');
 
    if(getToken) {

      //Remove token 
      localStorage.removeItem('login-token');

      //Redireciona o Usuário para a tela de Login
      router.push('/pages/login');

    }else {

      null

    }
    
    
  }



  const {toggleRightSidebar, collapsed} = useSelector(
    state => ({
      toggleRightSidebar: state.toggleRightSidebar,
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  const dispatch = useDispatch()


  return (

    <>
    <Head>
     <script 
     
     dangerouslySetInnerHTML={{__html: `
      if(!window.localStorage || !window.localStorage.getItem('login-token')) {

        window.location.href="/"

      }`
    
    }}
     
     />
    </Head>

    <div className="navbar navbar-1 bg-gray-800">
        <div className="navbar-inner w-full flex items-center justify-start bg-gray-800">
          <button
            onClick={() =>
              dispatch({
                type: 'SET_CONFIG',
                config: {
                  key: 'collapsed',
                  value: !collapsed
                }
              })
            }
            className="mx-4">
            <Menu size={20} className="text-white"/>
          </button>
      
          <span className="ltr:ml-auto rtl:mr-auto"></span>
          <Link href="/pages/login">
            <button 
            type="button" 
            className="btn btn-default hidden lg:flex text-white"
            onClick={logout}
            >Logout
            </button>
          </Link>
        
        </div>
      </div>
    </>
  )

}

export default Navbar
