import React  from 'react';
import { useDispatch } from 'react-redux';

import { useForm } from '../hooks/useForm';
import { fileUpload } from '../helpers/FileUpload';
import { agregarProducto } from '../actions/actionProducto';
;

export const Estudiantes = ({ history }) => {

    const dispatch = useDispatch();

    const [values, handleInputChange, reset] = useForm({
        nombre: "",
        descripcion:"",
        fecha:"",
        imagen:""
    })

    let { nombre, descripcion, fecha, imagen } = values;

    const handleRegistro = e => {
        e.preventDefault();
        dispatch(agregarProducto(nombre, descripcion, fecha,imagen));
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

    // useEffect(() => {
    //     dispatch();
    //   }, [dispatch])

    return (
        <div>

            <form onSubmit={handleRegistro}>
                <h1>Estudiantes</h1>
                <div className="form-group">
                    <div className="form-group col-md-4">
                        <label htmlFor="documento">Documento</label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="nombre" 
                        id="documento"
                        value={nombre}
                        onChange={handleInputChange} />
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="nombres"> Descripcion </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="descripcion" 
                        id="nombres"
                        value={descripcion}
                        onChange={handleInputChange} />
                    </div>


                   

                    <div className="form-group col-md-4">
                        <label htmlFor="direccion"> Fecha </label>
                        <input 
                        className="form-control" 
                        type="text" 
                        name="fecha" 
                        id="direccion" 
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

                        <button className="btn btn-success"
                           onClick={handlePictureClick} type="button">Imagen</button>
                    </div>

                    <div>
                        <button className="btn btn-primary"
                            type="submit">Guardar</button>
                    </div>

                    <div>
                        {/* Se usa el type de tipo button para que no haga submit */}
                      
                    </div>

                </div>
            </form>
            
        </div>
    )
}
