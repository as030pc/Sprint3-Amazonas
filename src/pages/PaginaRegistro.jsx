import React from 'react'
import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { registerSincronico, registroAsincronico } from '../actions/actionRegister';

const PaginaRegistro = () => {

    const [formValues, handleInputChange] = useForm({
        nombre:"Andres",
        email:"andres.palma@udea.edu.co",
        pass1:"123456",
        pass2:"1223456"
    })
    const {nombre, email, pass1, pass2} = formValues;


    const dispatch = useDispatch()
    const handleRegistro = (e)=> {
        e.preventDefault()
        dispatch(registroAsincronico(email, pass1, nombre))
        
    }

    
    return (
        <>
         <Form onSubmit = {handleRegistro}>
                <Form.Group className="mb-3" controlId="formBasicName" >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter name"
                        name="nombre"
                        value = {nombre}
                        onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="email"
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
                        name="pass1"
                        value = {pass1}
                        onChange = {handleInputChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="pass2"
                        value = {pass2}
                        onChange = {handleInputChange}
                    />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>
            
        </>
    )
}

export default PaginaRegistro
