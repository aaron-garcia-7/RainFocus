import React from 'react'
import rightArrow from '../images/rightArrow.svg';
import plusCircle from '../images/plusCircle.svg';
import computerImg from '../images/computer.svg';
import '../styles/EventBody.scss';

const EventBody = ({type, icon, setNav}) => {
  return (
    <main className='eventBody'>
        <header>
            <img src={icon} alt="" />
            <h3>{type}</h3>
        </header>
        <div className="step1">
            <h4 className='stepTitle'>Step 1: <span>Base settings.</span></h4>
            <div className="content block">
                <div className="card">
                    <h5>General</h5>
                    <p>Define Attendee types & attributes</p>
                </div>
                <div className="card">
                    <h5>Title</h5>
                    <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                </div>
                <div className="card">
                    <h5>Title</h5>
                    <p>Description that explains the value goes here. Description that explains the value goes here.</p>
                </div>
            </div>
        </div>
        <div className="step2">
            <h4 className='stepTitle'>Step 2: <span>Build registration workflows.</span></h4>
            <div className="content2">
                <div className='workflow block'>
                    <h5><span><img src={rightArrow} alt="" /></span>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div className='workflow block'>
                    <h5><span><img src={rightArrow} alt="" /></span>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div className='workflow block'>
                    <h5><span><img src={rightArrow} alt="" /></span>Attendee Registration</h5>
                    <p>Start by creating a general registration workflow</p>
                </div>
                <div className='workflow block'>
                    <img src={plusCircle} alt="" />
                    <p>Add Registration Workflow</p>
                </div>
            </div>
        </div>
        <div className="step3">
            <h4 className='stepTitle'>Step 3: <span>Design post-registration experiences.</span></h4>
            <div className='workflow block'>
                <h5><span><img src={computerImg} alt="" /></span>Attendee Portal</h5>
                <p>Manage the portal that attendees will see after they've registered for your event.</p>
            </div>
        </div>
        <div className="credits">
            <p>Developed by <a href="https://aarongarciacreative.com/" target="_blank" style={{color: 'black', fontWeight: '400', fontSize: '12px', textDecoration: 'underline'}} onFocus={() => setNav(false)}>Aaron Garcia</a> using CRA</p>
        </div>
    </main>
  )
}

export default EventBody