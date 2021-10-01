import React from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { deleteAsincrono } from '../actions/actionProducto'
export const ListarProductos = () => {
   const {productos} =  useSelector(store => store.producto )
   console.log(productos)
   const dispatch = useDispatch()
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Fecha ingreso</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                {
                        (productos) ?
                            (
 
                                productos.map((element, index) => (
 
                                    <tr key={index}>
                                        <td>{element.nombre}</td>
                                        <td>{element.descripcion}</td>
                                        <td>{element.fecha}</td>
                                        <td><img src={element.imagen} alt="" width="50px" /></td>
 
                                        <td>
                                        <button className ="btn btn-secondary" 
                                       >Editar </button>
                                            <button className ="btn btn-danger" onClick = {()=>dispatch(deleteAsincrono(element.nombre))}
                                       >Eliminar</button>
                                       
                                        </td>
 
                                    </tr>
                                )
                                )
 
                            ) :
                            <p>Datos no disponibles</p>
                    }


                </tbody>
                
            </Table>
            
        </div>
    )
}