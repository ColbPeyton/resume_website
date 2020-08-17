import React from 'react';
import headerImg from '../assets/images/header_img_large.png'
import downArrow from '../assets/icons/keyboard_arrow_right-24px.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../styles/Header.css';

function Header(){
    return(
        <header id='header'>
            <div className='header-container'>
                <div className='header-image'>
                    <img src={headerImg} alt='me working on a project'/>
                </div>
                <div className='header-content'>
                    <div>
                        <h1>Hi.</h1>
                        <h1>I'm Colby.</h1>
                    </div>
                    <div className='header-info'>
                        <p>
                        I'm a Full Stack Web Developer with a passion for problem solving. 
                        Scroll to learn more and see what I'm working on.
                        </p>
                    </div>
                    <div>
                        <AnchorLink href='#about'><img src={downArrow} alt='down arrow'/></AnchorLink>
                    </div>
                </div>              
            </div>
        </header>
    )
}

export default Header;