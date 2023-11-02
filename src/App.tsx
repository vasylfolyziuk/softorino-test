import React from 'react';
import { Projects } from './features/projects/Projects';
import NavBar from './features/Navbar/NavBar';

import './App.css';

function App() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-4">
        <NavBar />
        <div className="col-span-2"><Projects /></div>
      </div>
    </div>
  );
}

export default App;
