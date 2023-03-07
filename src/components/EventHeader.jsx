import React from 'react'
import '../styles/EventHeader.scss';

const EventHeader = ({title, date, location, img, infoTitle, infoBody, setNav}) => {
  return (
    <header className='eventHeader'>
      <div className="eventDetails">
        <div className="content">
            <img src={img} alt="RainFocus Summit" className='eventImg'/>
            <div className='contentHeader'>
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{location}</p>
            </div>
        </div>
        <button className='editBtn' onFocus={() => setNav(false)}>Edit event</button>
      </div>
        <h2 className='infoTitle'>{infoTitle}</h2>
        <p className='infoBody'>{infoBody}</p>
    </header>
  )
}

export default EventHeader