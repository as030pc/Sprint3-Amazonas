import { typesProducto } from "../types/types";
import { addDoc,collection,deleteDoc,getDocs, query,where,doc } from "@firebase/firestore"
import {db} from "../firebase/firebaseConfig"

export const AgregarAsincrono = (nom, descrip, fecha, img) => {
    return (dispatch) => {
        const producto = {
            nom,
            descrip,
            fecha,
            img
        }
        //addDoc recibe como parametro la coleccion y el objeto que se desea adicionar
        //collection recibe como parametro el db y el nombre que se le dara a esta coleccion 
        addDoc(collection(db,"Productos"), producto )
        .then(resp=>{
            dispatch(agregarProducto(producto))
        })
        .catch(e=> console.error(e))
    }

}
export const agregarProducto = (producto) => {
    return {
        type:typesProducto.register,
        payload: producto
    }
}