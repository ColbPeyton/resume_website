import React from 'react';
import '../styles/Progress_Bar.css';

function ProgressBar(props){

    return(
        <div className='progress-bar-container'>
            <div className='progress-bar'>
                <div  style={
                        {
                            backgroundColor: `${props.barDetail.color}`,
                            height: `${props.barDetail.height}0%`
                        }}>

                </div>
            </div>
            <div className='progress-title'>
                <p>{props.barDetail.title}</p>
            </div>
        </div>

    )
}

export default ProgressBar;