import React from 'react';
import emailIcon from '../icons/email.svg';
import contactIcon from '../icons/contact.svg';
import sliderIcon from '../icons/tune-24px.svg';
import gitIcon from '../icons/git.svg';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav id='nav' className='sticky'>
           <a href='#header'>
           <img src={contactIcon} />          
            </a>
           <a href='#about'>
                <img src={sliderIcon} />
           </a>
           <a href='#projects'>
               <img src={gitIcon} />
           </a>
           <a href='#footer'>
            <img src={emailIcon} />
           </a>

        </nav>
    )
}

export default Navbar;