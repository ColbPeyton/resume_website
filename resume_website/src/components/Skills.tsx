import React from 'react';
import {SkillBar} from './SkillBar';
import '../styles/Skills.scss'

export const Skills = ():JSX.Element =>{
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

                <SkillBar title={'TypeScript'} color={'#FA60EE'}/>

                <SkillBar title={'React JS'} color={'#0390F8'}/>

                <SkillBar title={'Python'} color={'#DC60FA'}/>

                <SkillBar title={'Node.js'} color={'#6C60FA'}/>

                <SkillBar title={'C#'} color={'#BF60FA'}/>

                <SkillBar title={'HTML/CSS'} color={'#BF60FA'}/>

                <SkillBar title={'SASS'} color={'#6C60FA'}/>

                <SkillBar title={'Redux'} color={'#DC60FA'}/>

                <SkillBar title={'Express'} color={'#0390F8'}/>

                <SkillBar title={'Git'} color={'#FA60EE'}/>

                <SkillBar title={'MySQL'} color={'#03BFF8'}/>
            </div>
        </div>
    )
}

