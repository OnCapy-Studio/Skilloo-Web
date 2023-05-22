// src/context/AuthProvider.jsx
import React from "react"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"
import { useApi } from "../hooks/useApi"

export const AuthProvider = ({children}) => {
    // O estado user armazenará as informações do usuário autenticado
    const [user, setUser] = React.useState(null)

    // Obtem um objeto com as funções da API de autenticação
    const api = useApi()
    const navigate = useNavigate()

    // Armazenar o token de autenticação LocalStorage
    const setToken = token => localStorage.setItem("authToken", token)

    React.useEffect(() => {
        // Função que validará o token de autenticação
        const validateToken = async () => {
            // Obtém o token armazenado no localStorage
            const storageData = localStorage.getItem("authToken")

            if(storageData) {
                // Realiza uma requisição e envia os parâmetro os valores do LocalStorage como parametro 
                const data = await api.validateToken(storageData)

                if(data.user) // Se o usuario já existir
                    setUser(data.user)
            }
        }
        validateToken() // Chamada da função
    }, [])

    const signin = async (email, password) => {
        // Realiza uma requisição e envia os parâmetro os valores dos estados como parametro 
        const data = await api.signin(email, password)

        // Se o usuario e o token existirem (Se ambos existirem, significa que a autenticação foi bem-sucedida)
        if(data.user && data.token) { 
            setUser(data.user)
            setToken(data.token)
            navigate("/HomeGestao")
            return true
        }
        return false // Autenficação má sucedida
    }

    const signout = async () => {
        setUser(null)
        setToken("")
        // Realiza uma solicitação para efetuar o logout do usuário.
        await api.logout()
    }

    return (
        <AuthContext.Provider value={{user, signin, signout}}>
            {children}
        </AuthContext.Provider>
    )
}