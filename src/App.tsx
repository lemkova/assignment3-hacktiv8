import React from 'react';
import {Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Interests from './pages/Interests'
import Awards from './pages/Awards'

import Navbar from './components/Navbar'


function App() {

  return (
    <div className="flex">
      <Navbar/>
      <div className="flex w-screen px-4 mt-10">
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/experience" element={<Experience/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/interests" element={<Interests/>} />
          <Route path="/awards" element={<Awards/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
