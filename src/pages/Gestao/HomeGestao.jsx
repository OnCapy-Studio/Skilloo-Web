// HomeGestao
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../Reset.css';

import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import Header from '../../components/Header';

import Membros from './Membros/Membros';
import Horarios from './Horarios';
import Labs from './Labs';
import Turmas from './Turmas';
import Materias from './Materias';
import Suporte from '../Suporte';

const HomeGestao = () => {
  return (
    <Sidebar>
      <Header />
      <Routes>
        <Route path="/membros" element={<Membros />} />
        <Route path="/horarios" element={<Horarios />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/turmas" element={<Turmas />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
    </Sidebar>
  );
};

export default HomeGestao;
