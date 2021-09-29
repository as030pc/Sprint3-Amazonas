import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
import Crud from '../components/Crud'
import Carrito from '../pages/Carrito'
import PaginaPrincipal from '../pages/PaginaPrincipal'

const DashBoardRouter = () => {
    return (
        <div>
            <Switch> 
            <Route
                exact
                 path="/crud"
                 component={Crud}
                 
                />
                <Route
                exact
                 path="/carrito"
                 component={Carrito}
                 
                />
                <Route
                exact
                 path="/"
                 component={PaginaPrincipal}
                 
                />
                <Redirect to="/" />
                </Switch>
        </div>
    )
}

export default DashBoardRouter
