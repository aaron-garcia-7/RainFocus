import React from 'react'
import '../styles/Burger.scss';

const Burger = ({nav, setNav}) => {
  return (
    <div className='burgerDiv'>
        <button className={nav ? 'burger burgerActive' : 'burger'} onClick={() => setNav(prev => !prev)}>
            <div className='line'/>
            <div className='line'/>
            <div className='line'/>
        </button>
    </div>
  )
}

export default Burger