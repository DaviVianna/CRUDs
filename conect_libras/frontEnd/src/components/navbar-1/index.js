import Link from 'next/link'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {Settings, Menu} from 'react-feather'
import { useContext } from 'react'
import { AuthContext } from '../../Contexts/Auth'


const Navbar = () => {

  const { signOut } = useContext(AuthContext);



  const {toggleRightSidebar, collapsed} = useSelector(
    state => ({
      toggleRightSidebar: state.toggleRightSidebar,
      collapsed: state.collapsed
    }),
    shallowEqual
  )
  const dispatch = useDispatch()
  return (
    <div className="navbar navbar-1">
      <div className="navbar-inner w-full flex items-center justify-start bg-blue-800">
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
            <div className="text-white">
              <Menu size={20} />
            </div>
          
        </button>
      
        <span className="ltr:ml-auto rtl:mr-auto"></span>
        <div className="text-white">
            <button className="btn btn-default hidden lg:flex" onClick={signOut}>
              Sair
            </button>
        </div>


      </div>
    </div>
  )
}

export default Navbar
