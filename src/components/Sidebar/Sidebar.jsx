// Sidebar
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import * as C from "./styles"
import GlobalStyle from '../../pages/Gestao/GlobalStyle'

import SidebarData from './SidebarData'
import logomarca from '../../assets/img/logomarca.svg'

import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const Sidebar = ({children}) => {
    const auth = React.useContext(AuthContext)
    const handleLogout = async () => await auth.signout()

    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)

    return (
        <C.Screen>
            <GlobalStyle />
            <C.Menu open={open}>
                <nav>
                    <C.TopSection>
                        {open? <IoClose onClick={toggle}/> :<FaBars onClick={toggle}/>}
                        {open? <Link to="/"><img src={logomarca} alt="" /></Link>: ''}
                    </C.TopSection>

                    {SidebarData.map((item, index) => (
                        <NavLink to={'/gestao/'+item.path} key={index}>
                            <C.Icon>{item.icon}</C.Icon>
                            <h1>{item.title}</h1>
                        </NavLink>
                    ))}
                </nav>

                <C.Logout onClick={handleLogout} open={open}>
                    <span className="material-symbols-outlined">logout</span>
                    <h1>Log out</h1>
                </C.Logout>
            </C.Menu>

            <C.Main>{children}</C.Main>
        </C.Screen>
    )
}

export default Sidebar