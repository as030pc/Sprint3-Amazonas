
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'

const Navbar = ({history}) => {
const dispatch = useDispatch()
const {name} = useSelector(state=>state.login)

const handleLogout = () => {
    dispatch(startLogout());
    history.replace('/login')
 }
    
  
    return (
        <div>
            Usuario: {name}
            <nav className="nav nav-pills flex-column flex-sm-row">
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/login"> Login </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/home"> Home </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/carrito"> Carrito </Link>
            <Link className="flex-sm-fill text-sm-center nav-link active" aria-current="page" to="/crud"> Crud </Link>
            <button onClick = {handleLogout}> Logout </button>
            </nav>

        </div>
    )
}

export default Navbar
