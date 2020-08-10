import React from 'react';
import TimelineInfo from './TimeLine_Info';
import school from '../icons/school.svg';
import work from '../icons/work.svg';
import '../styles/Timeline.css';

function Timeline(){
    return(
        <div id='timeline'>
            <div>
                {<TimelineInfo 
                    timeline={{
                        icon: school,
                        title1: 'B.S. I.T. Development',
                        subtitle1: 'Minor In Computer Science',
                        title2: 'B.A. Political Science',
                        subtitle2: 'Minor In History',
                        text1: 'The University of Southern Mississippi',
                        text2: 'The University of Southern Mississippi',
                        date1:'2017-2020',
                        date2: '2011-2016'
                    }}
                />}
            </div>
            <div>
            {<TimelineInfo 
                    timeline={{
                        icon: work,
                        title1: 'Application Manager',
                        title2: 'Best Buy',
                        text1: 'The University of Southern Mississippi',
                        text2: 'Hattiesburg, Mississippi',
                        date1:'2017-2020',
                        date2: '2011-2016'
                    }}
                />}
            </div>
        </div>
    )
}

export default Timeline;