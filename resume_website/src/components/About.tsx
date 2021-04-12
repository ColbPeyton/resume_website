import React from 'react';
import {Timeline} from './Timeline';
import {Skills} from './Skills';
import '../styles/About.scss';

export const About = ():JSX.Element => {
    return(
        <div id='about'>
            <div className='about-container'>
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
        </div>
    )
}