
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'

const Navbar = () => {
const dispatch = useDispatch()
const {name} = useSelector(state=>state.login)
    
  
    return (
        <div>
            Usuario: {name}
            <nav className="nav nav-pills flex-column flex-sm-row">
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/login"> Login </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/home"> Home </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/carrito"> Carrito </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/crud"> Crud </Link>
            <button onClick = {()=>dispatch(startLogout())}> Logout </button>
            </nav>

        </div>
    )
}

export default Navbar
