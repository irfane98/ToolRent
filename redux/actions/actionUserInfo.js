import { INFO_USER} from "../constants"
import { AsyncStorage } from 'react-native';

export function setUserInfos (firstName,lastName,tel,profilImage){

    return async(dispatch)=>{
        //firebase database
        const firebaseResp = await fetch('https://toolrent-351817-default-rtdb.europe-west1.firebasedatabase.app/users.json',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                //ID via Firebase   
                firstName: firstName,
                lastName: lastName,
                tel: tel,
                profilImage: profilImage
            })
        })

        if(!firebaseResp.ok){
            throw new Error('Oups nous avons un problème !')
        }
        const userData = await firebaseResp.json();
        //console.log(userData); //object name:ID 
        //{"name": "-N5anS55H83NjMrYTYHg"}

        //Dispatch
        dispatch(actionUserInfos(userData.name,firstName,lastName,tel,profilImage))

        //AsyncStorage
        saveToAsyncStorage(userData.name,firstName,lastName,tel,profilImage)


    }
}

async function saveToAsyncStorage(userId,firstName,lastName,tel,profilImage){
        
    await AsyncStorage.setItem('userProfilInfos',JSON.stringify({
        userId: userId,
        firstName: firstName,
        lastName: lastName,
        tel: tel,
        profilImage: profilImage

    }))
}

function actionUserInfos(userId,firstName,lastName,tel,profilImage){
    return {
        type:INFO_USER,
        infos: {
            userId: userId,
            firstName: firstName,
            lastName: lastName,
            tel: tel,
            profilImage: profilImage
        }
    }

}