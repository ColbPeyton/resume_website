import React from 'react';

function TimelineInfo(props){
    return(
        <div className='timeline-info'>
            <div>
                <img src={props.timeline.icon}/>
            </div>
            <div>
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

export default TimelineInfo;