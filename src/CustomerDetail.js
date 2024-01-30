import React from 'react'

export default function CustomerDetail({image,name,company,isSelected}) {
  return (
    <div>
        <img src={image} alt='profile-pic'/>
        <section>
            <span>{name}</span>
            <span>{company}</span>
        </section>
    </div>
  )
}
