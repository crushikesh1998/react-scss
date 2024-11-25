import React from 'react'
import './wrapper.scss'
const Wrapper = ({className,children}) => {
  return (
    <div className= {`wrapper ${className || " "}`}> 
    {children}
    </div>
  )
}

export default Wrapper
