import { typesProducto } from "../types/types";
import { addDoc,collection,deleteDoc,getDocs, query,where,doc } from "@firebase/firestore"
import {db} from "../firebase/firebaseConfig"

//Accion sincrona
export const agregarProducto = (producto) => {
    return {
        type:typesProducto.register,
        payload: producto
    }
}

//Actio asincronica
export const agregarAsincrono = (nombre, descripcion, fecha, imagen) => {
    return (dispatch) => {
        const producto = {
            nombre,
            descripcion,
            fecha,
            imagen
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



export const list = (producto) => {
    return {
        type: typesProducto.list,
        payload:producto
    }
    
}

export const listAsincronica = () => {
    return async (dispatch) => {
        const querySnapshot = await getDocs(collection(db, "Productos"))
        const productos = []
        querySnapshot.forEach((doc)=>{
            productos.push({
                ...doc.data()
            })
        })
        dispatch(list(productos))
    }
}

//Eliminar
export const eliminar = (nombre) => {
    return {
        type: typesProducto.delete,
        payload: nombre
    }
}

export const deleteAsincrono = (nombre) =>{
    return async(dispatch) => {
        const prodCollection = collection(db,"Productos");
        const q = query(prodCollection,where("nombre","==",nombre))
        const datos = await getDocs(q);
        datos.forEach((docu) => {
            //doc una especie de buscador
            deleteDoc(doc(db,"Productos",docu.id));
        })
        dispatch(eliminar(nombre));
    }
}
