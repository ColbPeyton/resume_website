import React from 'react';
import arrow from '../assets/icons/keyboard_arrow_right-24px.svg';
import gitIcon from '../assets/icons/git.svg';
import earthIcon from '../assets/icons/earth.svg';
import '../styles/Project_Display.scss';




function ProjectDisplay(props){


    function updateParentState(direction){
        let temp = props.pos;
        temp += direction;
        props.updatePosition(temp, props.project.imageGallery)
    }

    function renderCurrentImage(){
        return(
            <img src={props.project.imageGallery[props.pos].default} alt={props.project.title}/>
        )
    }

    function isHosted(){
        return `${props.project.urlFull.length < 1 ? 'disabled' : ''}`
    }
    return(
        <div id='project-display'>
            <div className='display-container'>
                {renderCurrentImage()}

            </div>
            <div className='display-controls'>
                <button onClick={() => updateParentState(-1)}><img className='left-arrow' src={arrow} alt='left arrow'></img></button>
                <a href={props.project.url} rel="noopener noreferrer" target='_blank'><img className='git-icon' src={gitIcon} alt='git icon'></img></a>
                <a href={props.project.urlFull} className={isHosted()} rel="noopener noreferrer" target='_blank'><img className={'earth-icon'} src={earthIcon} alt='earth icon'></img></a>
                <button onClick={() => updateParentState(1)}><img className='right-arrow' src={arrow} alt='right arrow'></img></button>
            </div>
        </div>
    )
}

export default ProjectDisplay;