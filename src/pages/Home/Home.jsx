// src/Home/Home.jsx
import React from 'react';

import Banner from '../../components/Home/Banner/Banner';
import Footer from './Footer';

import Usuarios from '../../components/Home/Usuarios/Usuarios';
import Infos from '../../components/Home/Infos/Infos';
import Contato from '../../components/Home/Contato/Contato';

const Home = () => {
  return (
    <>
      <Banner />
      <Usuarios />
      <Infos />
      <Contato />
      <Footer sections={['Tipos de usuários', 'Contato']} />
    </>
  );
};

export default Home;
