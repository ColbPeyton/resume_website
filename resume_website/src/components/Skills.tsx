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

                <SkillBar title={'Ruby'} color={'#FA60EE'}/>

                <SkillBar title={'React'} color={'#0390F8'}/>

                <SkillBar title={'Rails'} color={'#DC60FA'}/>

                <SkillBar title={'Git'} color={'#6C60FA'}/>

                <SkillBar title={'GraphQL'} color={'#BF60FA'}/>

                <SkillBar title={'Context'} color={'#BF60FA'}/>

                <SkillBar title={'MySQL'} color={'#6C60FA'}/>

                <SkillBar title={'TypeScript'} color={'#DC60FA'}/>

                <SkillBar title={'HTML'} color={'#0390F8'}/>

                <SkillBar title={'CSS'} color={'#FA60EE'}/>

                <SkillBar title={'SASS'} color={'#03BFF8'}/>
            </div>
        </div>
    )
}

