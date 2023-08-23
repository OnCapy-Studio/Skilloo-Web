import React from 'react'
import styled from 'styled-components'

import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import logomarca from '../assets/img/logomarca.svg'

const Container = styled.nav`
    box-sizing: border-box;
    position: absolute;
    display: ${({ active }) => (active ?'none' :'flex')};
    flex-direction: column;
    justify-content: space-between;
    padding: 2em 1.2em;
    width: 250px;
    height: 100vh;
    background-color: #6a5fb6;
    z-index: 1000;
    grid-area: sidenav;

    div {
        display: grid;
        gap: 5em;
    }
    
    img {
        width: 100%;
    }
`

const MenuItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1.25em;
    padding: 15px 0;
    background-color: ${({ active }) => (active ? '#FFF' : 'transparent')};
    color: ${({ active }) => (active ? '#FFF' : '#b5b5b5')};
    font-weight: ${({ active }) => (active ? 'bold' : '#f1f1f1')};
    font-size: 1.2rem;
    border-radius: 5px;
    transition: all 0.2s;

    a {
        color: inherit;
    }

    span {
        width: 20px;
        transition: all 0.2s;
    }

    &:hover{
        color: ${({ active }) => (active ? '#6A5FB6' : '#f1f1f1')};
    }
`

const LogoutButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    gap: 0.5em;
    font-size: 1.2rem;
    font-weight: 600;
    color: #FF1F00;
    background-color: #fff;
`

const SideMenu = () => {
    const auth = React.useContext(AuthContext)
    const location = useLocation()
    const handleLogout = async () => await auth.signout()

    const [active, useActive] = React.useState(false)
    const handleClick = () => useActive(!active)

    const menuItems = [
        { title: 'Membros', route: '', icon: 'person' },
        { title: 'Horários', route: 'horarios', icon: 'schedule' },
        { title: 'Labs', route: 'labs', icon: 'school' },
        { title: 'Turmas', route: 'turmas', icon: 'group' },
        { title: 'Matérias', route: 'materias', icon: 'grid_view' }
    ]

    return (
        <Container>
            <div>
                <Link to="/gestao"><img src={logomarca} alt="" /></Link>
                <button onClick={handleClick}>X</button>

                <ul>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} active={location.pathname === item.route ? 'true' : undefined}>
                            <span className="material-symbols-outlined">{item.icon}</span> 

                            <NavLink to={item.route}>
                                {item.title}
                            </NavLink>
                        </MenuItem>
                    ))}
                </ul>
            </div>

            {auth.user && (
                <LogoutButton onClick={handleLogout}>
                    <span className="material-symbols-outlined">logout</span>
                    Log out
                </LogoutButton>)
            }
        </Container>
    )
}

export default SideMenu