import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'
import {ToggleLeft, X} from 'react-feather'
import Link from 'next/link'
import Image from 'next/image';

const Logo = () => {
  const {name, leftSidebar, collapsed} = useSelector(
    state => ({
      name: state.name,
      collapsed: state.collapsed,
      leftSidebar: state.leftSidebar
    }),
    shallowEqual
  )
  const {showLogo} = {...leftSidebar}
  if (!showLogo) return null
  const dispatch = useDispatch()
  return (

    <div className="logo h-16 flex flex-row items-center uppercase font-bold text-lg tracking-wider justify-between px-4 ">
        <div className="flex flex-row items-center justify-start children-x-1 pl-5">
            <Image src="/conect.png" alt="logotipo" width={170} height={50} />
        </div> 
     
      <button
        onClick={ () =>
          dispatch({
            type: 'SET_CONFIG',
            config: {
              key: 'collapsed',
              value: !collapsed
            }
          })
        }
        className="btn btn-circle">
          <X size={24} color="orange" />  
      </button>

    </div>

  )
}

export default Logo;
