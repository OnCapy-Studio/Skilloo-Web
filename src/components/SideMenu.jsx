import React, { useState } from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import logomarca from '../assets/img/logomarca.svg'
import hamburge from '../assets/img/hamburge.png'
import close from '../assets/img/close.png'

const SideMenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1.5em;
    height: 100vh;
    background-color: #6a5fb6;

    div {
        display: flex;
        flex-direction: column;
        gap: 3em;
    }
    
    img {
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 1.5em;
    }
`

const MenuItem = styled.li`
    a {
        padding: ${({ active }) => (active ? '4px 15px' : '0')};
        font-size: ${({ active }) => (active ? '1.2rem' : '1rem')};
        background-color: ${({ active }) => (active ? '#FFF' : 'transparent')};
        color: ${({ active }) => (active ? '#6A5FB6' : '#b5b5b5')};
        font-weight: ${({ active }) => (active ? '600' : 'normal')};
        border-radius: 5px;
        transition: all 0.5s;
    }

    a:hover {
        font-size: 1.2rem;
    }
`

const LogOutBtn = styled.button`
    outline: none;
    border: none;
    padding: 5px 20px;
    color: #6a5fb6;
    font-size: 1em;
    font-weight: 600;
    background-color: #fff;
    border-radius: 10px;
`

const SideMenu = () => {
    const auth = React.useContext(AuthContext)
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(true)
    const handleLogout = async () => await auth.signout()

    const menuItems = [
        { text: 'Dashboard', route: '/gestao' },
        { text: 'Horários', route: '/gestao/horarios' },
        { text: 'Salas', route: '/gestao/salas' },
        { text: 'Suporte', route: '/gestao/suporte' }
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <SideMenuContainer>
            <div>
                <Link to="/gestao">
                    <img src={logomarca} alt="" />
                </Link>

                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            active={location.pathname === item.route ? 'true' : undefined}
                        >
                            <Link to={item.route}>{item.text}</Link>
                        </MenuItem>
                    ))}
                </ul>
            </div>

            {auth.user && (
                <LogOutBtn onClick={handleLogout}>Sair</LogOutBtn>
            )}
        </SideMenuContainer>
    )
}

export default SideMenu