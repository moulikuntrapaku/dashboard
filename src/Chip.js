import React from 'react'
import chip from './images/chip.png'
import './styles/Chip.css'

export default function Chip({label}) {
  return (
    <div id='chip'>
        <img src={chip} alt='chip'/>
        <span>{label}</span>
    </div>
  )
}
