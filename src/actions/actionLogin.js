import {types} from "../types/types"
import { getAuth, signInWithPopup } from "@firebase/auth"
import { google } from "../firebase/firebaseConfig"

//accion asincronica
// se debe realizar un dispatch para que se ejecute cuando se resuelve el asincronismo


export const actionGoogle = ()=> {
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google) //recibe dos parametros
        .then(({user})=>{
        dispatch(actionLogin(user.uid,user.displayName));

        })
        .catch(error=>console.log(error))

    }
}

export const actionLogin = (id, displayname) => {
    return {
        type: types.login,
        payload:{
            id, 
            displayname


        }
    }
}
