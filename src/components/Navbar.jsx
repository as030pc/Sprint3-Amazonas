import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'

const Navbar = () => {
    const auth = useAuth() 
    return (
        <div>
            <nav className="nav nav-pills flex-column flex-sm-row">
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/login"> Login </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/home"> Home </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/carrito"> Carrito </Link>
            <button onClick = {auth.logout}> Logout </button>
            </nav>

        </div>
    )
}

export default Navbar
