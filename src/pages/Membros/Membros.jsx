import React from "react"
import { AuthContext } from "../../context/AuthContext"

export const Membros = () => {
    const auth = React.useContext(AuthContext)
    console.log(auth)

    return (
        <div className="container">
            <h1 className="title">Membros</h1>

            <h2>Olá {auth.user?.name}</h2>
        </div>
    )
}