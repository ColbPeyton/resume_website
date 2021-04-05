import React from 'react';
import ProgressBar from './Progress_Bar';
import {SkillBar} from './SkillBar.tsx';
import '../styles/Skills.css'

function Skills(){
    return(
        <div id='skills'>
            <div className='skills-title'> 
                <h1>Skills</h1>
            </div>
            <div className='skills-icon'>
                <h1 >{`{`}</h1>
            </div>
            <div className='skills-bar'>
                <SkillBar title={'JavaScript'} color={'#03BFF8'}/>
                <SkillBar title={'TypeScript'} color={'#0390F8'}/>
                <SkillBar title={'React JS'} color={'#6C60FA'}/>
                <SkillBar title={'Python'} color={'#BF60FA'}/>
                <SkillBar title={'Node.js'} color={'#DC60FA'}/>
                <SkillBar title={'C#'} color={'#03BFF8'}/>
                <SkillBar title={'HTML/CSS'} color={'#FA60EE'}/>
                <SkillBar title={'SASS'} color={'#ff33ee'}/>
                <SkillBar title={'Redux'} color={'#db1dcb'}/>
                <SkillBar title={'Git'} color={'#03BFF8'}/>
                <SkillBar title={'MySQL'} color={'#0390F8'}/>
            </div>
        </div>
    )
}

export default Skills;



{/* <ProgressBar barDetail={{title: 'JavaScript', color: '#03BFF8', height: '9'}} />
<ProgressBar barDetail={{title: 'React', color: '#0390F8', height: '8'}} />
<ProgressBar barDetail={{title: 'Redux', color: '#6C60FA', height: '7'}} />
<ProgressBar barDetail={{title: 'HTML/CSS', color: '#BF60FA', height: '9'}} />
<ProgressBar barDetail={{title: 'SASS', color: '#DC60FA', height: '8'}} />
<ProgressBar barDetail={{title: 'Node JS', color: '#FA60EE', height: '8'}} />
<ProgressBar barDetail={{title: 'C#', color: '#ff33ee', height: '6'}} />
<ProgressBar barDetail={{title: 'MySQL', color: '#db1dcb', height: '7'}} /> */}