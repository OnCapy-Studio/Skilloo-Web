//src/App.jsx
import React from 'react'
import { Routes, Route, Link, useNavigate} from 'react-router-dom'

import './Reset.css'
import './App.css'  

import { Home } from './pages/Home/Home'
import { Membros } from './pages/Membros/Membros'

import { RequireAuth } from './context/RequireAuth'
import { AuthContext } from './context/AuthContext'

import logomarca from './assets/img/logomarca.png'
import logOutIcon from './assets/img/logout-icon.png'

function App() {
    const auth = React.useContext(AuthContext) 
    const navigate = useNavigate()

    const handleLogout = async () => {
        console.log(auth)
        await auth.signout() // Chama a função signout() do objeto auth
        navigate("/") // Redireciona o usuário para a Home
    }

    return (
        <div className="App">
            <header>
                <Link to="/">
                    <img className='logomarca' src={logomarca} alt="" href="/" />
                </Link>
                
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/membros">Gestao</Link>
                    {auth.user && 
                        <button className='logOutBtn' onClick={handleLogout} >
                            Sair
                        </button>
                    }
                </nav>
            </header>

            <section className='container'>
                <Routes> {/*envolve as rotas da aplicação*/}
                    {/*Rota para a URL "/". Renderizará o componente Home*/}
                    <Route path="/" element={<Home />} /> 
                    
                    {/*Rota para a URL "/Membros". Renderizará o componente RequireAuth para fazer a validação e assim renderizar o componente Membros*/}
                    <Route path="/membros" element={<RequireAuth><Membros /></RequireAuth>} />
                </Routes>
            </section>            
        </div>
    )
}

export default App