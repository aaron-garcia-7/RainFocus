import React, { useState } from 'react'
import logo from '../images/rainfocuslogo.svg';
import summit from '../images/summit.png';
import account from '../images/account.svg';
import searchIcon from '../images/searchIcon.svg';
import '../styles/Nav.scss'

const Nav = ({nav, setNav}) => {
  const [buttonStates, setButtonStates] = useState({
      guide: false,
      attendees: true,
      content: false,
      exhibitors: false,
  });
    
  const toggleButtons = (val) => setButtonStates({ ...buttonStates, [val]: !buttonStates[val] });
  

  return (
    <nav className={nav ? 'nav navActive' : 'nav'}>
        <div className="navLeft">
            <div className="channels">
                <a href="https://www.rainfocus.com/" target="_blank" onFocus={() => setNav(true)}>
                    <img src={logo} alt="" />
                </a>
                <img src={summit} alt="" />
            </div>
            <div className="accountInfo">
                <img src={account} alt="" />
            </div>
        </div>
        <div className="navRight">
            <header>
                <h2 className='title'>RainFocus Summit</h2>
                <p className='details'>Lehi, UT • December 15th</p>
            </header>
            <div className="lists">
                <div className='search'>
                    <img src={searchIcon} alt="" className='searchIcon'/>
                    <input type="text" placeholder='Search' />
                </div>
                <button className={buttonStates.guide ? 'navButtonActive' : 'navButton'} onClick={() => toggleButtons('guide')}>
                    <span className='circle'/>
                    Guide
                </button>
                {buttonStates.guide && <ul className='links'>
                    <li><a href="#">Guide</a></li>
                    <li><a href="#">Reg codes</a></li>
                </ul>}
                <button className={buttonStates.attendees ? 'navButtonActive' : 'navButton'} onClick={() => toggleButtons('attendees')}><span className='circle'/>Attendees</button>
                {buttonStates.attendees && <ul className='links'>
                    <li><a href="#">Attendees</a></li>
                    <li><a href="#">Attendee types</a></li>
                    <li><a href="#">Packages</a></li>
                    <li><a href="#">Reg codes</a></li>
                    <li><a href="#">Discounts</a></li>
                </ul>}
                <button className={buttonStates.content ? 'navButtonActive' : 'navButton'} onClick={() => toggleButtons('content')}><span className='circle'/>Content</button>
                {buttonStates.content && <ul className='links'>
                    <li><a href="#">Content</a></li>
                    <li><a href="#">Discounts</a></li>
                </ul>}
                <button className={buttonStates.exhibitors ? 'navButtonActive' : 'navButton'} onClick={() => toggleButtons('exhibitors')} onFocus={() => setNav(true)}><span className='circle'/>Exhibitors</button>
                {buttonStates.exhibitors && <ul className='links'>
                    <li><a href="#">Exhibitors</a></li>
                    <li><a href="#">Reg codes</a></li>
                    <li><a href="#">Discounts</a></li>
                </ul>}
            </div>
        </div>
    </nav>
  )
}

export default Nav