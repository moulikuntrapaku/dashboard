import React from 'react'
import upIcon from './images/up-icon.png'
import rightArrow from './images/right-arrow.png'

export default function Revenue() {
  return (
    <div>
        <section>
            <header>Revenues</header>
            <div>
                <section>
                    <span>15%</span>
                    <img src={upIcon} alt='up-icon'/>
                </section>
                <span>Increase compared to last week</span>
            </div>
        </section>
        <section>
            <span>Revenues report</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
