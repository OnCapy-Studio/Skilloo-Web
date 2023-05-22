// src/context/RequireAuth.jsx
import React from "react"
import { AuthContext } from "./AuthContext" 
import { Login } from "../pages/Login/Login"


export const RequireAuth = ({children}) => { 
    // Atribui as informações sobre a autenticação do usuário em uma variavel
    const auth = React.useContext(AuthContext) 
    
    if(!auth.user) { // Verificar se o usuário está autenticado
        return <Login /> // Renderiza o componente Login
    }

    return children // Renderiza o componente Membros
}