import { AUTH_USER } from "../constants";

const initialState={
    token:null,
    userId:null
}


const appReducer=(state=initialState,action)=>{
    switch (action.type) {
        case AUTH_USER:
            return{
                token:action.token,
                userId:action.userId,

            }
            
    
        default:
            break;
    }
    return state
}
export default appReducer;