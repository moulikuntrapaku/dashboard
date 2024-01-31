import React from 'react'
import maggie from './images/maggie.png'
import './styles/TopBuyer.css'

export default function TopBuyer() {
  return (
    <div id='top-buyer'>
        <span className='top-header'>Top buyer</span>
        <section>
            <img src={maggie} alt='maggie'/>
            <span id='name-buyer'>Maggie Johnson</span>
            <span id='com-buyer'>Oasis Organic Inc.</span>
        </section>
    </div>
  )
}
