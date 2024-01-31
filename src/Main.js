import React from 'react'
import Reports from './Reports'
import Results from './Results'
import Footer from './Footer'
import './styles/Main.css'

export default function Main() {
  return (
    <div id='main'>
        <Reports id="reports"/>
        <Results id="results"/>
        <Footer id="footer"/>
    </div>
  )
}
