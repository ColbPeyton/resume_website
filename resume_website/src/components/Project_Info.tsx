import React,{useState} from 'react';
import gitIcon from '../assets/icons/git.svg';
import earthIcon from '../assets/icons/earth.svg';
import '../styles/Project_Info.scss'


interface ProjectInfoProps{
    height:number;
    width:number;
    project: {
        title: string;
        image: any;
        url: string;
        urlFull: string;
    }
}

export const ProjectInfo = (props:ProjectInfoProps):JSX.Element =>{

    const [overlay, setOverlay] = useState<Boolean>(false);
    const style ={
        backgroundImage: "url(" +  props.project.image.default + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden'
        }

    function isHosted(){
        return `${props.project.urlFull.length < 1 ? 'disabled' : ''}`
    }

    function renderOverlayLarge(){
         return overlay 
        ?  <div className='project-overlay'>
                <p>{props.project.title}</p>
            </div>
        : <div className='project-overlay hidden'>
                <p>{props.project.title}</p>
            </div>;
    }

    function renderOverlayMobile(){
        return (<div className='project-overlay mobile'>
                <div  className='overlay-mobile'>
                    <a href={props.project.url} rel="noopener noreferrer" target='_blank'><img className='git-icon' src={gitIcon} alt='git icon'></img></a>
                    <p>{props.project.title}</p>
                    <a href={props.project.urlFull} className={isHosted()} rel="noopener noreferrer" target='_blank'><img className={'earth-icon'} src={earthIcon} alt='earth icon'></img></a>
                </div>
                
            </div>
        )
    }

    function updateMarkupBasedOnWidth(){
        return props.width < 600 || props.height < 450
        ? renderOverlayMobile()
        : renderOverlayLarge()
    }


    return(
        <div className='project-info' 
            style={style} 
            onMouseEnter={()=> setOverlay(true)} 
            onMouseLeave={()=> setOverlay(false)}
            >
            {updateMarkupBasedOnWidth()}
        </div>
    )
}


// style={{background:`url(${props.project.image}) no-repeat 0 0 /cover`}}