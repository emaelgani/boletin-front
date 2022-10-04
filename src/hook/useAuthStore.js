//ACA SE MANEJAN LAS PETICIONES ASINCRONICAS A SERVICIOS EXTERNOS.

import { useDispatch, useSelector } from "react-redux";
import { usuarios } from "../data-example/users";
import { onLogin, onLogout } from "../store";


export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector( state => state.auth );

    const dispatch = useDispatch();


    const startLogin = async({email, password}) => {

        //TODO: checking

        try {

            const {nombre, categoria, telegram_id} = usuarios.find( user => user.email === email );



            if(user){

                dispatch(onLogin({ nombre, email, password, categoria, telegram_id}));

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