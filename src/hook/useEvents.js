import boletinApi from "../../api/boletinApi";


export const useEvents = () => {



    const sendMail = async(email) => {

        try {
            
        const data =  await boletinApi.post('/events');
            

        } catch (error) {
            console.log({error});
        }
    
    
    }


    return {


        sendMail
    }



}

