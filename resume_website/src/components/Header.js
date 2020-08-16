import React from 'react';
import headerImg from '../assets/images/header_img.jpg'
import downArrow from '../assets/icons/keyboard_arrow_right-24px.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import '../styles/Header.css';

function Header(){
    return(
        <header id='header'>
            <div className='header-container'>
                <div className='header-image'>
                    <img src={headerImg} alt='Working on a project'/>
                </div>
                <div className='header-content'>
                    <div>
                        <h1>Hi.</h1>
                        <h1>I'm Colby.</h1>
                    </div>
                    <div className='header-info'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam porta, sapien ut ultrices dictum, enim justo iaculis 
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