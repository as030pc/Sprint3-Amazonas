
import React from 'react'
import { useDispatch } from 'react-redux'

import { useSelector } from 'react-redux'
import { listAsincronica } from '../actions/actionProducto'
import ReactImageMagnify from 'react-image-magnify';

const PaginaPrincipal = () => {
  const { productos } = useSelector(store => store.producto)
  const dispatch = useDispatch()
  console.log(productos);

  dispatch(listAsincronica());


  return (
    <div>
      <h1> Productos disponibles en la tienda </h1>
      {
        (productos) ?
          (
            productos.map((element, index) => (

              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">

                    <ReactImageMagnify {...{
                      smallImage: {
                        
                        isFluidWidth: true,
                        src: element.imagen
                      },
                      largeImage: {
                        src: element.imagen,
                        width: 1200,
                        height: 1800
                      }
                    }} />

                   
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
