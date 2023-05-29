// src/Home/Home.jsx
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import logomarca from '../../assets/img/logomarca.svg'
import logotipo from '../../assets/img/logotipo.svg'
import noz from '../../assets/img/noz.svg'

import './Reset.css'
import * as C from "./style.js";

const Home = () => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout() // Chama a função signout() do objeto auth
        navigate('/') // Redireciona o usuário para a Home
    }

    return (
        <>
            <C.Background>
                <C.Header>
                    <C.Container>
                        <Link to=""><img src={logomarca} alt="" /></Link>

                        <C.Navigation>
                            <Link to="/gestao">Gestão</Link>

                            {auth.user && (
                                <C.LogOutBtn onClick={handleLogout}>Sair</C.LogOutBtn>
                            )}
                        </C.Navigation>
                    </C.Container>
                </C.Header>

                <C.Section>
                    <C.Container>
                        <C.GroupTitleButton>  
                            <div>
                                <C.Title>
                                    Bem-vindo ao Skilloo
                                </C.Title>

                                <C.Subtitle>
                                    Seu sistema favorito de gerenciamento e organização
                                </C.Subtitle>
                            </div>

                            <C.AboutUsBtn>
                                <Link to="https://oncapystudio.netlify.app/#">
                                    Sobre nozes <C.Icon src={noz} alt="" />
                                </Link>
                            </C.AboutUsBtn>
                            
                        </C.GroupTitleButton>

                        <C.Logotipo src={logotipo} alt=""/>
                    </C.Container>
                </C.Section>
            </C.Background>
            
            <C.Main >
                <C.Section>
                    <C.Title>
                        Nosso objetivo com você
                    </C.Title>
                </C.Section>
            </C.Main>
        </>
    )
}

export default Home