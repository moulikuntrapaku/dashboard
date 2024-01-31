import React from 'react'
import Chats from './Chats'
import TopStates from './TopStates'
import NewDeals from './NewDeals'
import './styles/Footer.css'

export default function Footer() {
  return (
    <div id='footer'>
        <Chats id="chats"/>
        <TopStates id="top-states"/>
        <NewDeals id="new-deals"/>
    </div>
  )
}
