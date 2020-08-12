import React,{useState} from 'react';
import ProjectInfo from './Project_Info';
import ProjectDisplay from './Project_Display';
import placeholder from '../images/placeholder.jpg'
import downArrow from '../icons/keyboard_arrow_right-24px.svg';

import '../styles/Projects.css'

function Projects(){
    const totalProjects = {
        project1 : {name: 'test', images: [placeholder,downArrow]},
        project2 : {name: 'test1', images: [placeholder,downArrow]},
        project3 : {name: 'test2', images: [downArrow, placeholder]},
        project4 : {name: 'test3', images: [placeholder, downArrow]}
    }


    const [currentProject, setCurrentProject] = useState(totalProjects.project1);



    return(
        <div id='projects'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className='project-container'>
                <div className='project-list'>
                    <div className='project' onClick={()=> setCurrentProject(totalProjects.project1)}>
                        <ProjectInfo project={{name: totalProjects.project1.name, image: totalProjects.project1.images[0]}} />
                    </div>
  
                    <div className='project' onClick={()=> setCurrentProject(totalProjects.project2)}>
                        <ProjectInfo project={{name: totalProjects.project2.name, image: totalProjects.project2.images[0]}} />
                    </div>
  
                    <div className='project' onClick={()=> setCurrentProject(totalProjects.project3)}>
                        <ProjectInfo project={{name: totalProjects.project3.name, image: totalProjects.project3.images[0]}} />
                    </div>
  
                    <div className='project' onClick={()=> setCurrentProject(totalProjects.project4)}>
                        <ProjectInfo project={{name: totalProjects.project4.name, image: totalProjects.project4.images[0]}} />
                    </div>
  
                </div>
                <div className='project-display'>
                    <ProjectDisplay project={currentProject}/>
                </div>
            </div>
        </div>
    )
}

export default Projects;