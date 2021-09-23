import React from 'react'
import { Redirect, Route } from 'react-router'

export const PrivateRouter = ({ component: Component, ...rest }) => {

    //{...props} para que mande todas las propiedades.

    //{...rest}  manda todos menos los que se estan desestructurando de manera individual
    // component: Component se le debe asignar un aliar para que lo reconozca como un componente
    const user = null

    return (
        <div>
            <Route {...rest}>
                <Component />
                {
                    user ? <Component /> : <Redirect to="/login" />
                }


            </Route>

        </div>
    )
}
