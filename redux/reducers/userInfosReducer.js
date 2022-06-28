import { INFO_USER} from "../constants"

const initialState = {
    userId: '',
    lastName: '',
    firstName: '',
    tel: '',
    profilImage: '',
}

function userInfoReducer (state =initialState, action){
    switch (action.type) {
        case INFO_USER:
            return{

                userId: action.infos.userId,
                lastName: action.infos.lastName,
                firstName: action.infos.firstName,
                tel: action.infos.tel,
                profilImage: action.infos.profilImage


            }
    
        default:
            return state
    }
    

}

export default userInfoReducer;