import React from 'react';
import emailIcon from '../assets/icons/email.svg';
import contactIcon from '../assets/icons/contact.svg';
import sliderIcon from '../assets/icons/tune-24px.svg';
import gitIcon from '../assets/icons/git.svg';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav id='nav' className='sticky'>
           <a href='#header'>
           <img src={contactIcon} alt='contact icon'/>          
            </a>
           <a href='#about'>
                <img src={sliderIcon} alt='skills icon'/>
           </a>
           <a href='#projects'>
               <img src={gitIcon} alt='git icon'/>
           </a>
           <a href='#footer'>
            <img src={emailIcon} alt='email icon'/>
           </a>

        </nav>
    )
}

export default Navbar;