import React from 'react'
import upIcon from './images/up-icon.png'
import rightArrow from './images/right-arrow.png'
import './styles/Revenue.css'

export default function Revenue() {
  return (
    <div id='revenue'>
        <section>
            <header>Revenues</header>
            <div>
                <section id='percent-holder'>
                    <span id='percent'>15%</span>
                    <img src={upIcon} alt='up-icon'/>
                </section>
                <span id='text'>Increase compared to last week</span>
            </div>
        </section>
        <section>
            <span id='extra-info'>Revenues report</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
