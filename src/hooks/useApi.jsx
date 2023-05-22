// src/hooks/useApi.jsx
import axios from "axios" // Biblioteca pra fazer requisições HTTP.

const api = axios.create({ // Atribuindo uma instância do axios na variavel api
    baseURL: process.env.REACT_APP_API, // Lê a api do arquivo de environment
})

export const useApi = () => ({ // Hook que retorna um obj com as funções que serão utilizadas
    validateToken: async token => {
        return {user: {id: 1, name: "Mureulos", email:"mureulos@gmail.com"}} // Resposta fake para testar o funcionamento da aplicação

        // Realiza uma requisição para o endpoint /validate e envia um parâmetro token 
        const response = await api.post("/validate", {token}) 
        return response.data
    }, 
    signin: async (email, password) => {
        return { // Resposta fake para testar o funcionamento da aplicação
            user: {id: 1, name: "Mureulos", email:"mureulos@gmail.com", password:"123"},
            token: '123546'
        }

        // Realiza uma requisição para o endpoint /sigin e envia os parâmetros email e password 
        const response = await api.post("/signin", {email, password})
        return response.data
    },
    logout: async () => {
        return {status: true} // Resposta fake para testar o funcionamento da aplicação
        // Apenas realiza uma requisição para o endpoint /logout 
        const response = await api.post("/logout")
        return response.data
    },
})