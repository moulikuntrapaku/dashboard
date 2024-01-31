import React from 'react'
import ellipse from './images/Ellipse.png'
import ellipseFill from './images/ellipse-fill.png'
import rightArrow from './images/right-arrow.png'
import './styles/Goal.css'


export default function Goal() {
  return (
    <div id='goal'>
        <section>
            <header>Quarter goal</header>
            <section>
                {/*<img className='image1' src={ellipseFill} alt='ellipse-fill'/>
                <img className='image2' src={ellipse} alt='ellipse'/>*/}
                <span>84%</span>
            </section>
        </section>
        <section>
            <span>All goals</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
