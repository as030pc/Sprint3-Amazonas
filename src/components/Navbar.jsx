import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

const Navbar = () => {
    const auth = useAuth() 
    return (
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row">
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/login"> Login </Link>
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/home"> Home </Link>
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/carrito"> Carrito </Link>
            <button onClick = {auth.logout}> Logout </button>
            </nav>

        </div>
    )
}

export default Navbar
