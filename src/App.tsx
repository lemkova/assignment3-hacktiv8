import React from 'react';
import userPath from './images/user.svg';
import { Link, Routes, Route } from 'react-router-dom';
import About from './pages/About'
import Experience from './pages/Experience'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Interests from './pages/Interests'
import Awards from './pages/Awards'

const styles = {
  navMenu : 'flex items-center p-2 text-base font-bold text-[#cb8b76] hover:text-white',
}

function App() {

  return (
    <div className="flex">
      <aside className="w-64" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 bg-[#bc5b3c] h-screen">
          <div className="mt-60">
            <ul className="space-y-2 flex flex-col justify-center items-center">
              <li>
                <img src={userPath} className="h-40 w-40" alt="portrait"/>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/">About</Link></h1>
                  </div>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/experience">Experience</Link></h1>
                  </div>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/education">Education</Link></h1>
                  </div>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/skills">Skills</Link></h1>
                  </div>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/interests">Interests</Link></h1>
                  </div>
              </li>
              <li>
                  <div className={styles.navMenu}>
                    <h1><Link to="/awards">Awards</Link></h1>
                  </div>
              </li>                                                              
            </ul>
          </div>
        </div>
      </aside>
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
