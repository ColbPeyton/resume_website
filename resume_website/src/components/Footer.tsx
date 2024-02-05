import React from 'react';
import profile from '../assets/images/profile.jpg';
import '../styles/Footer.css';

export const Footer = ():JSX.Element =>{
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
                        <p>Thanks for checking out my site. Check out my GitHub for other projects. New projects are developed daily.</p>
                    </div>
                </div>
                <div className='footer-bot'>
                    <div className='footer-logo'>
                        <h3>Colby Peyton</h3>
                    </div>
                    <div className='footer-links'>
                        <a href='https://github.com/ColbPeyton' target='_blank' rel="noopener noreferrer">GitHub</a>
                        <a href='https://www.linkedin.com/in/colbypeyton/' target='_blank' rel="noopener noreferrer">LinkedIn</a>
                        <a href="mailto:cpeyton.dev@gmail.com?subject=Let's Work Together">cpeyton.dev@gmail.com</a> 
                    </div>
                </div>
            </div>
        </footer>
    )
}
