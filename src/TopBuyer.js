import React from 'react'
import maggie from './images/maggie.png'

export default function TopBuyer() {
  return (
    <div>
        <header>Top buyer</header>
        <section>
            <img src={maggie} alt='maggie'/>
            <span>Maggie Johnson</span>
            <span>Oasis Organic Inc.</span>
        </section>
    </div>
  )
}
