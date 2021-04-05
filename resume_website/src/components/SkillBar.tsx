import React from 'react';
import '../styles/SkillBar.scss';

interface SkillBarProps{
    title: string;
    color: string;
}

export const SkillBar = (props: SkillBarProps):JSX.Element => {
    return(
        <p>{props.title}</p>
    )
}