import React from 'react';
import placeholder from '../images/placeholder.jpg'
import downArrow from '../icons/keyboard_arrow_right-24px.svg';
import '../styles/Header.css';

function Header(){
    return(
        <header id='header'>
            <div className='header-container'>
                <div className='header-image'>
                    <img src={placeholder}/>
                </div>
                <div className='header-content'>
                    <div>
                        <h1>Hi.</h1>
                        <h1>I'm Colby.</h1>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Etiam porta, sapien ut ultrices dictum, enim justo iaculis 
                        </p>
                    </div>
                    <div>
                        <img src={downArrow} alt='down arrow'/>
                    </div>
                </div>              
            </div>
        </header>
    )
}

export default Header;