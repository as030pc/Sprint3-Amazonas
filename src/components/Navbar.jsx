import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="nav nav-pills flex-column flex-sm-row">
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/login"> Login </Link>
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/"> Home </Link>
            <Link class="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/carrito"> Carrito </Link>

            </nav>

        </div>
    )
}

export default Navbar
