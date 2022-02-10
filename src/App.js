import React from 'react';
import './App.css';
import { Home } from './components';
import Experience from './components/Experience';
import Skill from './components/Skill';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experience' element={<Experience />} />
        <Route path='/skill' element={<Skill />} />

      </Routes>

    </>
  );
}

export default App;
