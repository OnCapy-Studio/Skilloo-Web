// Sidebar
import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

import * as C from "./styles"
import SidebarData from './SidebarData'
import logomarca from '../../assets/img/logomarca.svg'

const Sidebar = ({children}) => {
    const auth = React.useContext(AuthContext)
    const handleLogout = async () => await auth.signout()

    const [open, setOpen] = React.useState(false)
    const toggle = () => setOpen(!open)

    return (
        <C.Screen>
            <C.Menu open={open}>
                <nav>
                    <C.TopSection>
                        <C.ToggleBtn className="material-symbols-outlined" onClick={toggle}>
                            {open?'close' :'menu'}
                        </C.ToggleBtn>

                        <Link to="/"><img src={logomarca} alt="" /></Link>
                    </C.TopSection>

                    {SidebarData.map((item, index) => (
                        <NavLink to={'/gestao/'+item.path} key={index}>
                            <C.Bar></C.Bar>
                            <span className="material-symbols-outlined">{item.icon}</span> 
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