// src/pages/Membros/Membros.jsx
import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/AuthContext"

import logomarca from '../../assets/img/logomarca.svg'
import * as C from "./style.js";

const HomeGestao = () => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate()

    console.log(auth.user.name)
    
    const handleLogout = async () => {
        await auth.signout() // Chama a função signout() do objeto auth
        navigate('/') // Redireciona o usuário para a Home
    }

    return (
        <C.Frame>
            <C.SideMenu>
                <div>
                    <Link to="/gestao"><img src={logomarca} alt="" /></Link>
                
                    <ul>
                        <li>
                            <Link to="">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="">Professores</Link>
                        </li>
                        <li>
                            <Link to="">Salas</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    {auth.user && (
                        <C.LogOutBtn onClick={handleLogout}>Sair</C.LogOutBtn>
                    )}
                </div>
            </C.SideMenu>

            <C.Content>
                <C.Header>
                    <C.Container>
                        <C.Title>Olá {auth.user.name}</C.Title>
                    </C.Container>
                </C.Header>

            </C.Content>
        </C.Frame>
    )
}

export default HomeGestao