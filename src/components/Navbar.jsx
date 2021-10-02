
import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../actions/actionLogin'

const Navbar = ({ history }) => {
    const dispatch = useDispatch()
    const { name } = useSelector(state => state.login)

    const handleLogout = () => {
        dispatch(startLogout());
        // history.replace('/')
    }


    return (
     

            <nav class="navbar navbar-expand-lg navbar-light bg-dark text-white  ">
                <div class="container-fluid d-flex  justify-content-between">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="/" className = "text-white"> <img alt ="logo Amazonas" src = "https://res.cloudinary.com/dobboq5dt/image/upload/v1632956691/Sprint%203-%20Amazonas/logo-amazon_mlu12o.png" /> </a>
                    <div class="collapse navbar-collapse d-flex  justify-content-between" id="navbarTogglerDemo03">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex  justify-content-between">
                            
                            <li class="nav-item">
                                <Link className="flex-sm-fill text-sm-center nav-link text-white " aria-current="page" to="/crud"> Gestion de productos </Link>
                            </li>
                        </ul>
                        <form class="d-flex m-3">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-secondary me-2" type="submit">Search</button>
                            <span className = "text-white me-2"> Hola: {name}</span>
                           
                        </form>

                        
                        
                        <button className="btn btn-danger me-2" onClick={handleLogout}> Logout </button>
                    </div>
                </div>
            </nav>


        
    )
}

export default Navbar
