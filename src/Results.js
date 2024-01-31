import React from 'react'
import Customers from './Customers'
import Growth from './Growth'
import TopYear from './TopYear'
import TopMonth from './TopMonth'
import TopBuyer from './TopBuyer'
import './styles/Results.css'

export default function Results() {
  return (
    <div id='results'>
        <Customers id="customers"/>
        <section id='growth-tops'>
            <Growth id="growth"/>
            <section id='tops'>
                <TopMonth/>
                <TopYear/>
                <TopBuyer/>
            </section>
        </section>
    </div>
  )
}
