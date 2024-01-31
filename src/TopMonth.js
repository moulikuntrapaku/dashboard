import React from 'react'
import './styles/TopMonth.css'

export default function TopMonth() {
  return (
    <div id='top-month'>
        <span className='top-header'>Top month</span>
        <section>
            <p id='month'>November</p>
            <p id='year-in-month'>2019</p>
        </section>
    </div>
  )
}
