import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch
} from "react-router-dom";


import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute'
import Loading from '../components/Loading';


//Permite verificar si el usuario inicio sesion: https://firebase.google.com/docs/auth/web/manage-users?hl=es-419

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSincronico } from '../actions/actionLogin';
import PaginaRegistro from '../pages/PaginaRegistro';
import PaginaLogin from '../pages/PaginaLogin';
import DashBoardRouter from './DashBoardRouter';


const AppRouter3 = () => {

    const auth = getAuth()
    const dispatch = useDispatch()


    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {
            //se pone el ? para que no se explote la aplicacion si no encuentra un 
            if (user?.uid) {
                console.log(user)
                setIsLoggedIn(true)
                dispatch(loginSincronico(user.uid, user.displayName))
            } else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [])

    if (checking) {
        return <Loading />

    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    exact
                    path="/login"
                    component={PaginaLogin}
                    isAuthenticated={isLoggedIn}
                />
                <PublicRoute
                    exact
                    path="/registro"
                    component={PaginaRegistro}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                    path="/"
                    component={DashBoardRouter}
                    isAuthenticated={isLoggedIn}
                />
            </Switch>
        </Router>
    )
}

export default AppRouter3