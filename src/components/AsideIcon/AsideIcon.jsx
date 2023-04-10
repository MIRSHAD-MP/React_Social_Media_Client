import React from 'react'
import "./AsideIcon.css"

function AsideIcon(props) {
  return (
    <div className='aside-icon'>
      <props.icon className="icon" />
      <p>{props.info}</p>
    </div>
  )
}

export default AsideIcon