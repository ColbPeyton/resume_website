import React from 'react';
import emailIcon from '../assets/icons/email.svg';
import contactIcon from '../assets/icons/contact.svg';
import sliderIcon from '../assets/icons/tune-24px.svg';
import gitIcon from '../assets/icons/git.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import '../styles/Navbar.scss';

export const Navbar = ():JSX.Element => {
    return(
        <nav id='nav' className='sticky'>
           <AnchorLink href='#header'>
           <img src={contactIcon} alt='contact icon'/>          
            </AnchorLink>
           <AnchorLink href='#about'>
                <img src={sliderIcon} alt='skills icon'/>
           </AnchorLink>
           <AnchorLink href='#projects'>
               <img src={gitIcon} alt='git icon'/>
           </AnchorLink>
           <AnchorLink href='#footer'>
            <img src={emailIcon} alt='email icon'/>
           </AnchorLink>

        </nav>
    )
}

