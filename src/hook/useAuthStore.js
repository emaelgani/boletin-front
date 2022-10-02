//ACA SE MANEJAN LAS PETICIONES ASINCRONICAS A SERVICIOS EXTERNOS.

import { useDispatch, useSelector } from "react-redux";
import { onLogin, onLogout } from "../store";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();


    const startLogin = async({email, password}) => {

        //TODO: checking

        try {

            if(email === 'emanuelelgani@gmail.com' || email === 'valenrichter22@gmail.com' || email === 'marcoscar2001@gmail.com' && password === '123456'){

                dispatch(onLogin({email, password}));

            } else{
                dispatch(onLogout('Credenciales incorrectas'))
            }
            
        } catch (error) {
            console.log(error)

        }




    }





    return {
        //Propiedades
        status,
        user,
        errorMessage,


        //Métodos
        startLogin

    }


}