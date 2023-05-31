import React from 'react'
import { styled, keyframes } from "styled-components"

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import logomarca from '../assets/img/logomarca.svg'
import logotipo from '../assets/img/logotipo.svg'
import noz from '../assets/img/noz.svg'

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    background-color: #6A5FB6;
    border-radius: 0 0 80px 80px;
`

const Header = styled.header`
    display: flex;
    justify-content: center;    

    .container {
        display: flex;
        flex-direction: row;
    }
`

const Section = styled.section`
    display: flex;
    justify-content: center;

    @media (max-width:768px) {
        section {
            display: flex;
            justify-content: center;
        }
    }
`

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
    padding: 2em 3em;
`

const Logotipo = styled.img`
    @media (max-width:1000px) {
        width: 200px;
    }

    @media (max-width:768px) {
        display: none;
    }
`

const Navigation= styled.nav`
    display: flex;
    align-items: center;
    gap: 1em;

    a {
        font-size: 1.25rem;
        font-weight: 500;
        color: #FFF;
        transition: all 0.5s;
    }

    a:hover {
        border: none;
        border-bottom: 1px solid #fff;
        padding: 0 0 3px 0;
    }
`

const LogOutBtn = styled.button`
    outline: none;
    border: none;
    padding: 5px 20px;
    color: #6A5FB6;
    font-size: 1em;
    font-weight: 900;
    background-color: #FFF;
    border-radius: 10px;
`

const GroupTitleButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3em;

    @media (max-width:768px) {
        justify-content: center;
        align-items: center;
        text-align: center;
    }
`

const Title = styled.h1`
    color: #FFF;
    font-weight: 700;
    font-size: 2.5rem;
    letter-spacing: 1px;

    @media (max-width:1000px) {
        font-size: 2.5rem;
    }

    @media (max-width:850px) {
        font-size: 1.75rem;
    }

    @media (max-width:768px) {
        font-size: 2rem;
    }
`

const Subtitle = styled.h2`
    color: #E3E3E3;
    font-size: 1.25rem;
    letter-spacing: 1px;
    font-weight: 300;

    @media (max-width: 1000px) {
        font-size: 1.15rem;
    }

    @media (max-width:850px) {
        font-size: 0.9rem;
    }
`

const shakeAnimation = keyframes`
    0% {
        transform: rotate(-10deg);
    }
    50% {
        transform: rotate(20deg);
    }
    100% {
        transform: rotate(-10deg);
    }
`

const Icon = styled.img`
    transition: transform 0.3s ease-in-out;
`;

const AboutUsBtn = styled.button`
    border: none;
    border-radius: 10px;
    padding: 0.5em 1em;
    width: 200px;
    background-color: #FFF;
    font-size: 1.25rem;
    font-weight: 700;
    transition: all 0.5s;

    a {
        display: flex;
        justify-content: space-between;
        color: #6A5FB6;;
    }

    img {
        transition: transform 1s;
    }

    &:hover {
        transform: scale(1.1);

        img {
            animation: ${shakeAnimation} 1s ease-in-out infinite;
        }
    }
`

const Banner = () => {
    const auth = React.useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
        await auth.signout() // Chama a função signout() do objeto auth
        navigate('/') // Redireciona o usuário para a Home
    }

    return (
        <BannerContent>
            <Header>
                <Container>
                    <Link to=""><img src={logomarca} alt="" /></Link>

                    <Navigation>
                        {auth.user 
                            ?<Link to="/gestao">Entrar</Link>
                            :<Link to="/gestao">Log In</Link>
                        }

                        {auth.user && (
                            <LogOutBtn onClick={handleLogout}>Sair</LogOutBtn>
                        )}
                    </Navigation>
                </Container>
            </Header>

            <Section>
                <Container>
                    <GroupTitleButton>  
                        <div>
                            <Title>
                                Bem-vindo ao Skilloo
                            </Title>

                            <Subtitle>
                                Seu sistema favorito de gerenciamento e organização
                            </Subtitle>
                        </div>

                        <AboutUsBtn>
                            <Link to="https://oncapystudio.netlify.app/#" target='_blank'>
                                Sobre nozes <Icon src={noz} alt="" />
                            </Link>
                        </AboutUsBtn>
                    </GroupTitleButton>

                    <Logotipo src={logotipo} alt=""/>
                </Container>
            </Section>
        </BannerContent>
    )
}

export default Banner