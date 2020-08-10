import React from 'react';
import '../styles/Progress_Bar.css';

function ProgressBar(props){

    return(
        <div className='progress-bar'>
            <div style={
                    {
                        backgroundColor: `${props.barDetail.color}`,
                        height: `${props.barDetail.height}0%`
                    }}>

            </div>
                <p>{props.barDetail.title}</p>
        </div>

    )
}

export default ProgressBar;