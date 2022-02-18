 import React from 'react'


const Widget = ({title, description, right = null, children}) => {
  if (right) {
    return (
      <div className="w-full shadow mb-4 widget">
        <div className="flex flex-row items-center justify-between mb-4">
         
          {right}
        </div>
        {children}
      </div>
    )
  }
  return (
    <div className="w-full shadow mb-4 widget">
      
      {children}
    </div>
  )
}

export default Widget

