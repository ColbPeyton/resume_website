import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';


import './styles/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
