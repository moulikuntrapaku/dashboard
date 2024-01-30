import React from 'react'
import downIcon from './images/down.png'
import chris from './images/chris.png'
import maggie from './images/maggie.png'
import harry from './images/harry.png'
import jenna from './images/jenna.png'
import rightArrow from './images/right-arrow.png'
import CustomerDetail from './CustomerDetail'

export default function Customers() {
    
  return (
    <div>
        <section>
            <header>Customers</header>
            <section>
                <span>Sort by Newest</span>
                <img src={downIcon} alt='down-icon'/>
            </section>
        </section>
        <section>
            <CustomerDetail image={chris} name="Chris Friedkly" company="Supermarket Villanova" isSelected={false}/>
            <CustomerDetail image={maggie} name="Maggie Johnson" company="Oasis Organic Inc." isSelected={true}/>
            <CustomerDetail image={harry} name="Gael Harry" company="New York Finest Fruits" isSelected={false}/>
            <CustomerDetail image={jenna} name="Jenna Sullivan" company="Walmart" isSelected={false}/>
        </section>
        <section>
            <span>All customers</span>
            <img src={rightArrow} alt='right-arrow'/>
        </section>
    </div>
  )
}
