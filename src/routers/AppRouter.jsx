import React from 'react'
import { HashRouter as Router, 
    Switch,
    Route


} from 'react-router-dom'


import PaginaRegistro from '../pages/PaginaRegistro'
import PaginaLogin from '../pages/PaginaLogin'
import Carrito from '../pages/Carrito'
import { PaginaNoEncontrada } from '../pages/PaginaNoEncontrada'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import Navbar from '../components/Navbar'
import { PrivateRouter } from './PrivateRouter'



const AppRouter = () => {
    return (
        <div>
            
            <Router>
            <Navbar/>
                <Switch>

                <Route exact path = "/" component = {PaginaPrincipal}/>
                    {/* <Route exact path = "*" component = {PaginaNoEncontrada}/>  */}

                    <Route exact path = "/login" component = {PaginaLogin}/>
                    <Route exact path = "/registro" component = {PaginaRegistro}/>
                    
                   
                   
                    <PrivateRouter exact path = "/carrito" component = {Carrito}/>
                   
                   
                </Switch>
            </Router>
            
        </div>
    )
}

export default AppRouter
