
import { AUTH_USER } from "../constants";
import  {AsyncStorage}  from 'react-native';




// INSCRIPTION 
export const actionSignup=(email,password)=>{

    return async(dispatch)=>{
        //HTTP request
        const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmDI-fc6sVhFrzUmFOfJyRus8Dsl5YjTA',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password, 
                returnSecureToken:true
            })
        })

        //response
        if (!response.ok) {
            const responseError= await response.json();
            const errorMsg= responseError.error.message;

            let customMsg="oups ! email ou mot de passe incorrect"

            if (errorMsg === "EMAIL_EXISTS") {
                customMsg="Cet e-mail existe déjà!"
            }
            else if (errorMsg === "TOO_MANY_ATTEMPTS_TRY_LATER ") {
                customMsg="Trop de tentative reéessayer plus tard"
                
            } 

            throw new Error(customMsg)
            
        }
        const dataObj= await response.json();
        // dispatch action 
    dispatch(actionAuthUser(dataObj.localId,dataObj.idToken))

    //asyncStorage
    const expiresInMilisec= parseInt(dataObj.expiresIn)*1000;
    const expireDate= new Date().getTime() + expiresInMilisec;

    const dateTokenExpire=new Date(expireDate).toISOString();

    saveToAsyncStorage(dataObj.token,dataObj.userId,dataObj.dateTokenExpire)

    }

}
/**
{
"email": "irfane@gmail.com",
 "expiresIn": "3600",
  "idToken": "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5MGZiMWFlMDQ4YTU0OGZiNjgxYWQ2MDkyYjBiODY5ZWE0NjdhYzYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdG9vbHJlbnQtMzUxODE3IiwiYXVkIjoidG9vbHJlbnQtMzUxODE3IiwiYXV0aF90aW1lIjoxNjU1OTE2NzEzLCJ1c2VyX2lkIjoiMEFBQWFnRVQxaWZ3ajVkV2N5TWNhTmJ5UzhKMiIsInN1YiI6IjBBQUFhZ0VUMWlmd2o1ZFdjeU1jYU5ieVM4SjIiLCJpYXQiOjE2NTU5MTY3MTMsImV4cCI6MTY1NTkyMDMxMywiZW1haWwiOiJpcmZhbmVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImlyZmFuZUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.uC7CC1Y_m33MrVHoL2o8LoB82_hNrAovxorwFCVf4HFyTRmOWReTlAcduTnaN5AL-lI1OpZU3Itx5IIWpbQ_cpUERySUJofhaBgume4_pdV1DUhaxBCxaCg-taxT02sM55Z3j-bPEMTs-6CV2mu1cu3ChItjDyoe7_n4Qbl10sB-0PW3HVGxvlTEqQ1n7ByLSX0G2HqSkplQJu3l8hZ03c0geIxDeo8htkm4KoPUyrcAn65A7aV0JlKG0rXzEjBtJ4RluTpdM9YvSJ9PSb5UOELGDP2nwz5ZmS7NiMmqtGPjnOc5hi0BkiWPeeWcPQeUScPfl1NRMDX5JdkiDuyd0g", 
  "kind": "identitytoolkit#SignupNewUserResponse",
 "localId": "0AAAagET1ifwj5dWcyMcaNbyS8J2", 
"refreshToken": "AIwUaOkwXyjTooWiMBnbT8EMbLD0iGxDxL8N9MaW2Osv3_eVxPeVvxur5l6NtXNgUafC31vuawwNfrGOC2n_j8g63KUHGXlgXvLEBOQuYqHl9KFcg5pisT2msnklzH3vnNNPzrFZxjSsOEpJr3TK4aHXuyCLPviunwJAx4W5C99OG60UdxUTtEq5hVprp4TnhoehZXZsPEpkpUhedP_BEeLECNbKTLn-Iw"} 

 */


//CONNEXION
export const actionLogin=(email,password)=>{

    return async(dispatch)=>{
        //HTTP request
        const response= await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmDI-fc6sVhFrzUmFOfJyRus8Dsl5YjTA',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify({
                email:email,
                password:password, 
                returnSecureToken:true
            })
        })

        //response
        if (!response.ok) {
            //message d'erreur
            const responseError= await response.json();
            const errorMsg= responseError.error.message;

           let customMsg="oups ! email ou mot de passe incorrect"

            if (errorMsg === "EMAIL_NOT_FOUND" ) {
                customMsg="Adresse e-mail introuvable!"
            }
            else if (errorMsg === "INVALID_PASSWORD") {
                customMsg="Le mot de passe est incorrect!"
                
            } 

            throw new Error(customMsg)
            
        }
        const dataObj= await response.json();
        // dispatch action
        dispatch(actionAuthUser(dataObj.localId,dataObj.idToken))
        //asyncStorage
    const expiresInMilisec= parseInt(dataObj.expiresIn)*1000;
    const expireDate= new Date().getTime() + expiresInMilisec;

    const dateTokenExpire=new Date(expireDate).toISOString();

    saveToAsyncStorage(dataObj.token,dataObj.userId,dataObj.dateTokenExpire)


    }

}
//enregistrer la data dans AsynStorage
const saveToAsyncStorage=async (token,userId,dateTokenExpire)=>{
    await AsyncStorage.setItem("userDetails",JSON.stringify({
        token:token,
        userId:userId,
        dateTokenExpire:dateTokenExpire
    }))
    

}



//AUTH action 
const actionAuthUser=(userId,token)=>{
    return{
        type:AUTH_USER,
        userId:userId,
        token:token
    }
}