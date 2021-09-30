import { typesProducto } from "../types/types";

const initialState = {
    productos:[]
}


export const productoReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducto.register:
            return { productos: [action.payload]}
        case typesProducto.list:
            return {
                productos:[...action.payload]
            }
        default:
            return state
        
    }
}




