import React from 'react'
import logomark from './images/Logomark.png'
import searchIcon from './images/search.png'
import conversationIcon from './images/conversation.png'
import customerIcon from './images/customers.png'
import dashboardIcon from './images/dashboard.png'
import dealsIcon from './images/deals.png'
import exportsIcon from './images/exports.png'
import reportsIcon from './images/reports.png'
import geographyIcon from './images/geography.png'
import settingIcon from './images/settings.png'
import logoutIcon from './images/logout.png'
import NavLink from './NavLink'
import profilePic from './images/profile-pic.png'

export default function OrangeFarm() {
  return (
    <div>
        <main>
            <header>
                <img src={logomark} alt='logomark'/>
                <span>OrangeFarm</span>
            </header>
            <section>
                <img src={searchIcon} alt='search-ion'/>
                <input type='text' placeholder='Search'/>
            </section>
            <section>
                <NavLink icon={dashboardIcon} title="Dashboard"/>
                <NavLink icon={customerIcon} title="Customers"/>
                <NavLink icon={reportsIcon} title="All reports"/>
                <NavLink icon={geographyIcon} title="Geography"/>
                <NavLink icon={conversationIcon} title="Conversations"/>
                <NavLink icon={dealsIcon} title="Deals"/>
                <NavLink icon={exportsIcon} title="Export"/>
            </section>
        </main>
        <div>
            <section>
                <img src={profilePic} alt='profile-pic'/>
                <section>
                    <span>Gustavo Xavier</span>
                    <span>Admin</span>
                </section>
            </section>
            <NavLink icon={settingIcon} title="Settings"/>
            <NavLink icon={logoutIcon} title="Log out"/>
        </div>
    </div>
  )
}