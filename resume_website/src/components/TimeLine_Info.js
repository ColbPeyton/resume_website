import React from 'react';
import '../styles/Timeline_Info.css';

function TimelineInfo(props){
    return(
        <div className='timeline-info'>
            <div className='info-icon'>
                <img src={props.timeline.icon}/>
            </div>
            <div className='info-list'>
                <ul>
                    <li>
                        <h4>{props.timeline.title1}</h4>
                        {/* <h5>{props.timeline.subtitle1}</h5> */}
                        <p>{props.timeline.text1}</p>
                        <p>{props.timeline.date1}</p>
                    </li>
                        
                    <li>
                        <h4>{props.timeline.title2}</h4>
                        {/* <h5>{props.timeline.subtitle2}</h5> */}
                        <p>{props.timeline.text2}</p>
                        <p>{props.timeline.date2}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TimelineInfo;