import React from 'react'
import rightArrow from './images/right-arrow.png'

export default function () {
  return (
    <div>
        <section>
            <header>Lost Deals</header>
            <div>
                <span>4%</span>
                <span>You closed 96 out of 100 deals</span>
            </div>
        </section>
        <section>
            <span>All deals</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
