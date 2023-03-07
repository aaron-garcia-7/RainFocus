import React from 'react'
import EventHeader from './EventHeader'
import summitImg from '../images/summit.png'
import userIcon from '../images/userIcon.svg'
import '../styles/Event.scss';
import EventBody from './EventBody';

const Event = ({nav, setNav}) => {
  return (
    <div className='event' onClick={() => {nav ? setNav(false) : null}}>
      <EventHeader 
        title={'RainFocus Summit'}
        date={'December 15th'}
        location={'Lehi, Utah'}
        img={summitImg}
        infoTitle={"Event setup guide"} 
        infoBody={'See the available lilst of modules below. We suggest that you start with the attendee module.'}
        setNav={setNav}
      />
      <EventBody type={'Attendee'} icon={userIcon} setNav={setNav}/>
    </div>
  )
}

export default Event