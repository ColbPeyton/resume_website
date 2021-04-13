import React,{useState, useEffect} from 'react';
import {Header} from './components/Header';
import {Navbar} from './components/Navbar';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Footer} from './components/Footer';


import './styles/App.css';

export const App = ():JSX.Element => {

  const [width, setWidth] = useState<number>(window.innerWidth);
  const [height, setHeight] = useState<number>(window.innerHeight);

   // Header will change based on size of screen, detect change in width
   useEffect(()=>{
    window.addEventListener("resize", updateWidthHeight);
    return () => {
      window.removeEventListener("resize", updateWidthHeight);
    }


})

function updateWidthHeight(){
  setWidth(window.innerWidth);
  setHeight(window.innerHeight);
}

  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Projects width={width} height={height}/>
      <Footer />
    </div>
  );
}