import React from 'react'
import profile1 from './images/chats-1.png'
import profile2 from './images/chats-2.png'
import profile3 from './images/chats-3.png'
import profile4 from './images/chats-4.png'

export default function Chats() {
  return (
    <div>
        <section>
            <header>Chats</header>
            <span>2 unread messages</span>
        </section>
        <section>
            <img src={profile1} alt='profile-1'/>
            <img src={profile2} alt='profile-2'/>
            <img src={profile3} alt='profile-3'/>
            <img src={profile4} alt='profile-4'/>
        </section>
    </div>
  )
}
