import React from 'react'
import './styles/NavLinks.css'

export default function NavLink({icon, title}) {
  return (
    <div id='container'>
        <img src={icon} alt={title}/>
        <span>{title}</span>
    </div>
  )
}
