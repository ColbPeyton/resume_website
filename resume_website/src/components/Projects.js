import React,{useState} from 'react';
import ProjectInfo from './Project_Info';
import ProjectDisplay from './Project_Display';
import ProjectDetails from './Project_Details';

import '../styles/Projects.css'

function Projects(){


    const [currentProject, setCurrentProject] = useState(ProjectDetails[0]);
    const [currentPos, setcurrentPos] = useState(0);

    // project display is disabled on smaller screens, open project's github link
    function changeClickBasedOnResolution(ProjectDetails){
        if(window.screen.width < 480 || window.screen.height < 450){
            window.open(`${ProjectDetails.url}`);
        }
        setcurrentPos(0)
        setCurrentProject(ProjectDetails);
    }

    function updatePosition(pos, imageAmount){
        if(pos > imageAmount.length - 1){
            setcurrentPos(0)
        }else if(pos < 0){
            setcurrentPos((imageAmount.length - 1))
        }else{
            setcurrentPos(pos);
        }
    }

    return(
        <div id='projects'>
            <div className='projects-title'>
                <h1>Projects</h1>
            </div>
            <div className='project-container'>
                <div className='project-list'>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[0])}>
                        <ProjectInfo project={{title: ProjectDetails[0].title, image: ProjectDetails[0].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[1])}>
                        <ProjectInfo project={{title: ProjectDetails[1].title, image: ProjectDetails[0].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[2])}>
                        <ProjectInfo project={{title: ProjectDetails[2].title, image: ProjectDetails[1].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[3])}>
                        <ProjectInfo project={{title: ProjectDetails[3].title, image: ProjectDetails[2].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[4])}>
                        <ProjectInfo project={{title: ProjectDetails[4].title, image: ProjectDetails[3].cardImage}} />
                    </div>
                    <div className='project' onClick={()=> changeClickBasedOnResolution(ProjectDetails[5])}>
                        <ProjectInfo project={{title: ProjectDetails[5].title, image: ProjectDetails[4].cardImage}} />
                    </div>
  
                </div>
                <div className='project-display'>
                    <ProjectDisplay 
                        project={currentProject} 
                        updatePosition={updatePosition}
                        pos={currentPos}
                        />
                </div>
            </div>
        </div>
    )
}

export default Projects;