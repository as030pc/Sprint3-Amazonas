
import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { listAsincronica } from '../actions/actionProducto'

const PaginaPrincipal = () => {
  const { productos } = useSelector(store => store.producto)
  const dispatch = useDispatch()
  console.log(productos);
 
  dispatch(listAsincronica());
  

  return (
    <div>
      <h1> Productos dispobibles en la tienda </h1>
      {
        (productos) ?
          (
            productos.map((element, index) => (

              <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src= {element.imagen} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{element.nombre}</h5>
                    <p className="card-text">{element.descripcion}</p>
                    <p className="card-text"><small className="text-muted">{element.fecha}</small></p>
                  </div>
                </div>
              </div>
            </div>
            )

            )) :
          <p>Datos no disponibles</p>
      }




    </div>
  )
}

export default PaginaPrincipal
