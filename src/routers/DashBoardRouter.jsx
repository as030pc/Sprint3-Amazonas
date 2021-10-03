import React from 'react'
import { Route, Redirect, Switch } from 'react-router'
// import Crud from '../components/Crud'
import { CrudProducto } from "../components/CrudProducto"
import Carrito from '../pages/Carrito'
import PaginaPrincipal from '../pages/PaginaPrincipal'
import Mapa from "../pages/Mapa"

const DashBoardRouter = () => {
    return (

        <Switch>
            <Route
                exact
                path="/crud"
                component={CrudProducto}

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
            <Route
                exact
                path="/mapa"
                component={Mapa}

            />
            <Redirect to="/" />
        </Switch>

    )
}

export default DashBoardRouter
