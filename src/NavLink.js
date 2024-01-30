import React from 'react'

export default function NavLink({icon, title}) {
  return (
    <div>
        <img src={icon} alt={title}/>
        <span>{title}</span>
    </div>
  )
}
