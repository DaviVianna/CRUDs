import React from 'react'
import Toggle from './toggle'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import * as Icon from 'react-feather'
import Link from 'next/link';



const Sidebar = () => {
  const {leftSidebar, toggleRightSidebar} = useSelector(
    state => ({
      leftSidebar: state.leftSidebar,
      toggleRightSidebar: state.toggleRightSidebar
    }),
    shallowEqual
  )


  

  return (
    <div
      className={`right-sidebar right-sidebar-1 ${
        toggleRightSidebar ? 'open' : ''
      }`}>
      <div>
        <div>
          <div className="flex flex-col">
            <div
              className={`px-4 h-16 flex flex-row items-center justify-between bg-orange-500 text-white`}>
              <div className={`uppercase font-bold tracking-wider`}>
                Configurações
              </div>
              <Toggle />
            </div>
          </div>

          <div className="flex flex-col p-4">
            {/*section*/}
            <div className="mb-4">
              <div
                className={`uppercase text-sm font-bold font-poppins tracking-wider`}>
                Perfil
              </div>
              <div className="flex flex-row children-x-2">
                    <div className="pt-3">
                      <Icon.User size={20} />
                    </div>
                    <button className="pt-3">
                        <Link href="/extras/user-profile"><a>Meu perfil</a></Link>  
                    </button>
              </div>
            </div>
            {/*end section*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
