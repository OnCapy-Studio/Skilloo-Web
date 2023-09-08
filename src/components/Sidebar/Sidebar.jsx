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

    return (
        <C.Screen>
            <C.Menu>
                <nav>
                    <C.TopSection>
                        <Link to="/gestao/membros"><img src={logomarca} alt="" /></Link>
                        <C.Bars className="material-symbols-outlined">menu</C.Bars>
                    </C.TopSection>

                    {SidebarData.map((item, index) => (
                        <NavLink to={'/gestao/'+item.path} key={index}>
                            <span className="material-symbols-outlined">{item.icon}</span> 
                            <h1>{item.title}</h1>
                        </NavLink>
                    ))}
                </nav>

                <C.Logout onClick={handleLogout}>
                    <span className="material-symbols-outlined">logout</span>
                    <h1>Log out</h1>
                </C.Logout>
            </C.Menu>

            <main>{children}</main>
        </C.Screen>
    )
}

export default Sidebar