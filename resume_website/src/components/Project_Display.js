import React, { useState } from 'react';
import arrow from '../assets/icons/keyboard_arrow_right-24px.svg';
import gitIcon from '../assets/icons/git.svg';
import '../styles/Project_Display.css';




function ProjectDisplay(props){

    // const [index, setIndex] = useState(0);

    function updateParentState(direction){
        let temp = props.pos;
        temp += direction;
        props.updatePosition(temp, props.project.imageGallery)
    }

    function renderCurrentImage(){
        // if(props.startAtFirst) setIndex(0); 
        // if(index > props.project.imageGallery.length - 1) setIndex(0);
        // if(index < 0)setIndex((props.project.imageGallery.length - 1));
        return(
            <img src={props.project.imageGallery[props.pos]} alt={props.project.title}/>
        )
    }
    return(
        <div id='project-display'>
            <div className='display-container'>
                {renderCurrentImage()}
            </div>
            <div className='display-controls'>
                <button onClick={() => updateParentState(-1)}><img className='left-arrow' src={arrow} alt='left arrow'></img></button>
                <a href={props.project.url} rel="noopener noreferrer" target='_blank'><img className='git-icon' src={gitIcon} alt='git icon'></img></a>
                <button onClick={() => updateParentState(1)}><img className='right-arrow' src={arrow} alt='right arrow'></img></button>
            </div>
        </div>
    )
}

export default ProjectDisplay;