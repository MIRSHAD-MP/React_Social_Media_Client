import React from 'react'
import "./SettingsIcon.css"

function SettingsIcon(props) {
  return (
    <div className='settings-icon'>
      <props.icon className="icon" />
      <p>{props.info}</p>
    </div>
  )
}

export default SettingsIcon