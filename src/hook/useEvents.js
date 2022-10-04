import boletinApi from "../../api/boletinApi";


export const useEvents = () => {



    const sendMail = async(email) => {

        try {
            
        const data =  await boletinApi.post('/events',{
            email: email
        });
            

        } catch (error) {
            console.log({error});
        }
    
    
    }


    return {


        sendMail
    }



}

