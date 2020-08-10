import React from 'react';
import emailIcon from '../icons/email.svg';
import contactIcon from '../icons/contact.svg';
import personIcon from '../icons/sliders.svg';
import gitIcon from '../icons/git.svg';
import '../styles/Navbar.css';

function Navbar(){
    return(
        <nav id='nav' className='sticky'>
           <a href='#header'>
                <img src={personIcon} />
           </a>
           <a href='#about'>
                <img src={emailIcon} />
           </a>
           <a href='#projects'>
               <img src={gitIcon} />
           </a>
           <a href='#footer'>
                <img src={contactIcon} />
           </a>

        </nav>
    )
}

export default Navbar;