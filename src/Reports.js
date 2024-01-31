import React from 'react'
import Revenue from './Revenue'
import LostDeals from './LostDeals'
import Goal from './Goal'
import './styles/Reports.css'

export default function Reports() {
  return (
    <div id='reports'>
        <Revenue id="revenue"/>
        <LostDeals id="lost-deals"/>
        <Goal id="goal"/>
    </div>
  )
}
