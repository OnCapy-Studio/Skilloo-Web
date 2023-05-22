// src/pages/Login.jsx
import React from 'react'
import './Login.css'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const Login = () => {
    const auth = React.useContext(AuthContext) // Atribui as informações de autenficação em uma variavel
    const navigate = useNavigate()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const handleLogin = async (event) => {
        event.preventDefault()

        if(email && password) {
            // Atribui o resultado da verificação da autentificação na variavel isLogged
            const isLogged = await auth.signin(email, password)

            if(isLogged) // Se estiver autentificado
                navigate("/membros")
            else
                alert("Email não autentificado, tente novamente")
        }
    }

    return (
        <div className='container'>
            <h1 className='title'>Login Page</h1>

            <form>
                <label htmlFor="">
                    Email:
                    <input 
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder='Digite seu Email'
                    />
                </label>

                <label htmlFor="">
                    Password:
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder='Digite sua senha'
                    />
                </label>

                <button className='loginButton' onClick={handleLogin}>Logar</button>
            </form>
        </div>
    )
}