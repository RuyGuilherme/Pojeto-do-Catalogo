import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Afazer from './pages/Afazer';
import Edit from './pages/Edit';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Afazer/:id" element={<Afazer />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/Cadastro" element={<Cadastro />} />
      <Route />
    </Routes>
  );
}

export default App;