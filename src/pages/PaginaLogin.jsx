import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../auth/useAuth'

const PaginaLogin = () => {
    const history = useHistory() 
    
    const location = useLocation()

    const previousObjectURL = location.state?.from
    const auth = useAuth()
    const handleLogin = () => {
        auth.login();
        history.push(previousObjectURL) // añade el resto de direccion para que vaya a carrito
    }
    return (
        <h1>
            Pagina Login
            <button onClick = {handleLogin}>
                Signin
            </button>
        </h1>
    )
}

export default PaginaLogin
