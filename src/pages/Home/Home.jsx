// src/Home/Home.jsx
import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { RequireAuth } from '../../context/RequireAuth'
import { AuthContext } from '../../context/AuthContext'

import Membros from '../../pages/Membros/Membros'
import logomarca from '../../assets/img/logomarca.png'

import './Reset.css'
import './Home.css'

const Home = () => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        console.log(auth)
        await auth.signout() // Chama a função signout() do objeto auth
        navigate('/') // Redireciona o usuário para a Home
    }

    return (
        <div className="App">
            <nav className='sideMenu'>
                <Link to=""><img className="logomarca" src={logomarca} alt="" /></Link>
                <Link to="">Home</Link>
                <Link to="/membros">Gestao</Link>

                {auth.user && (
                    <button className="logOutBtn" onClick={handleLogout}>Sair</button>
                )}
            </nav>

            <main className='container'>
                <header>
                    aaaa
                </header>

                <section className='frame'>
                    <Routes>
                        <Route path="/membros" element={<RequireAuth><Membros /></RequireAuth>} />
                    </Routes>
                </section>
            </main>
        </div>
    )
}

export default Home