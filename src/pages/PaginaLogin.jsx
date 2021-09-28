import React from 'react'
import { useHistory, useLocation } from 'react-router'
import { useAuth } from '../auth/useAuth'
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useForm} from "../hooks/useForm"
import { useDispatch } from 'react-redux';
import {actionGoogle, loginEmailPassword } from '../actions/actionLogin';




const PaginaLogin = () => {

    //Uso de useContext para el control de rutas publicas y privadas
    const history = useHistory() 
    const location = useLocation()
    const previousObjectURL = location.state?.from
    const auth = useAuth()
    //IN
    const dispatch = useDispatch()
    const handleLogin = (e) => {
        auth.login(); //useContext
        history.push(previousObjectURL) // añade el resto de direccion para que vaya a carrito
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        // dispatch(actionLogin(email, password)) //disparo de la accion de actionLogin
    }


   //Desestructuracion del useHook 
    const [values, handleInputChange] = useForm ({
        email:"",
        password:""
    })
     //Desesctructuracion de los values
    const {email, password} = values
    const handleGoogle = () => {
        dispatch(actionGoogle())   
    }
    return (
        <>
  
            
            <Form onSubmit ={handleLogin}>
                <h1> Amazonas </h1>
                <h3> Login </h3>
            
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value = {email}
                    onChange = {handleInputChange}
                    
                    
                    />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password}
                    onChange = {handleInputChange}
                    
                    />
            </Form.Group>
            <Button variant="primary" type="submit" >
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick= {handleGoogle}

                >
                    <Container className="google-icon-wrapper"  >
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
            </Container>
            <Link to="/registro">Registrarse</Link>

        </Form>
        
        </>
        
    )
}

export default PaginaLogin
