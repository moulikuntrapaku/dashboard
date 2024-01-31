import React from 'react'
import './styles/CustomerDetail.css'

export default function CustomerDetail({image,name,company,isSelected}) {
  return (
    <div id='customer-detail'>
        <img src={image} alt='profile-pic'/>
        <section id='detail'>
            <span className='name-customer'>{name}</span>
            <span className='company-customer'>{company}</span>
        </section>
    </div>
  )
}
