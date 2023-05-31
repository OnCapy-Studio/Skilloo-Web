// src/App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from './context/RequireAuth'

import HomeGestao from './pages/Gestao/Dashboard'
import Home from './pages/Home/Home'

import './Reset.css'
import styled from "styled-components";

const AppDiv = styled.div`
        font-family: 'Inter', sans-serif;
`

const App = () => {
    return (
        <AppDiv>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gestao" element={<RequireAuth><HomeGestao/></RequireAuth>} />
            </Routes>
        </AppDiv>
    )
}

export default App