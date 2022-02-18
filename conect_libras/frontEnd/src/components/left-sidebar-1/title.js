import React from 'react'
import {useSelector, useDispatch, shallowEqual} from 'react-redux'

const Title = ({children}) => {
  const {leftSidebar} = useSelector(
    state => ({
      leftSidebar: state.leftSidebar
    }),
    shallowEqual
  )
  const {showSectionTitle} = {...leftSidebar}
  if (!showSectionTitle) return null
  return (
    <div className="uppercase font-bold text-xs tracking-wider  p-5 text-black">
      {children}
    </div>
  )
}

export default Title
