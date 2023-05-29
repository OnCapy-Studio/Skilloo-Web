// src/App.jsx
import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { RequireAuth } from './context/RequireAuth'

import HomeGestao from './pages/Gestao/HomeGestao'
import Home from './pages/Home/Home'

import './Reset.css'
import './App.css'

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/gestao" element={<RequireAuth><HomeGestao/></RequireAuth>} />
            </Routes>
        </div>
    )
}

export default App