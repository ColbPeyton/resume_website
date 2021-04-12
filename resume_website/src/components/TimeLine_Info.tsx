import React from 'react';
import '../styles/Timeline_Info.css';

interface TimelineInfoProps{
    timeline:{
        icon: string;
        title1: string;
        title2: string;
        text1: string;
        text2: string;
        date1: string;
        date2: string;
    }
}

export function TimelineInfo(props:TimelineInfoProps){
    return(
        <div className='timeline-info'>
            <div className='info-icon'>
                <img src={props.timeline.icon} alt={props.timeline.icon}/>
            </div>
            <div className='info-list'>
                <ul>
                    <li>
                        <h4>{props.timeline.title1}</h4>
                        <p>{props.timeline.text1}</p>
                        <p>{props.timeline.date1}</p>
                    </li>
                        
                    <li>
                        <h4>{props.timeline.title2}</h4>
                        <p>{props.timeline.text2}</p>
                        <p>{props.timeline.date2}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

