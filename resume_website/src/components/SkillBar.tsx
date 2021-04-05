import React from 'react';
import '../styles/SkillBar.scss';

interface SkillBarProps{
    title: string;
    color: string;
}

export const SkillBar = (props: SkillBarProps):JSX.Element => {
    return(
        <div className='container-bar' style={{backgroundColor: props.color}}>
            <p id='bar-title'>{props.title}</p>
        </div>
    )
}