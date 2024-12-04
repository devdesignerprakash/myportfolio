import React from 'react'
import "./sidebar.scss"
import Links from './links/links'
import ToggleButton from './toggleButton/toggleButton'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="bg">
            <Links/>
        </div>
        <ToggleButton/>
    </div>
  )
}

export default Sidebar