import React,{useState} from 'react';
import '../styles/Project_Info.css'


function ProjectInfo(props){

    const [overlay, setOverlay] = useState(false);

    function renderOverlay(){
         return overlay 
        ?  <div className='project-overlay'>
                <p>{props.project.title}</p>
            </div>
        : <div className='project-overlay hidden'>
                <p>{props.project.title}</p>
            </div>;
    }
    return(
        <div className='project-info' 
            style={{  
                backgroundImage: "url(" +  props.project.image + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} 
            onMouseEnter={()=> setOverlay(true)} 
            onMouseLeave={()=> setOverlay(false)}
            >
            {renderOverlay()}
        </div>
    )
}

export default ProjectInfo;


// style={{background:`url(${props.project.image}) no-repeat 0 0 /cover`}}