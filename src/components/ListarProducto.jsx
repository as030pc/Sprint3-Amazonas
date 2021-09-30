import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
export const ListarProductos = () => {
   const {productos} =  useSelector(store => store.producto )
   console.log(productos)
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
                                            <button
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