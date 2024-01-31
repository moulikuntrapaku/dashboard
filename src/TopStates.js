import React from 'react'
import ProgressBar from './ProgressBar'
import './styles/TopStates.css'

export default function TopStates() {
  return (
    <div id='top-states'>
        <header>Top states</header>
        <section id='bars-holder'>
            <ProgressBar name="NY" width="120"/>
            <ProgressBar name="MA" width="80"/>
            <ProgressBar name="NH" width="70"/>
            <ProgressBar name="OR" width="50"/>
        </section>
    </div>
  )
}
