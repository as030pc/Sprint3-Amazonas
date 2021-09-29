import { typesProducto } from "../types/types";

const initialState = {
    estudiante:[]
}


export const productoReducer = (state = initialState, action) => {
    switch (state) {
        case typesProducto.register:
            
            return { estudiante: [action.payload]}
        
    
        default:
            return state
    }
}


