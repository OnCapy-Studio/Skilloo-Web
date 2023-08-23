// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './context/RequireAuth'

import Membros from './pages/Gestao/Membros'
import Home from './pages/Home/Home'

import './Reset.css'
import styled from "styled-components";

const AppDiv = styled.div`
    width: 100%;
    height: 100%;
    font-family: 'Inter', sans-serif;
`

const App = () => {
    return (
        <AppDiv>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gestao" element={<RequireAuth><Membros/></RequireAuth>} />
            </Routes>
        </AppDiv>
    )
}

export default App