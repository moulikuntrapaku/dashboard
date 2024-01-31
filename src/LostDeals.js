import React from 'react'
import rightArrow from './images/right-arrow.png'
import './styles/LostDeals.css'

export default function LostDeals() {
  return (
    <div id='lost-deals'>
        <section>
            <header>Lost Deals</header>
            <div id='lost-deal-percent'>
                <span id='percent'>4%</span>
                <span id='text'>You closed 96 out of 100 deals</span>
            </div>
        </section>
        <section>
            <span id='extra-info'>All deals</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
