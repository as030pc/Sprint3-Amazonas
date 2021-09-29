import React, { useState, useEffect } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import {AuthRouter} from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import {PublicRoute} from './PublicRoute'
import Loading from '../components/Loading';
import Carrito from "../pages/Carrito"
import PaginaPrincipal from "../pages/PaginaPrincipal"

//Permite verificar si el usuario inicio sesion: https://firebase.google.com/docs/auth/web/manage-users?hl=es-419

import { getAuth, onAuthStateChanged  } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { loginSincronico } from '../actions/actionLogin';
import Crud from '../components/Crud';


const AppRouter3 = () => {

    const auth = getAuth()
    const dispatch = useDispatch()

    
    const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
        onAuthStateChanged(auth, async(user) =>{
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
        return <Loading/>

    }
    
    return (
        <Router>
            
            <Switch>
                
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                exact
                 path="/crud"
                 component={Crud}
                 isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                exact
                 path="/carrito"
                 component={Carrito}
                 isAuthenticated={isLoggedIn}
                />
                <PrivateRoute
                exact
                 path="/"
                 component={PaginaPrincipal}
                 isAuthenticated={isLoggedIn}
                />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}

export default AppRouter3