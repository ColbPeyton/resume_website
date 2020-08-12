import React,{useState} from 'react';
import ProjectInfo from './Project_Info';
import ProjectDisplay from './Project_Display';
import ProjectDetails from './Project_Details';

import '../styles/Projects.css'

function Projects(){


    const [currentProject, setCurrentProject] = useState(ProjectDetails[0]);


    return(
        <div id='projects'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className='project-container'>
                <div className='project-list'>
                    <div className='project' onClick={()=> setCurrentProject(ProjectDetails[0])}>
                        <ProjectInfo project={{title: ProjectDetails[0].title, image: ProjectDetails[0].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> setCurrentProject(ProjectDetails[1])}>
                        <ProjectInfo project={{title: ProjectDetails[1].title, image: ProjectDetails[1].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> setCurrentProject(ProjectDetails[0])}>
                        <ProjectInfo project={{title: ProjectDetails[0].title, image: ProjectDetails[0].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> setCurrentProject(ProjectDetails[0])}>
                        <ProjectInfo project={{title: ProjectDetails[0].title, image: ProjectDetails[0].cardImage}} />
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