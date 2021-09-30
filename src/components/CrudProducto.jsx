import React, {useEffect}  from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/fileUpload';
import { agregarAsincrono, agregarProducto, listAsincronica } from '../actions/actionProducto';
import { ListarProductos } from './ListarProducto';
;

export const CrudProducto = () => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        nombre: "",
        descripcion:"",
        fecha:"",
        imagen:""
    })

    let { nombre, descripcion, fecha, imagen } = values;

    const handleRegistro = (e) => {
        e.preventDefault();
        dispatch(agregarAsincrono(nombre, descripcion, fecha,imagen));
        reset();
    }

    const handlePictureClick = () => {
         document.querySelector('#fileSelector').click();
    }

    const handleFileChanged = (e) => {
        const file = e.target.files[0];
        fileUpload(file)
        .then(response => {
            imagen = response
            console.log(response);
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    useEffect(() => {
        dispatch(listAsincronica());
      }, [])

    return (
        <div className = "crud-container">

            <form onSubmit={handleRegistro}>
                <h1> Zona de gestión de productos </h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Nombre de producto </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="nombre"
                        value={nombre}
                        onChange={handleInputChange} 
                        required
                        />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres"> Descripción </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="descripcion" 
                        id="descripcion"
                        value={descripcion}
                        onChange={handleInputChange}
                        required
                         />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Fecha de ingreso del producto </label>
                        <input 
                        className="form-control" 
                        type="date" 
                        name="fecha" 
                        id="fecha" 
                        value={fecha}
                        onChange={handleInputChange}/>
                    </div>

                    <br />
                    <div className="form-group col-md-4">
                        <input
                            id="fileSelector"
                            type="file"
                            name="file"
                            style={{ display: 'none' }}
                            onChange={handleFileChanged}
                        />

                        <button className="btn btn-secondary"
                           onClick={handlePictureClick} type="button"> Subir imagen de producto </button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>

                   
                </div>
            </form>

            <ListarProductos/>
            
        </div>
    )
}
