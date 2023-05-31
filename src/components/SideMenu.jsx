import React, { useState } from 'react'
import styled from 'styled-components'

import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import logomarca from '../assets/img/logomarca.svg'

const SideMenuContainer = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1.5em;
    height: 100vh;
    background-color: #6a5fb6;

    div {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
    
    img {
        width: 100%;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1em;
    padding: 10px 15px;
    font-size: ${({ active }) => (active ? '1.2rem' : '1rem')};
    background-color: ${({ active }) => (active ? '#FFF' : 'transparent')};
    color: ${({ active }) => (active ? '#6A5FB6' : '#b5b5b5')};
    font-weight: ${({ active }) => (active ? '600' : 'normal')};
    border-radius: 5px;
    transition: all 0.5s;

    a {
        color: inherit;
    }

    span {
        transition: all 0.5s;
    }

    &:hover{
        color: ${({ active }) => (active ? '#6A5FB6' : '#f1f1f1')};
        font-size: ${({ active }) => (active ? '1.2rem' : '1.2rem')};;
    
        span {
            font-size: ${({ active }) => (active ? '24px' : '1.7rem')};;;
        }
    }
`

const LogOutBtn = styled.button`
    outline: none;
    border: none;
    padding: 10px 20px;
    color: #6a5fb6;
    font-size: 1.2em;
    font-weight: 600;
    background-color: #fff;
    border-radius: 10px;
    transition: all 0.5S;

    &:hover {
        background-color: #d9d9d9;
        transform: scale(1.05);
    }
`

const SideMenu = () => {
    const auth = React.useContext(AuthContext)
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(true)
    const handleLogout = async () => await auth.signout()

    const menuItems = [
        { text: 'Dashboard', route: '/gestao', icon: 'space_dashboard' },
        { text: 'Horários', route: '/gestao/horarios', icon: 'schedule' },
        { text: 'Salas', route: '/gestao/salas', icon: 'school' },
        { text: 'Suporte', route: '/gestao/suporte', icon: 'help' }
    ]

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <SideMenuContainer>
            <div>
                <Link to="/gestao">
                    <img src={logomarca} alt="" />
                </Link>

                <hr/>

                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            key={index}
                            active={location.pathname === item.route ? 'true' : undefined}
                        >
                            <span class="material-symbols-outlined">{item.icon}</span> 
                            <Link to={item.route}>{item.text}</Link>
                        </MenuItem>
                    ))}
                </ul>
            </div>

            <div>
                <hr/>
                {auth.user && (<LogOutBtn onClick={handleLogout}>Sair</LogOutBtn>)}
            </div>
            
            
        </SideMenuContainer>
    )
}

export default SideMenu