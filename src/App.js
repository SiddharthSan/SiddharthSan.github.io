// src/App.js
import React from 'react';
import './App.css';

import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;