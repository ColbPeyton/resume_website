import React from 'react';
import {TimelineInfo} from './TimeLine_Info';
import school from '../assets/icons/school.svg';
import work from '../assets/icons/work.svg';
import '../styles/Timeline.css';

export const Timeline = ():JSX.Element => {
    return(
        <div id='timeline'>
            <div className='timeline-education'>
                <TimelineInfo 
                    timeline={{
                        icon: school,
                        title1: 'B.S. I.T. Development',
                        title2: 'B.A. Political Science',
                        text1: 'The University of Southern Mississippi',
                        text2: 'The University of Southern Mississippi',
                        date1:'2017-2020',
                        date2: '2011-2016'
                    }}
                />
            </div>
            <div>
                <TimelineInfo 
                        timeline={{
                            icon: work,
                            title1: 'Full Stack Engineer',
                            title2: 'Application Administrator',
                            text1: 'SchoolStatus',
                            text2: 'The University of Southern Mississippi',
                            date1:'2021-PRESENT',
                            date2: '2018-2020'
                        }}
                    />
            </div>
        </div>
    )
}