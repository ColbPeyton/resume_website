import React from 'react';
import Timeline from './Timeline';
import Skills from './Skills';
import '../styles/About.css';
function About(){
    return(
        <div id='about'>
            <div className='about-heading'>
                <h1>About</h1>
            </div>
            <div className='about-timeline'>
                <Timeline />
            </div>
            <div className='about-line'></div>
            <div className='about-skills'>
                <Skills />            
            </div>
            
        </div>
    )
}

export default About;