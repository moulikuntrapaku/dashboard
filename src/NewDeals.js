import React from 'react'
import Chip from './Chip'
import './styles/NewDeals.css'

export default function NewDeals() {
  return (
    <div id='new-deals'>
        <header>New deals</header>
        <section id='deals'>
            <Chip label="Fruit2Go"/>
            <Chip label="Marshall's MKT"/>
            <Chip label="CCNT"/>
            <Chip label="Joana Mini-market"/>
            <Chip label="Little Brazil Vegan"/>
            <Chip label="Target"/>
            <Chip label="Organic Place"/>
            <Chip label="Morello's"/>
        </section>
    </div>
  )
}
