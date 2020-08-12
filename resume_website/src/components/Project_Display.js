import React, { useState } from 'react';
import arrow from '../icons/keyboard_arrow_right-24px.svg';
import gitIcon from '../icons/git.svg';
import '../styles/Project_Display.css';




function ProjectDisplay(props){

    const [index, setIndex] = useState(0);


    function renderCurrentImage(){
        if(index > props.project.images.length) setIndex(0);
        if(index < 0)setIndex(props.project.images.length - 1);

        return(
            <img src={props.project.images[index]}/>
        )
    }
    return(
        <div id='project-display'>
            <div className='display-container'>
                {renderCurrentImage()}
            </div>
            <div className='display-controls'>
                <button onClick={() => setIndex(index + 1)}><img className='left-arrow' src={arrow}></img></button>
                <a href={props.project.url} target='_blank'><img className='git-icon' src={gitIcon}></img></a>
                <button onClick={() => setIndex(index - 1)}><img className='right-arrow' src={arrow}></img></button>
            </div>
        </div>
    )
}

export default ProjectDisplay;