import React from 'react';
import profile from '../assets/images/placeholder_profile.png';
import '../styles/Footer.css';

function Footer(){
    return(
        <footer id='footer'>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-img'>
                        <img src={profile} alt='me' />
                    </div>
                    <div className='footer-tagline'>
                        <h3>Let's Work Together.</h3>
                    </div>
                    <div className='footer-info'>
                        <p>Contact me for work oppotunities. Add more text here.</p>
                    </div>
                </div>
                <div className='footer-bot'>
                    <div className='footer-logo'>
                        <h3>Colby Peyton</h3>
                    </div>
                    <div className='footer-links'>
                        <a href='https://github.com/ColbPeyton' target='_blank' rel="noopener noreferrer">GitHub</a>
                        <a href='https://www.linkedin.com/in/colbypeyton/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:email@email.com?subject=Let's Work Together">EMAIL@EMAIL.com</a> 
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;