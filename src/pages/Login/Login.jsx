// src/pages/Login.jsx
import React from 'react'

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import InputLabel from '../../components/InputLabel'

import logomarca from '../../assets/img/logomarca1.svg'
import '../../Reset.css'

import * as C from "./style.js";

export const Login = () => {
    const auth = React.useContext(AuthContext) // Atribui as informações de autenficação em uma variavel
    const navigate = useNavigate()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    
    const footerLinks = [
        { text: 'Terms', route: '/terms' },
        { text: 'Privacy', route: '/privacy' },
        { text: 'Security', route: '/security' },
        { text: 'Contact', route: '/contact' }
    ]

    const handleLogin = async (event) => {
        event.preventDefault()

        if(email && password) {
            // Atribui o resultado da verificação da autentificação na variavel isLogged
            const isLogged = await auth.signin(email, password)

            if(isLogged) // Se estiver autentificado
                navigate("/gestao")
            else
                alert("Email não autentificado, tente novamente")
        }
    }

    return (
        <C.Container>
            <Link to="/"><C.Logomarca src={logomarca} alt="" /></Link>
            <C.Title>Sign in to Skilloo</C.Title>

            <C.Form>
                <InputLabel
                    label="Email:"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu Email"
                />

                <InputLabel
                    label="Senha:"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                />

                <C.LoginBtn onClick={handleLogin}>Sign In</C.LoginBtn>
            </C.Form>

            <C.Footer>
                {footerLinks.map((link, index) => (
                    <Link key={index} to={link.route}>{link.text}</Link>
                ))}
            </C.Footer>
        </C.Container>
    )
}