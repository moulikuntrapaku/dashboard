import React from 'react'
import './styles/ProgressBar.css'

export default function ProgressBar({name,width}) {
  return (
    <div id='bar' style={{width:`${width*2}px`}}>
        <span>{name}</span>
        <span>{width}K</span>
    </div>
  )
}
