import React,{useState, useEffect} from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


import './styles/App.css';

function App() {

  const [width, setWidth] = useState(window.innerWidth);

   // Header will change based on size of screen, detect change in width
   useEffect(()=>{
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    }


})

function updateWidth(){
  setWidth(window.innerWidth);
}

  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Projects width={width}/>
      <Footer />
    </div>
  );
}

export default App;
