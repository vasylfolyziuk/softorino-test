import React from 'react';
import Projects from './features/projects/Projects';
import NavBar from './features/Navbar/NavBar';

import './App.css';

function App() {
  return (
    <div className="container mx-auto px-4">
      <NavBar />
      <Projects />
    </div>
  );
}

export default App;
